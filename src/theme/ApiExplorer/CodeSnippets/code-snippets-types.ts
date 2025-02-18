// https://github.com/github-linguist/linguist/blob/master/lib/linguist/popular.yml
export type CodeSampleLanguage =
  | "C"
  | "C#"
  | "C++"
  | "CoffeeScript"
  | "CSS"
  | "Dart"
  | "DM"
  | "Elixir"
  | "Go"
  | "Groovy"
  | "HTML"
  | "Java"
  | "JavaScript"
  | "Kotlin"
  | "Objective-C"
  | "OCaml"
  | "Perl"
  | "PHP"
  | "PowerShell"
  | "Python"
  | "R"
  | "Ruby"
  | "Rust"
  | "Scala"
  | "Shell"
  | "Swift"
  | "TypeScript";

export interface Language {
  highlight: string;
  language: string;
  codeSampleLanguage: CodeSampleLanguage;
  logoClass: string;
  variant: string | null;
  variants: string[] | null;
  options?: { [key: string]: boolean };
  sample?: string;
  samples?: string[];
  samplesSources?: string[];
  samplesLabels?: string[];
  tag?: string;
}

// https://redocly.com/docs/api-reference-docs/specification-extensions/x-code-samples
export interface CodeSample {
  source: string;
  lang: CodeSampleLanguage;
  label?: string;
}
