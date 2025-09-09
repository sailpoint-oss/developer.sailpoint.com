import { LinkChecker, type LinkResult } from "linkinator";
import { color } from "bun";

function formatColor(colorString: string) {
  return color(colorString, "ansi");
}

export async function runLinkinator(url: string) {
  const checker = new LinkChecker();

  checker.on('link', (details) => {
    console.log(`${details.state} ${details.status} ${details.url}`);
  });

  // Go ahead and start the scan! As events occur, we will see them above.
  const result = await checker.check({
    concurrency: 1000, 
    path: url,
    recurse: true,
    timeout: 300,
    linksToSkip: async (url) => {
      return url.includes("discuss");
    }
  });

  // Check to see if the scan passed!
  console.log(result.passed ? 'PASSED :D' : 'FAILED :(');

  // How many links did we scan?
  console.log(`Scanned total of ${result.links.length} links!`);

  // The final result will contain the list of checked links, and the pass/fail
  const brokeLinksCount = result.links.filter(x => x.state === 'BROKEN');
  console.log(`Detected ${brokeLinksCount.length} broken links.`);

  return result;
}

