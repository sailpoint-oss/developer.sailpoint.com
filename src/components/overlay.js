const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

// Function to apply overlay and add x-codeSamples
function applyOverlayToSpec(openApiFilePath, overlayFilePath, outputFilePath) {
    try {
        // Read OpenAPI specification and overlay
        const openApiSpec = yaml.load(fs.readFileSync(openApiFilePath, 'utf8'));
        const overlay = yaml.load(fs.readFileSync(overlayFilePath, 'utf8'));

        // Check if the OpenAPI spec has a valid 'paths' object
        if (!openApiSpec.paths) {
            throw new Error("OpenAPI specification does not contain 'paths' object.");
        }

        // Apply overlay
        overlay.forEach(({ path: apiPath, method, xCodeSample }) => {
            console.log(`Processing: ${apiPath} ${method}`); // Debugging: Check which path and method are being processed
            console.log("xCodeSample:", xCodeSample); // Debugging: Log xCodeSample to verify it's correct
            // Ensure that the path and method exist in the OpenAPI spec
            if (openApiSpec.paths[apiPath] && openApiSpec.paths[apiPath][method.toLowerCase()]) {
                // Check if xCodeSample exists and is properly structured
                if (xCodeSample && Array.isArray(xCodeSample) && xCodeSample.length > 0) {
                    console.log("xCodeSample:", xCodeSample); // Debugging: Log xCodeSample to verify it's correct

                    // Check if x-codeSamples already exists and is an array, if not initialize it
                    const methodSpec = openApiSpec.paths[apiPath][method.toLowerCase()];

                    if (!Array.isArray(methodSpec['x-codeSamples'])) {
                        methodSpec['x-codeSamples'] = [];
                        console.log("Initialized x-codeSamples as an array"); // Debugging: Log array initialization
                    }

                    // Add the xCodeSample to the x-codeSamples array
                    xCodeSample.forEach(sample => {
                        methodSpec['x-codeSamples'].push(sample);
                    });
                    console.log("Pushed xCodeSample to x-codeSamples"); // Debugging: Log successful push
                } else {
                    console.warn(`Skipping entry: xCodeSample is missing or malformed for path: ${apiPath} method: ${method}`);
                }
            } else {
                console.error(`Path or method not found: ${apiPath} ${method}`);
            }
        });

        // Write the updated OpenAPI spec to the output file
        fs.writeFileSync(outputFilePath, yaml.dump(openApiSpec, { noRefs: true, lineWidth: -1 }), 'utf8');
        console.log(`Successfully updated OpenAPI spec and saved to ${outputFilePath}`);
    } catch (err) {
        console.error(`Error: ${err.message}`);
    }
}

// Check if both input files are provided
if (process.argv.length !== 4) {
    console.error("Usage: node <script> <openapi-spec-path> <overlay-path>");
    process.exit(1);
}

// Resolve paths to ensure consistency
const openApiFilePath = path.resolve(process.argv[2]);
const overlayFilePath = path.resolve(process.argv[3]);
const outputFilePath = path.resolve(process.argv[2]);

// Run the function
applyOverlayToSpec(openApiFilePath, overlayFilePath, outputFilePath);
