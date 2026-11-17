import fs from 'fs/promises';
import path from 'path';
import type {LoadContext, Plugin} from '@docusaurus/types';

function firstDocId(item: any): string | undefined {
  if (item.type === 'doc') return item.id;
  if (item.link?.type === 'doc') return item.link.id;
  for (const child of item.items ?? []) {
    const id = firstDocId(child);
    if (id) return id;
  }
}

export default function llmsGeneratedIndexPlugin({siteConfig}: LoadContext): Plugin {
  const files: {permalink: string; content: string}[] = [];

  return {
    name: 'llms-generated-index-markdown',

    async allContentLoaded({allContent}) {
      files.length = 0;
      const docsPlugins = Object.values<any>(allContent['docusaurus-plugin-content-docs'] ?? {});
      for (const version of docsPlugins.flatMap((p) => p.loadedVersions)) {
        const docs = new Map<string, any>(version.docs.map((d: any) => [d.id, d]));
        const visit = (items: any[]) => {
          for (const item of items.filter((i) => i.type === 'category')) {
            const {link} = item;
            if (link?.type === 'generated-index') {
              const cards = item.items.flatMap((child: any) => {
                const doc = docs.get(firstDocId(child) ?? '');
                return doc ? [`- [${child.label ?? doc.title}](${doc.permalink}.md)`] : [];
              });
              const header = [`# ${link.title ?? item.label}`, link.description?.trim()];
              const content = [...header.filter(Boolean), cards.join('\n')].join('\n\n') + '\n';
              files.push({permalink: link.permalink, content});
            }
            visit(item.items);
          }
        };
        Object.values<any[]>(version.sidebars).forEach(visit);
      }
    },

    async postBuild({outDir}) {
      for (const {permalink, content} of files) {
        const file = path.join(outDir, permalink.slice(siteConfig.baseUrl.length) + '.md');
        await fs.mkdir(path.dirname(file), {recursive: true});
        await fs.writeFile(file, content, 'utf8');
      }
    },
  };
}
