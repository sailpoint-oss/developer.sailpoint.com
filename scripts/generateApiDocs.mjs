import {spawn} from 'node:child_process';

const iscVersions = ['beta', 'v3', 'v2024', 'v2025', 'v2026'];

const docusaurusDocCommands = [
  'docusaurus gen-api-docs:version isc_versioned:all --plugin-id isc-api',
  'docusaurus gen-api-docs isc_versioned --plugin-id isc-api',
  'docusaurus gen-api-docs iiq --plugin-id iiq-api',
  'docusaurus gen-api-docs:version nerm_versioned:all --plugin-id nerm-api',
  'docusaurus gen-api-docs nerm_versioned --plugin-id nerm-api',
];

const mode = process.argv[2] ?? 'all';
const maxConcurrency = Number.parseInt(
  process.env.API_DOCS_CONCURRENCY ?? '5',
  10,
);

function runCommand(command) {
  const startedAt = Date.now();
  console.log(`\n[api-docs] starting: ${command}`);

  return new Promise((resolve, reject) => {
    const child = spawn(command, {
      shell: true,
      stdio: 'inherit',
      env: process.env,
    });

    child.on('error', reject);
    child.on('exit', (code, signal) => {
      const seconds = ((Date.now() - startedAt) / 1000).toFixed(1);
      if (code === 0) {
        console.log(`[api-docs] finished in ${seconds}s: ${command}`);
        resolve();
        return;
      }

      reject(
        new Error(
          `[api-docs] failed after ${seconds}s: ${command} (${
            signal ?? `exit ${code}`
          })`,
        ),
      );
    });
  });
}

async function runLimited(tasks, concurrency) {
  const queue = [...tasks];
  const workers = Array.from(
    {length: Math.min(Math.max(concurrency, 1), queue.length)},
    async () => {
      while (queue.length > 0) {
        const task = queue.shift();
        await task();
      }
    },
  );

  await Promise.all(workers);
}

function versionPipeline(version) {
  return async () => {
    await runCommand(`npm run ${version}-merge-code-examples`);
    await runCommand(`npm run speecy-${version}-spec`);
    await runCommand(`npm run overlay-code-examples-${version}`);
    await runCommand(`npm run sentence-case-${version}`);
  };
}

async function runMergeOnly() {
  await runLimited(
    iscVersions.map(
      (version) => () => runCommand(`npm run ${version}-merge-code-examples`),
    ),
    maxConcurrency,
  );
}

async function runSpecOnly() {
  await runLimited(
    iscVersions.map((version) => async () => {
      await runCommand(`npm run speecy-${version}-spec`);
      await runCommand(`npm run overlay-code-examples-${version}`);
    }),
    maxConcurrency,
  );
}

async function runSentenceCaseOnly() {
  await runLimited(
    iscVersions.map(
      (version) => () => runCommand(`npm run sentence-case-${version}`),
    ),
    maxConcurrency,
  );
}

async function runAll() {
  await runLimited(iscVersions.map(versionPipeline), maxConcurrency);

  for (const command of docusaurusDocCommands) {
    await runCommand(command);
  }
}

const runners = {
  all: runAll,
  merge: runMergeOnly,
  specs: runSpecOnly,
  'sentence-case': runSentenceCaseOnly,
};

if (!runners[mode]) {
  console.error(
    `Unknown mode "${mode}". Expected one of: ${Object.keys(runners).join(
      ', ',
    )}`,
  );
  process.exit(1);
}

runners[mode]().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
