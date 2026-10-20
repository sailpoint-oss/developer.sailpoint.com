import find from "lodash/find";
import mergeWith from "lodash/mergeWith";
import unionBy from "lodash/unionBy";
import codegen from "postman-code-generators";

import { CodeSample, Language } from "./code-snippets-types";

export function mergeCodeSampleLanguage(
  languages: Language[],
  codeSamples: CodeSample[]
): Language[] {
  return languages.map((language) => {
    const languageCodeSamples = codeSamples.filter(
      ({ lang }) => lang === language.codeSampleLanguage
    );

    if (languageCodeSamples.length) {
      const samples = languageCodeSamples.map(({ lang }) => lang);
      const samplesLabels = languageCodeSamples.map(
        ({ label, lang }) => label || lang
      );
      const samplesSources = languageCodeSamples.map(({ source }) => source);

      return {
        ...language,
        sample: samples[0],
        samples,
        samplesSources,
        samplesLabels,
      };
    }

    return language;
  });
}

export const mergeArraysbyLanguage = (arr1: any, arr2: any) => {
  const mergedArray = unionBy(arr1, arr2, "language");

  return mergedArray.map((item: any) => {
    const matchingItems = [
      find(arr1, ["language", item["language"]]),
      find(arr2, ["language", item["language"]]),
    ];
    return mergeWith({}, ...matchingItems, (objValue: any) => {
      return objValue;
    });
  });
};

export function getCodeSampleSourceFromLanguage(language: Language) {
  if (
    language &&
    language.sample &&
    language.samples &&
    language.samplesSources
  ) {
    const sampleIndex = language.samples.findIndex(
      (smp) => smp === language.sample
    );
    return language.samplesSources[sampleIndex];
  }

  return "";
}

// Order of the outer language tabs. The languages with a SailPoint SDK come
// first, in this order; everything else keeps the postman-code-generators order.
const PRIORITY_ORDER = [
  "go",
  "powershell",
  "python",
  "typescript",
  "angular",
];

// Languages that postman-code-generators does not provide. They are added
// manually so that x-codeSamples with a matching `lang` are displayed.
const SDK_ONLY_LANGUAGES = [
  {
    highlight: "typescript",
    language: "typescript",
    codeSampleLanguage: "TypeScript",
    logoClass: "typescript",
  },
  {
    // Angular samples are TypeScript, so they use the TypeScript highlighter.
    highlight: "typescript",
    language: "angular",
    codeSampleLanguage: "Angular",
    logoClass: "angular",
  },
];

function sortByPriority(languageSet: Language[]) {
  languageSet.sort((a, b) => {
    const aPriority = PRIORITY_ORDER.indexOf(a.language);
    const bPriority = PRIORITY_ORDER.indexOf(b.language);
    if (aPriority !== -1 && bPriority !== -1) return aPriority - bPriority;
    if (aPriority !== -1) return -1;
    if (bPriority !== -1) return 1;
    return 0;
  });
}

export function generateLanguageSet() {
  const languageSet: Language[] = [];

  codegen.getLanguageList().forEach((language: any) => {
    const variants: any = [];
    language.variants.forEach((variant: any) => {
      variants.push(variant.key);
    });
    languageSet.push({
      highlight: language.syntax_mode,
      language: language.key,
      codeSampleLanguage: language.label,
      logoClass: language.key,
      options: {
        longFormat: false,
        followRedirect: true,
        trimRequestBody: true,
      },
      variant: variants[0],
      variants: variants,
      tag: PRIORITY_ORDER.includes(language.key) ? "sailpoint-sdk" : "",
    });
  });

  SDK_ONLY_LANGUAGES.forEach((sdkLanguage) => {
    if (languageSet.find((l) => l.language === sdkLanguage.language)) return;
    languageSet.push({
      ...sdkLanguage,
      options: {
        longFormat: false,
        followRedirect: true,
        trimRequestBody: true,
      },
      variant: "fetch",
      variants: ["fetch"],
      tag: "sailpoint-sdk",
    } as any);
  });

  sortByPriority(languageSet);

  return languageSet;
}
