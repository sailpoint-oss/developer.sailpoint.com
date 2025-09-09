import { Octokit } from "octokit";
import { env, file } from "bun";
import { runLinkinator } from "./crawler";
import { buildMarkdownSummary } from "./summary";

function createOctokit(token: string) {
    return new Octokit({ auth: token });
}

async function createIssueComment({ owner, repo, issueNumber, body, token }: { owner: string; repo: string; issueNumber: number; body: string; token: string; }) {
    const octokit = createOctokit(token);
    const { data } = await octokit.rest.issues.createComment({
        owner,
        repo,
        issue_number: issueNumber,
        body,
    });
    return data;
}

async function updateIssueComment({ owner, repo, commentId, body, token }: { owner: string; repo: string; commentId: number; body: string; token: string; }) {
    const octokit = createOctokit(token);
    const { data } = await octokit.rest.issues.updateComment({
        owner,
        repo,
        comment_id: commentId,
        body,
    });
    return data;
}

// Example Comment:
// 🌎🌎🌎 Visit the preview URL for this PR [HERE](https://d2hh3rmbcjmzrb.cloudfront.net)
// built from commit cc222cc5946cfd23090d0617f79ca8fbcf6365d1
function extractPreviewUrlFromComment(commentBody: string): string {
    let parsedText = commentBody.replace(`🌎🌎🌎 Visit the preview URL for this PR [HERE](`, '');
    {
        const parts = parsedText.split(`)
built from commit `);
        parsedText = (parts[0] ?? parsedText);
    }
    const parsedUrl = new URL(parsedText);
    console.log(parsedUrl);
    return parsedUrl.href;
}

// report generation handled by buildMarkdownSummary in ./summary


async function main() {
    const token: string = env.GITHUB_TOKEN as string;
    const repoFull: string = (env.GITHUB_REPOSITORY as string) || "";
    const eventPath: string = (env.GITHUB_EVENT_PATH as string) || "";

    if (!token) {
        console.error("GITHUB_TOKEN is required");
        process.exit(1);
    }
    if (!repoFull || !repoFull.includes("/")) {
        console.error("GITHUB_REPOSITORY is missing or invalid");
        process.exit(1);
    }
    if (!eventPath) {
        console.error("GITHUB_EVENT_PATH is missing or not found");
        process.exit(1);
    }

    const repoParts = repoFull.split("/");
    const owner = repoParts[0]!;
    const repo = repoParts[1]!;
    const event: any = JSON.parse(await file(eventPath).text());
    const issueNumber: number | undefined = event?.issue?.number;
    const commentBody: string = event?.comment?.body || "";
    const previewUrl = extractPreviewUrlFromComment(commentBody);

    if (!issueNumber) {
        console.error("Issue number not found in event payload");
        process.exit(1);
    }
    if (!previewUrl) {
        console.error("No preview URL found in the comment.");
        process.exit(1);
    }

    const startingBody = [
        "🔎 Starting link crawl with linkinator...",
        "",
        `Target: ${previewUrl}`,
        "",
        "_This comment will be updated with results once the crawl completes._",
    ].join("\n");

    console.log("Creating start comment...");
    const startComment = await createIssueComment({
        owner,
        repo,
        issueNumber: (issueNumber as number),
        body: startingBody,
        token,
    });

    const commentId: number | undefined = startComment?.id as number | undefined;
    if (!commentId) {
        console.error("Failed to obtain comment id");
        process.exit(1);
    }

    console.log("Running linkinator full crawl...", previewUrl);
    const data = await runLinkinator(previewUrl);

    const report = buildMarkdownSummary(previewUrl, data);
    await Bun.write("report.md", report);

    console.log("Updating comment with results...");
    await updateIssueComment({ owner, repo, commentId: (commentId as number), body: report, token });

    console.log("Done.");
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});