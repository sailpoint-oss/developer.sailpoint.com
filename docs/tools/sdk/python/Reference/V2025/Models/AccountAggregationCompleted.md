---
id: v2025-account-aggregation-completed
title: AccountAggregationCompleted
pagination_label: AccountAggregationCompleted
sidebar_label: AccountAggregationCompleted
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountAggregationCompleted', 'V2025AccountAggregationCompleted'] 
slug: /tools/sdk/python/v2025/models/account-aggregation-completed
tags: ['SDK', 'Software Development Kit', 'AccountAggregationCompleted', 'V2025AccountAggregationCompleted']
---

# AccountAggregationCompleted


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | [**AccountAggregationCompletedSource**](account-aggregation-completed-source) |  | [required]
**status** |  **Enum** [  'Success',    'Failed',    'Terminated' ] | The overall status of the aggregation. | [required]
**started** | **datetime** | The date and time when the account aggregation started. | [required]
**completed** | **datetime** | The date and time when the account aggregation finished. | [required]
**errors** | **[]str** | A list of errors that occurred during the aggregation. | [required]
**warnings** | **[]str** | A list of warnings that occurred during the aggregation. | [required]
**stats** | [**AccountAggregationCompletedStats**](account-aggregation-completed-stats) |  | [required]
}

## Example

```python
from sailpoint.v2025.models.account_aggregation_completed import AccountAggregationCompleted

account_aggregation_completed = AccountAggregationCompleted(
source=sailpoint.v2025.models.account_aggregation_completed_source.AccountAggregationCompleted_source(
                    type = 'SOURCE', 
                    id = '2c9180835d191a86015d28455b4b232a', 
                    name = 'HR Active Directory', ),
status=Success,
started='2020-06-29T22:01:50.474Z',
completed='2020-06-29T22:02:04.090Z',
errors=[
                    'Accounts unable to be aggregated.'
                    ],
warnings=[
                    'Account Skipped'
                    ],
stats=sailpoint.v2025.models.account_aggregation_completed_stats.AccountAggregationCompleted_stats(
                    scanned = 200, 
                    unchanged = 190, 
                    changed = 6, 
                    added = 4, 
                    removed = 3, )
)

```
[[Back to top]](#) 

