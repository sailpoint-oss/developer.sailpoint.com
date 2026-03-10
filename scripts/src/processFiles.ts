

import * as fs from 'fs';
import * as path from 'path';

export async function processFiles() {
    console.log("Processing files...");
}



export function getMdFiles(folderPath: string, recursive: boolean = false): string[] {
  const mdFiles: string[] = [];
  
  const items = fs.readdirSync(folderPath);
  
  for (const item of items) {
    const itemPath = path.join(folderPath, item);
    const stat = fs.lstatSync(itemPath);

    if (stat.isFile() && path.extname(itemPath) === '.md') {
      mdFiles.push(itemPath);
    } else if (stat.isDirectory() && recursive) {
      const nestedMdFiles = getMdFiles(itemPath, recursive);
      mdFiles.push(...nestedMdFiles);
    }
  }

  return mdFiles;
}