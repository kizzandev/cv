export type BlogItem = {
  title: string;
  pubDate: string;
  description: string;
  link: string;
};

async function fetchAndCacheRSSFeed(lang: string): Promise<BlogItem[] | null> {
  let RSS_FEED_URL = `https://blog.kizzan.dev/rss.xml`;
  if (lang === "en") {
    RSS_FEED_URL = `https://blog.kizzan.dev/en/rss.xml`;
  }

  try {
    const response = await fetch(RSS_FEED_URL);
    const data = await response.text();

    const data_as_xml = new DOMParser().parseFromString(data, "text/xml");
    const data_nodes = data_as_xml.querySelectorAll("item");
    const html_collection: BlogItem[] = [];

    const totalItems = data_nodes.length;
    const getUpToFourArticles = data_nodes.length > 4 ? 4 : data_nodes.length;
    for (
      let i = totalItems - 1;
      i > totalItems - getUpToFourArticles - 1;
      i--
    ) {
      const children = data_nodes[i].children;
      let item = [];
      for (let j = 0; j < children.length; j++) {
        item.push(children[j].textContent);
      }
      const [title, link, _guid, description, pubDate, _author] = item;
      if (!title || !link || !description || !pubDate) {
        continue;
      }

      // Fix date format from "Wed, 26 Jun 2024 00:00:00 GMT" to "YYYY-MM-DD"
      const date = new Date(pubDate);
      const pubArticleDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() + 1}`;

      html_collection.push({
        title,
        pubDate: pubArticleDate,
        description,
        link,
      });
    }

    // Store the data and the timestamp in localStorage
    localStorage.setItem(
      `rssFeedData${lang === "en" ? "_en" : ""}`,
      JSON.stringify(html_collection),
    );
    localStorage.setItem(
      `rssFeedTimestamp${lang === "en" ? "_en" : ""}`,
      Date.now().toString(),
    );

    return html_collection;
  } catch (error) {
    console.error("Error fetching RSS feed:", error);
    return null;
  }
}

export default async function getRSSFeed(lang: string) {
  // Check if the data is cached and if it is still valid
  let cachedData = localStorage.getItem("rssFeedData");
  let cachedTimestamp = localStorage.getItem("rssFeedTimestamp");
  if (lang === "en") {
    cachedData = localStorage.getItem("rssFeedData_en");
    cachedTimestamp = localStorage.getItem("rssFeedTimestamp_en");
  }

  if (cachedData && cachedTimestamp) {
    const currentTime = Date.now();
    const cacheAge = currentTime - parseInt(cachedTimestamp, 10);

    // Check if the cache is less than 24 hours old
    if (cacheAge < 24 * 60 * 60 * 1000) {
      return JSON.parse(cachedData);
    }
  } /***/

  // If the cache is invalid or does not exist, fetch the data
  return fetchAndCacheRSSFeed(lang);
}
