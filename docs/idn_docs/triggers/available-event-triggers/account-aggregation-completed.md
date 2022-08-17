---
id: account-aggregation-completed
title: Account Aggregation Completed
sidebar_label: Account Aggregation Completed
sidebar-position: 5
---

# Account Aggregation Completed

## Event context

The platform has introduced an event trigger within the Source Aggregation workflow to provide additional monitoring capabilities. This helps to ensure account aggregations are performing as expected and that identity data always reflects current source account information for better identity governance.  Aggregations connect to a source and collect account information from the source to discover the number of accounts that have been added, changed, or removed. For more information about account aggregation see [Account Aggregation Data flow](https://community.sailpoint.com/t5/Technical-White-Papers/Account-Aggregation-Data-Flow/ta-p/79914#toc-hId-1367430234)

![Flow](./img/aggregation-diagram.png)

After the initial collection of accounts in the source system during aggregation completes, this event trigger can:

- Notify an administrator that IdentityNow was able to successfully connect to the source system and was able to collect source accounts.
- Notify an administrator when the aggregation is terminated manually during the account collection phase.
- Notify an administrator or system (e.g. PagerDuty) that IdentityNow failed to collect accounts during aggregation and indicate required remediation for the source system.

> This event trigger does not include entitlement aggregations.

The source account activity is summarized in `stats` e.g:

```JSON
"stats": {
            "scanned": 200,
            "unchanged": 190,
            "changed": 6,
            "added": 4,
            "removed": 3
        }
```

In this example, there are 10 changed accounts (`scanned` (200) - `unchanged` - (190)). Changed accounts include accounts that are `added` (6) and accounts that are `changed` (4), which equals 10 accounts. Removed accounts may or may not be included in the changed account total depending on the sources. For this example, `removed` (3) may be considered a changed account in some sources and would show a `scanned` count of 203 instead of 200.

> This event trigger will fire even without changed accounts. The unchanged count will match the scanned accounts in the response.

The status of the aggregation can be one of three possible values:

- **Success**: Account collection successful and aggregation can move to the next step.
- **Error**: There is failure in account collection or issues with connecting to the source. `errors` vary by source.
- **Termination**: The aggregation was terminated during the account collection phase. Aggregation can be terminated when the account deletion threshold is exceeded. For example, an account delete threshold of 10% is set by default for the source and if the number of `removed` accounts for the above example is 21 (more than 10% of `scanned` accounts (200)), the aggregation is cancelled.

![Account_Delete_Threshold](./img/aggregation-delete-threshold.png)

## Additional information and links

- **Trigger Type**: [FIRE_AND_FORGET](../event-triggers-trigger-types.md#fire-and-forget)
- [Input schema](https://developer.sailpoint.com/apis/beta/#section/Account-Aggregation-Completed-Event-Trigger-Input)