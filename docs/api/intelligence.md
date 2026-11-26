# Intelligence

HTTP API that returns the Intelligence (identity context) for SecOps enrichment
use cases (SIEM/SOAR connectors, MCP, browser extension), and accepts asynchronous
response actions for remediation. Identity reads are backed by Atlas internal-REST
calls to MICE, Shelby List Accounts, SDS Search, IDA-outliers, and identity-history.

## License-based segmentation

- **`idn:response-and-remediation`** (required): enforced on all `/intelligence/*` routes.
- **`IDA-outliers`** (optional): governs the Human `outliers.rareAccess` slice only. When the
  tenant lacks this license, the `outliers` key is omitted.
- **`idg:base`** (optional): governs the root-level `identityGraph` deep link on aggregate
  responses. When the tenant lacks this license, `identityGraph` is omitted.
- **`idn:machine-identity-security`** (optional): governs the Human `nonHumanIdentityOwnership`
  slice. When the tenant lacks this license, `nonHumanIdentityOwnership` is omitted on the
  aggregate GET and the `/non-human-identity-ownership/{category}` child route returns
  **403 Forbidden**.

## Pagination

The aggregated Human GET embeds the first page of each paged slice. Each upstream paged call
sends `count=true` and reads `X-Total-Count`. Parent slices expose `totalCount` when `items` is
non-empty and set `next` when `totalCount > offset + len(items)` (aggregate offset is always 0).
Empty slices render as `items: []` with no `totalCount`. `privilegedAccess` is never paged and
carries no `totalCount`. When licensed, `nonHumanIdentityOwnership` pages each
`primaryOwned` / `secondaryOwned` bucket independently under `agents` and `applications`.
Non-human identity aggregate `accounts` includes `totalCount` and `next`; continue with
`GET .../accounts?isNHI=true` (bare array response).

Human child routes (`/accounts`, `/outliers/rare-access`, `/access-history/*`,
`/non-human-identity-ownership/{category}`) follow the SailPoint V3 pattern: pass `count=true`
to receive `X-Total-Count` (including `0` on empty pages). When `count` is omitted, upstream
count work is skipped and the header is omitted.




```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
      