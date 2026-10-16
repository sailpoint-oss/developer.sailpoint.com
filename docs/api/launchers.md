# Launchers

Use this API to manage Launchers.

A launcher lets users start a workflow on demand from Identity Security Cloud, such as a Privileged Workflow or a workflow that creates an Active Directory group. Each launcher references a workflow. Launching it starts an interactive process that runs that workflow for the user who launched it, and the response returns the ID of that interactive process.

Users can launch only the launchers assigned to them, and only while the launcher is enabled.

A launcher's enabled state follows the workflow it references. When the workflow is disabled, the launcher is disabled, and when the workflow is enabled again, the launcher is enabled again. If the referenced workflow is deleted, the reference is removed from the launcher.

Launcher names must be unique within a tenant, and a tenant can have up to 100 launchers.




```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
      