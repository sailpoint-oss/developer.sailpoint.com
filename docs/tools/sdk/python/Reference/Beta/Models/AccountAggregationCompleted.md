---
id: beta-account-aggregation-completed
title: AccountAggregationCompleted
pagination_label: AccountAggregationCompleted
sidebar_label: AccountAggregationCompleted
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountAggregationCompleted', 'BetaAccountAggregationCompleted'] 
slug: /tools/sdk/python/beta/models/account-aggregation-completed
tags: ['SDK', 'Software Development Kit', 'AccountAggregationCompleted', 'BetaAccountAggregationCompleted']
---

# AccountAggregationCompleted


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | [**AccountAggregationCompletedSource**](account-aggregation-completed-source) |  | [required]
**status** |  **Enum** [  'Success',    'Failed',    'Terminated' ] | Aggregation's overall status. | [required]
**started** | **datetime** | Date and time when the account aggregation started. | [required]
**completed** | **datetime** | Date and time when the account aggregation finished. | [required]
**errors** | **[]str** | List of errors that occurred during the aggregation. | [required]
**warnings** | **[]str** | List of warnings that occurred during the aggregation. | [required]
**stats** | [**AccountAggregationCompletedStats**](account-aggregation-completed-stats) |  | [required]
}

## Example

```python
from sailpoint.beta.models.account_aggregation_completed import AccountAggregationCompleted

account_aggregation_completed = AccountAggregationCompleted(
source=sailpoint.beta.models.account_aggregation_completed_source.AccountAggregationCompleted_source(
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
stats=sailpoint.beta.models.account_aggregation_completed_stats.AccountAggregationCompleted_stats(
                    scanned = 200, 
                    unchanged = 190, 
                    changed = 6, 
                    added = 4, 
                    removed = 3, )
)

```
[[Back to top]](#) 

