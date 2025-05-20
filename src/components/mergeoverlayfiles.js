const fs   = require('fs');
const yaml = require('js-yaml');
const path = require('path');

// Get file paths from command line arguments
const [powershellFilePath, pythonFilePath, goFilePath] = process.argv.slice(2);

// Check that all three arguments are provided
if (!powershellFilePath || !pythonFilePath || !goFilePath) {
  console.error('Usage: node merge.js <powershell.yml> <python.yml> <go.yml>');
  process.exit(1);
}

// Read & parse all three YAML files
const powershellData = yaml.load(fs.readFileSync(powershellFilePath, 'utf8'));
const pythonData     = yaml.load(fs.readFileSync(pythonFilePath,     'utf8'));
const goData         = yaml.load(fs.readFileSync(goFilePath,         'utf8'));

// Merge logic (collects all three in one pass)
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
const mergedArray = mergeCodeSamples(powershellData, pythonData, goData);

// Dump back to YAML without line-wrapping
const mergedYaml = yaml.dump(mergedArray, { lineWidth: -1 });

// Write to output next to the Go file (you can choose a different base dir if you like)
const outDir = path.dirname(goFilePath);
const outPath = path.join(outDir, 'merged_code_examples.yaml');
fs.writeFileSync(outPath, mergedYaml, 'utf8');

console.log(`Merged YAML written to ${outPath}`);
