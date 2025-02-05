import find from 'lodash/find';
import mergeWith from 'lodash/mergeWith';
import unionBy from 'lodash/unionBy';
import codegen from 'postman-code-generators';

import {CodeSample, Language} from './code-snippets-types';

export function mergeCodeSampleLanguage(
  languages: Language[],
  codeSamples: CodeSample[],
): Language[] {
  return languages.map((language) => {
    const languageCodeSamples = codeSamples.filter(
      ({lang}) => lang === language.codeSampleLanguage,
    );

    if (languageCodeSamples.length) {
      const samples = languageCodeSamples.map(({lang}) => lang);
      const samplesLabels = languageCodeSamples.map(
        ({label, lang}) => label || lang,
      );
      const samplesSources = languageCodeSamples.map(({source}) => source);

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
  const mergedArray = unionBy(arr1, arr2, 'language');

  return mergedArray.map((item: any) => {
    const matchingItems = [
      find(arr1, ['language', item['language']]),
      find(arr2, ['language', item['language']]),
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
      (smp) => smp === language.sample,
    );
    return language.samplesSources[sampleIndex];
  }

  return '';
}

export function generateLanguageSet() {
  const languageSet: Language[] = [];

  // Create a list of prioritized languages (in order)
  const priorityOrder = ['go', 'powershell', 'python', 'typescript'];
  
  // First, push all languages into the languageSet
  codegen.getLanguageList().forEach((language: any) => {
    const variants: any = [];
    language.variants.forEach((variant: any) => {
      variants.push(variant.key);
    });

    // Determine if the current language is in the priority list
    const isPriority = priorityOrder.includes(language.key);

    // Add the language object to the languageSet
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
      tag: language.key === 'powershell' ? 'sailpoint-sdk' : '', // Only add the "sailpoint-sdk" tag for PowerShell
    });
  });

  // Add TypeScript to the languageSet with a similar structure (assuming TypeScript has similar variants)
  // languageSet.push({
  //   highlight: 'typescript', // Syntax highlighting for TypeScript
  //   language: 'typescript', // The language key
  //   codeSampleLanguage: 'TypeScript', // Label for TypeScript
  //   logoClass: 'typescript', // Logo class for TypeScript
  //   options: {
  //     longFormat: false,
  //     followRedirect: true,
  //     trimRequestBody: true,
  //   },
  //   variant: null, // Example variant for TypeScript (you can add more variants as needed)
  //   variants: null, // Add more variants as needed
  //   tag: '', // No tag for TypeScript at the moment
  // });

  // Sort the languageSet based on the priority order
  languageSet.sort((a, b) => {
    const aPriority = priorityOrder.indexOf(a.language);
    const bPriority = priorityOrder.indexOf(b.language);

    // If both languages are in the priority list, sort by their priority
    if (aPriority !== -1 && bPriority !== -1) {
      return aPriority - bPriority;
    }

    // If only one language is in the priority list, place that one first
    if (aPriority !== -1) return -1;
    if (bPriority !== -1) return 1;

    // If neither language is in the priority list, keep original order
    return 0;
  });

  return languageSet;
}
