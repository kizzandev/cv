// const dictionaries = {
//   en: () => import("./dictionaries/en.json").then((module) => module.default),
//   ag: () => import("./dictionaries/ag.json").then((module) => module.default),
// };

// export const getDictionary = async (locale: "en" | "ag") =>
//   dictionaries[locale]();

import en from "./dictionaries/en.json";
import ag from "./dictionaries/ag.json";

export const getDictionary = (locale: "en" | "ag") =>
  locale === "en" ? en : ag;

// type of the return type of getDictionary
export type Dictionary = typeof en;
