// https://github.com/github-linguist/linguist/blob/master/lib/linguist/popular.yml
export type CodeSampleLanguage =
  | "Go"
  | "PowerShell"
  | "Python"
  | "TypeScript"
  | "C"
  | "C#"
  | "C++"
  | "CoffeeScript"
  | "CSS"
  | "Dart"
  | "DM"
  | "Elixir"
  | "Groovy"
  | "HTML"
  | "Java"
  | "JavaScript"
  | "Kotlin"
  | "Objective-C"
  | "OCaml"
  | "Perl"
  | "PHP"
  | "R"
  | "Ruby"
  | "Rust"
  | "Scala"
  | "Shell"
  | "Swift";

export interface Language {
  highlight: string;
  language: string;
  codeSampleLanguage: CodeSampleLanguage;
  logoClass: string;
  variant: string;
  variants: string[];
  options?: { [key: string]: boolean };
  sample?: string;
  samples?: string[];
  samplesSources?: string[];
  samplesLabels?: string[];
}

// https://redocly.com/docs/api-reference-docs/specification-extensions/x-code-samples
export interface CodeSample {
  source: string;
  lang: CodeSampleLanguage;
  label?: string;
}
