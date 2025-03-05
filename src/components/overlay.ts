import fs from "fs";
import path from "path";
import yaml from "js-yaml";

// Define types for overlay entries
interface XCodeSample {
  lang: string;
  source: string;
}

interface OverlayEntry {
  path: string;
  method: string;
  xCodeSample: XCodeSample[];
}

// Function to apply overlay and add x-codeSamples
function applyOverlayToSpec(
  openApiFilePath: string,
  overlayFilePath: string,
  outputFilePath: string
): void {
  try {
    // Read OpenAPI specification and overlay
    const openApiSpec = yaml.load(
      fs.readFileSync(openApiFilePath, "utf8")
    ) as Record<string, any>;
    const overlay = yaml.load(
      fs.readFileSync(overlayFilePath, "utf8")
    ) as OverlayEntry[];

    // Check if the OpenAPI spec has a valid 'paths' object
    if (!openApiSpec.paths || typeof openApiSpec.paths !== "object") {
      throw new Error("OpenAPI specification does not contain a valid 'paths' object.");
    }

    // Apply overlay
    overlay.forEach(({ path: apiPath, method, xCodeSample }) => {
      const lowerMethod = method.toLowerCase();

      // Ensure that the path and method exist in the OpenAPI spec
      if (openApiSpec.paths[apiPath] && openApiSpec.paths[apiPath][lowerMethod]) {
        // Check if xCodeSample exists and is properly structured
        if (Array.isArray(xCodeSample) && xCodeSample.length > 0) {
          const methodSpec = openApiSpec.paths[apiPath][lowerMethod];

          if (!Array.isArray(methodSpec["x-codeSamples"])) {
            methodSpec["x-codeSamples"] = [];
          }

          // Add the xCodeSample to the x-codeSamples array
          methodSpec["x-codeSamples"].push(...xCodeSample);
        } else {
          console.warn(
            `Skipping entry: xCodeSample is missing or malformed for path: ${apiPath} method: ${method}`
          );
        }
      } else {
        console.error(`Path or method not found: ${apiPath} ${method}`);
      }
    });

    // Write the updated OpenAPI spec to the output file
    fs.writeFileSync(
      outputFilePath,
      yaml.dump(openApiSpec, { noRefs: true, lineWidth: -1 }),
      "utf8"
    );
  } catch (err) {
    console.error(`Error: ${(err as Error).message}`);
  }
}

// Ensure that correct arguments are provided
if (process.argv.length !== 4) {
  console.error("Usage: ts-node <script> <openapi-spec-path> <overlay-path>");
  process.exit(1);
}

// Resolve paths to ensure consistency
const openApiFilePath: string = path.resolve(process.argv[2]);
const overlayFilePath: string = path.resolve(process.argv[3]);
const outputFilePath: string = path.resolve(process.argv[2]);

// Run the function
applyOverlayToSpec(openApiFilePath, overlayFilePath, outputFilePath);
