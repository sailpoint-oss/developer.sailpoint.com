# Machine Identity Lifecycle Actions

Use this API to implement machine identity lifecycle action functionality.
With this functionality in place, administrators and machine identity owners can activate or deactivate machine identities, track the approval and provisioning status of each request, and cancel requests before provisioning starts.

A lifecycle action is a request to change whether a machine identity is active.
For example, an administrator may deactivate an agent while a security review is in progress, and then activate it again once the review is complete.

Lifecycle actions are currently supported only for machine identities of type Agent.




```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
      