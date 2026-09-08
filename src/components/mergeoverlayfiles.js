const fs   = require('fs');
const yaml = require('js-yaml');
const path = require('path');

// Get file paths from command line arguments.
// Every argument is one per-SDK code-examples overlay. Missing or empty files
// are tolerated, so an SDK whose build produced no overlay is simply skipped.
const overlayPaths = process.argv.slice(2);

if (overlayPaths.length === 0) {
  console.error('Usage: node mergeoverlayfiles.js <overlay.yaml> [<overlay.yaml> ...]');
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
const overlayData = overlayPaths.map(loadYaml);

// Merge logic — collects all languages, keyed by path+method. The method case
// differs between SDK generators, so normalize it to build one entry per
// endpoint instead of one per generator.
const mergeCodeSamples = (...allData) => {
  const merged = {};

  allData.forEach(fileData => {
    (fileData || []).forEach(item => {
      const key = `${item.path}|${String(item.method).toLowerCase()}`;
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
const mergedArray = mergeCodeSamples(...overlayData);

// Dump back to YAML without line-wrapping
const mergedYaml = yaml.dump(mergedArray, { lineWidth: -1 });

// Write output next to the first overlay — all overlays share one directory
const outDir  = path.dirname(overlayPaths[0]);
const outPath = path.join(outDir, 'merged_code_examples.yaml');
fs.writeFileSync(outPath, mergedYaml, 'utf8');

console.log(`Merged YAML written to ${outPath}`);
