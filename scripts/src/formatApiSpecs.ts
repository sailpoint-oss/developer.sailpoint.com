import * as fs from 'fs';
import * as path from 'path';

export function filterAPITextString(inputText: string): string {
    
    const lines = inputText.split('\n');
    const newLines: string[] = [];
    for (let line of lines) {
      if (line.startsWith('api:')){
        continue;
      }
      if (line.startsWith('import ')){
        continue;
      }
      if (line.startsWith('Client Error - Returned if the request body is invalid.')){
        return newLines.join('\n');
      }
      if (line.startsWith('Generic localized reason for error')){
        return newLines.join('\n');
      }
      if (line.startsWith('Plain-text descriptive reasons to provide additional detail to the text provided in the messages field')){
        return newLines.join('\n');
      }
      if (line.startsWith('Unauthorized - Returned if there is no authorization header, or if the JWT token is expired.')){
        return newLines.join('\n');
      }
      if (line.startsWith('Forbidden - Returned if the user you are running as, doesn\'t have access to this end-point.')){
        return newLines.join('\n');
      }
      if (line.startsWith('Not Found - returned if the request URL refers to a resource or object that does not exist')){
        return newLines.join('\n');
      }
      if (line.startsWith('Internal Server Error - Returned if there is an unexpected error.')){
        return newLines.join('\n');
      }
      newLines.push(line);
    }
    return newLines.join('\n');
  }


  export function processFiles(directory: string): void {
    // Read all files in the directory
    const files = fs.readdirSync(directory);
  
    // Loop through each file
    files.forEach((file) => {
      const filePath = path.join(directory, file);
      const stats = fs.statSync(filePath);
  
      if (stats.isDirectory()) {
        // If the file is a directory, recursively process its files
        processFiles(filePath);
      } else if (path.extname(file) === '.mdx') {
        // If the file is an .mdx file
        const mdxContent = fs.readFileSync(filePath, 'utf8');
        console.log(`Filtering api text string for file ${filePath}`)
        const mdContent = filterAPITextString(mdxContent);
  
        // Save the filtered content as a .md file in the same location
        const mdFilePath = filePath.replace('.mdx', '.md');
        fs.writeFileSync(mdFilePath, mdContent);
      }
    });
  }


  const directoryPath = '../docs/api';
  processFiles(directoryPath);