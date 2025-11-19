const fs = require('fs').promises;
const path = require('path');

/**
 * Convert a string to sentence case: first word uppercase, all other words lowercase.
 */
function toSentenceCase(str) {
  if (!str) return str;
  const lower = str.trim().toLowerCase();
  const words = lower.split(/\s+/);
  words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
  return words.join(' ');
}

/**
 * Process each YAML file's content, updating both `summary:` and `name:` lines.
 */
function updateContent(content, filePath) {
  const patterns = [
    /^(\s*summary:\s*)(["']?)(.+?)(["']?)\s*$/gm,
    /^(\s*-?\s*name:\s*)(["']?)(.+?)(["']?)\s*$/gm
  ];
  let updated = content;
  patterns.forEach(regex => {
    updated = updated.replace(regex, (_, prefix, openQ, text, closeQ) => {
      const newText = toSentenceCase(text);
      if (newText !== text) {
        console.log(`Updating ${filePath}: "${text}" → "${newText}"`);
      }
      return `${prefix}${openQ}${newText}${closeQ}`;
    });
  });
  return updated;
}

/**
 * Recursively traverse and process YAML files in a directory.
 */
async function processPath(inputPath) {
  let stat;
  try {
    stat = await fs.stat(inputPath);
  } catch {
    return;
  }

  if (stat.isDirectory()) {
    const entries = await fs.readdir(inputPath);
    await Promise.all(entries.map(name => processPath(path.join(inputPath, name))));
    return;
  }

  if (!/\.(ya?ml)$/i.test(inputPath)) return;

  let content;
  try {
    content = await fs.readFile(inputPath, 'utf8');
  } catch (err) {
    console.error(`Failed to read ${inputPath}:`, err);
    return;
  }

  const updated = updateContent(content, inputPath);
  if (updated !== content) {
    try {
      await fs.writeFile(inputPath, updated, 'utf8');
      console.log(`Saved changes to ${inputPath}`);
    } catch (err) {
      console.error(`Failed to write ${inputPath}:`, err);
    }
  }
}

(async () => {
  const target = process.argv[2];
  if (!target) {
    console.error('Usage: updateSpecsSentenceCase.js <file-or-directory>');
    process.exit(1);
  }

  const startPath = path.resolve(target);
  console.log(`Starting update at ${startPath}`);

  try {
    await processPath(startPath);
    console.log('All done.');
  } catch (err) {
    console.error('Error during processing:', err);
    process.exit(1);
  }
})();
