# Machine Identity Lifecycle Actions

Experimental APIs for machine identity lifecycle requests (`ACTIVATE`, `DEACTIVATE`), including
approval and provisioning status. Pass the `X-SailPoint-Experimental` header on every request.

Read and cancel by `requestId` return **403** for authorization denials
(`FORBIDDEN.lifecycle-request-access-denied`) and non-`AI_AGENT` rows
(`FORBIDDEN.unsupported-type`). Unknown ids and target-type mismatches return **404**
(`NOT_FOUND.detailed`).




```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
      