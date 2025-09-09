import type { LinkResult } from "linkinator";

export type LinkinatorResult = {
  passed: boolean;
  links: LinkResult[];
};

export function buildMarkdownSummary(url: string, result: LinkinatorResult) {
  if (!result || !Array.isArray(result.links)) {
    return [
      `✅ Link crawl attempted for ${url}`,
      "",
      "Unable to parse linkinator output.",
    ].join("\n");
  }

  const filtered = result.links.filter((l) => !l.url.includes("discuss") && !l.parent?.includes("discuss"));
  const total = filtered.length;
  const broken = filtered.filter((l) => l.state === "BROKEN");
  const ok = filtered.filter((l) => l.state === "OK");
  const skipped = filtered.filter((l) => l.state === "SKIPPED");

  const getPath = (value: unknown) => {
    const s = typeof value === "string" ? value : String(value ?? "-");
    try {
      const u = new URL(s);
      return u.pathname || "/";
    } catch {
      return s;
    }
  };

  const lines: string[] = [];
  lines.push(`✅ Link crawl completed for ${url}`);
  lines.push("");
  lines.push(`- Total links scanned: ${total}`);
  lines.push(`- Broken links: ${broken.length}`);
  lines.push(`- OK: ${ok.length}`);
  lines.push(`- Skipped: ${skipped.length}`);
  lines.push(`- Passed: ${Boolean(result.passed)}`);
  lines.push("");

  if (broken.length === 0) {
    lines.push("No broken links detected.");
    lines.push("");
    return lines.join("\n");
  }

  // Group ALL broken links by HTTP status, then sort groups and items
  const byStatus = new Map<string, typeof broken>();
  for (const link of broken) {
    const statusKey = typeof link.status === "number" ? String(link.status) : (link.status || "UNKNOWN");
    const bucket = byStatus.get(statusKey);
    if (bucket) {
      bucket.push(link);
    } else {
      byStatus.set(statusKey, [link]);
    }
  }

  const sortedStatuses = Array.from(byStatus.keys()).sort((a, b) => {
    const na = Number.isNaN(Number(a)) ? Infinity : Number(a);
    const nb = Number.isNaN(Number(b)) ? Infinity : Number(b);
    if (na === nb) return a.localeCompare(b);
    return na - nb;
  });

  lines.push("### Broken links by status");
  lines.push("");

  for (const statusKey of sortedStatuses) {
    const links = byStatus.get(statusKey)!;
    // Sort links within a status by URL path
    links.sort((a, b) => getPath(a.url).localeCompare(getPath(b.url)));

    lines.push(`<details>`);
    lines.push(`<summary>HTTP ${statusKey} (total ${links.length})</summary>`);
    lines.push("");
    lines.push("| Status | Broken URL |");
    lines.push("| --- | --- |");
    for (const link of links) {
      const status = typeof link.status === "number" ? link.status : (link.status || "-");
      const urlCell = link.url ? String(link.url) : "-";
      lines.push(`| ${status} | ${urlCell} |`);
    }
    lines.push("");
    lines.push(`</details>`);
    lines.push("");
  }

  return lines.join("\n");
}

// Optional: allow running directly to generate report.md from a JSON file
if (import.meta.main) {
  const args = process.argv.slice(2);
  const pathArgIndex = args.findIndex((a) => a === "--input" || a === "-i");
  const urlArgIndex = args.findIndex((a) => a === "--url" || a === "-u");
  const inputPath = pathArgIndex !== -1 ? args[pathArgIndex + 1] : (Bun.env.CRAWL_JSON_PATH || "crawl-data-no-log.json");
  const url = urlArgIndex !== -1 ? args[urlArgIndex + 1] : (Bun.env.CRAWL_URL || "");

  const run = async () => {
    const jsonText = await Bun.file(inputPath).text();
    const data = JSON.parse(jsonText) as LinkinatorResult;
    const md = buildMarkdownSummary(url, data);
    await Bun.write("report.md", md);
    console.log("Wrote report.md");
  };

  run().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}


