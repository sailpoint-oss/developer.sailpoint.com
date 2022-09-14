---
id: account-aggregation-completed
title: Account Aggregation Completed
slug: /docs/event-triggers/triggers/account-aggregation-completed
description: Fires after an account aggregation completed, terminated, or failed.
---

## Event Context

The platform has introduced an event trigger within the Source Aggregation workflow to provide additional monitoring capabilities. This trigger helps ensure account aggregations are performing as expected and identity data always reflects current source account information for better identity governance.  Aggregations connect to a source and collect account information from the source to discover the number of accounts that have been added, changed, or removed. For more information about account aggregation see [Account Aggregation Data flow](https://community.sailpoint.com/t5/Technical-White-Papers/Account-Aggregation-Data-Flow/ta-p/79914#toc-hId-1367430234)

![Flow](./img/aggregation-diagram.png)

After the initial collection of accounts in the source system during aggregation completes, some uses cases for this trigger include the following:

- Notify an administrator that IdentityNow was able to successfully connect to the source system and collect source accounts.
- Notify an administrator when the aggregation is terminated manually during the account collection phase.
- Notify an administrator or system (e.g. PagerDuty) that IdentityNow failed to collect accounts during aggregation and indicate required remediation for the source system.

:::info
This event trigger does not include entitlement aggregations.
:::

This is an example input from this trigger:

```json
{
  "source": {
    "type": "IDENTITY",
    "id": "2c91808568c529c60168cca6f90c1313",
    "name": "William Wilson"
  },
  "status": "Success",
  "started": "2020-06-29T22:01:50.474Z",
  "completed": "2020-06-29T22:02:04.090Z",
  "errors": [
    "Accounts unable to be aggregated."
  ],
  "warnings": [
    "Account Skipped"
  ],
  "stats": {
    "scanned": 200,
    "unchanged": 190,
    "changed": 6,
    "added": 4,
    "removed": 3
  }
}
```

The source account activity is summarized in `stats`, as seen in this example:

```JSON
"stats": {
            "scanned": 200,
            "unchanged": 190,
            "changed": 6,
            "added": 4,
            "removed": 3
        }
```

In this example, there are 10 changed accounts (`scanned` (200) - `unchanged` - (190)). Changed accounts include accounts that are `added` (6) and accounts that are `changed` (4), equaling 10 accounts. Removed accounts may or may not be included in the changed account total depending on the sources. For this example, `removed` (3) may be considered a changed account in some sources and would show a `scanned` count of 203 instead of 200.

> This event trigger fires even without changed accounts. The unchanged count will match the scanned accounts in the response.

The status of the aggregation can be one of three possible values:

- **Success**: Account collection was successful and aggregation can move to the next step.
- **Error**: There is a failure in account collection or an issue connecting to the source. The `errors` vary by source.
- **Termination**: The aggregation was terminated during the account collection phase. Aggregation can be terminated when the account deletion threshold is exceeded. For example, an account delete threshold of 10% is set by default for the source, and if the number of `removed` accounts for the above example is 21 (more than 10% of `scanned` accounts (200)), the aggregation is cancelled.

![Account_Delete_Threshold](./img/aggregation-delete-threshold.png)

## Additional Information and Links

- **Trigger Type**: [FIRE_AND_FORGET](../trigger-types.md#fire-and-forget)
 <!-- [Input schema](https://developer.sailpoint.com/apis/beta/#section/Account-Aggregation-Completed-Event-Trigger-Input) -->