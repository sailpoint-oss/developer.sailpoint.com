import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

type RedirectEntry = {from: string; to: string};

// Maps each versioned docs directory to its corresponding Redoc HTML file.
// Update this map when new API versions or Redoc files are added.
const API_VERSION_MAP: Record<string, string> = {
  beta:  'sailpoint-api-beta-light.html',
  v3:    'sailpoint-api-v3-light.html',
  v2024: 'sailpoint-api-v2024-light.html',
  v2025: 'sailpoint-api-v2025-light.html',
  v2026: 'sailpoint-api-v2026-light.html',
};

function camelToKebab(str: string): string {
  return str.replace(/([A-Z])/g, (m) => '-' + m.toLowerCase());
}

function buildApiRedirects(): RedirectEntry[] {
  const redirects: RedirectEntry[] = [];
  const specBase = path.join(__dirname, 'static', 'api-specs', 'idn');

  for (const [version, redocFile] of Object.entries(API_VERSION_MAP)) {
    const specFile = path.join(specBase, `sailpoint-api.${version}.yaml`);
    let spec: any;
    try {
      spec = yaml.load(fs.readFileSync(specFile, 'utf8')) as any;
    } catch {
      continue;
    }

    for (const pathObj of Object.values(spec.paths ?? {})) {
      const ref = (pathObj as any)['$ref'];
      if (!ref) continue;
      const refFile = path.resolve(specBase, ref);
      let pathSpec: any;
      try {
        pathSpec = yaml.load(fs.readFileSync(refFile, 'utf8')) as any;
      } catch {
        continue;
      }

      for (const [method, op] of Object.entries(pathSpec ?? {})) {
        if (!['get', 'post', 'put', 'patch', 'delete', 'head', 'options'].includes(method)) continue;
        const operation = op as any;
        if (!operation?.operationId) continue;
        const tag: string = (operation.tags ?? [])[0];
        if (!tag) continue;

        const slug = camelToKebab(operation.operationId);
        const tagSegment = tag.replace(/\s+/g, '-');
        redirects.push({
          from: `/docs/api/${version}/${slug}`,
          to: `/redoc/${redocFile}#tag/${tagSegment}/operation/${operation.operationId}`,
        });
      }
    }
  }

  return redirects;
}

function buildApiRedirectHtml(targetUrl: string): string {
  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="refresh" content="0; url=${targetUrl}" />
    <link rel="canonical" href="${targetUrl}" />
    <script>window.location.replace("${targetUrl}");</script>
  </head>
  <body>
    <p>Redirecting to <a href="${targetUrl}">${targetUrl}</a>…</p>
  </body>
</html>`;
}

// Docusaurus plugin — writes static HTML redirect pages during production
// builds so old versioned API doc URLs keep resolving after those MDX pages
// are removed and replaced by the unified Redoc HTML files.
export default function apiRedirectsPlugin() {
  return {
    name: 'api-redirects-plugin',

    async postBuild({outDir}: {outDir: string}) {
      const redirects = buildApiRedirects();
      let written = 0;
      for (const {from, to} of redirects) {
        const filePath = path.join(outDir, from, 'index.html');
        if (fs.existsSync(filePath)) continue; // never overwrite an active page
        fs.mkdirSync(path.dirname(filePath), {recursive: true});
        fs.writeFileSync(filePath, buildApiRedirectHtml(to), 'utf8');
        written++;
      }
      console.log(`[api-redirects-plugin] Wrote ${written} redirect pages.`);
    },
  };
}
