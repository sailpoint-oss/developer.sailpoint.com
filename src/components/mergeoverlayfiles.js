const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');

// Get file paths from command line arguments
const pythonFilePath = process.argv[2];
const powershellFilePath = process.argv[3];

// Check if the correct number of arguments is passed
if (!pythonFilePath || !powershellFilePath) {
  console.error('Please provide the paths for the Python and PowerShell YAML files.');
  process.exit(1);
}

// Read both YAML files
const powershellFile = fs.readFileSync(powershellFilePath, 'utf8');
const pythonFile = fs.readFileSync(pythonFilePath, 'utf8');

// Parse both YAML files
const powershellData = yaml.load(powershellFile);
const pythonData = yaml.load(pythonFile);

// Function to merge xCodeSamples for the same path and method
const mergeCodeSamples = (powershellData, pythonData) => {
  // Create a map to keep track of paths and methods, and merged samples
  const mergedData = {};

  // Iterate over both files
  [powershellData, pythonData].forEach(fileData => {
    fileData.forEach(item => {
      const path = item.path;
      const method = item.method;
      
      // Initialize the path and method if not already in mergedData
      if (!mergedData[path]) {
        mergedData[path] = {};
      }
      
      if (!mergedData[path][method]) {
        mergedData[path][method] = {
          path: item.path,
          method: item.method,
          xCodeSample: []
        };
      }

      // Add the xCodeSample data, if it exists
      if (item.xCodeSample) {
        mergedData[path][method].xCodeSample.push(...item.xCodeSample);
      }
    });
  });

  // Convert the merged data back to an array format (flatten the structure)
  const mergedArray = [];
  Object.keys(mergedData).forEach(path => {
    Object.keys(mergedData[path]).forEach(method => {
      mergedArray.push(mergedData[path][method]);
    });
  });

  return mergedArray;
};

// Merge the data
const mergedCode = mergeCodeSamples(powershellData, pythonData);

// Convert the merged data to YAML format
const mergedYaml = yaml.dump(mergedCode);

// Derive the output directory and file name
const pythonFileDir = path.dirname(pythonFilePath);
const powershellFileDir = path.dirname(powershellFilePath);

// Find the common directory (use the Python file's directory as the base)
const commonDir = pythonFileDir;

// Create the output file path
const outputFilePath = path.join(commonDir, 'merged_code_examples.yml');

// Write the merged result to the output file
fs.writeFileSync(outputFilePath, mergedYaml, 'utf8');

console.log(`Merged YAML file has been saved to ${outputFilePath}`);
