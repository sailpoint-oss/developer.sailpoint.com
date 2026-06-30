const fs   = require('fs');
const yaml = require('js-yaml');
const path = require('path');

// Get file paths from command line arguments
// Accepts 3 required args (python, powershell, go) plus an optional 4th (typescript)
const [pythonFilePath, powershellFilePath, goFilePath, typescriptFilePath] = process.argv.slice(2);

// Check that the three required arguments are provided
if (!pythonFilePath || !powershellFilePath || !goFilePath) {
  console.error('Usage: node merge.js <python.yml> <powershell.yml> <go.yml> [<typescript.yml>]');
  process.exit(1);
}

// Helper: safely load a YAML file, returning an empty array if it is missing or empty
const loadYaml = (filePath) => {
  if (!filePath) return [];
  try {
    return yaml.load(fs.readFileSync(filePath, 'utf8')) || [];
  } catch (e) {
    console.warn(`Warning: could not read ${filePath} — ${e.message}`);
    return [];
  }
};

// Read & parse all files
const pythonData     = loadYaml(pythonFilePath);
const powershellData = loadYaml(powershellFilePath);
const goData         = loadYaml(goFilePath);
const typescriptData = loadYaml(typescriptFilePath);

// Merge logic — collects all languages, keyed by path+method
const mergeCodeSamples = (...allData) => {
  const merged = {};

  allData.forEach(fileData => {
    (fileData || []).forEach(item => {
      const key = `${item.path}|${item.method}`;
      if (!merged[key]) {
        merged[key] = { path: item.path, method: item.method, xCodeSample: [] };
      }
      if (Array.isArray(item.xCodeSample)) {
        merged[key].xCodeSample.push(...item.xCodeSample);
      }
    });
  });

  return Object.values(merged);
};

// Perform the merge
const mergedArray = mergeCodeSamples(pythonData, powershellData, goData, typescriptData);

// Dump back to YAML without line-wrapping
const mergedYaml = yaml.dump(mergedArray, { lineWidth: -1 });

// Write output next to the Go file
const outDir  = path.dirname(goFilePath);
const outPath = path.join(outDir, 'merged_code_examples.yaml');
fs.writeFileSync(outPath, mergedYaml, 'utf8');

console.log(`Merged YAML written to ${outPath}`);
