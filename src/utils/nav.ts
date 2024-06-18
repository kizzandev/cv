export function handleLangNav(to: string, lang?: string) {
  return `/${lang ? lang + "/" : ""}${to}`;
}
