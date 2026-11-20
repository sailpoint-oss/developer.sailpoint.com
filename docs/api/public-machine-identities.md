# Public Machine Identities

Use this API to list machine identities with a reduced, public-safe payload for catalog and request workflows.
Responses always include `id`, `name`, and `description`. When your tenant returns enriched public machine identity data, responses also include `subtype` and the primary `owner` (`id`, `name`, and `email`). When those enriched fields are not enabled for your tenant, `subtype` and `owner` are omitted or null and requests that filter or sort on `subtype` or filter on `owner.id`/`owner` return `400 Bad Request`.




```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
      