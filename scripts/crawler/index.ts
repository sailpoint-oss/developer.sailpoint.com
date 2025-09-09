import { runLinkinator } from "./crawler";

const urlToCrawl = `https://developer.sailpoint.com`

console.log("Crawling URL: ", urlToCrawl);

console.log("Running linkinator...");

console.time("Crawl time");

const crawlData = await runLinkinator(urlToCrawl);

console.timeEnd("Crawl time");

await Bun.write("crawl-data.json", JSON.stringify(crawlData, null, 2));
