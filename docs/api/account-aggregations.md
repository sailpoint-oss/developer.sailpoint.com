# Account Aggregations

Use this API to implement account aggregation progress tracking functionality.
With this functionality in place, administrators can view in-progress account aggregations, their statuses, and their relevant details.

An account aggregation refers to the process Identity Security Cloud uses to gather and load account data from a source into Identity Security Cloud.

Whenever Identity Security Cloud is in the process of aggregating a source, it adds an entry to the Aggregation Activity Log, along with its relevant details.
To view aggregation activity, administrators can select the Connections drop-down menu, select Sources, and select the relevant source, select its Import Data tab, and select Account Aggregation.
In Account Aggregation, administrators can view the account aggregations' statuses and details in the Account Activity Log.

Refer to [Loading Account Data](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html) for more information about account aggregations.

If you are looking for the endpoint for account aggregations in a source, [click here](https://developer.sailpoint.com/docs/api/import-accounts-v-1)




```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
      