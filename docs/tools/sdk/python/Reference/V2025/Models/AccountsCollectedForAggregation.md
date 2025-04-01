---
id: v2025-accounts-collected-for-aggregation
title: AccountsCollectedForAggregation
pagination_label: AccountsCollectedForAggregation
sidebar_label: AccountsCollectedForAggregation
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountsCollectedForAggregation', 'V2025AccountsCollectedForAggregation'] 
slug: /tools/sdk/python/v2025/models/accounts-collected-for-aggregation
tags: ['SDK', 'Software Development Kit', 'AccountsCollectedForAggregation', 'V2025AccountsCollectedForAggregation']
---

# AccountsCollectedForAggregation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | [**AccountsCollectedForAggregationSource**](accounts-collected-for-aggregation-source) |  | [required]
**status** |  **Enum** [  'Success',    'Failed',    'Terminated' ] | The overall status of the collection. | [required]
**started** | **datetime** | The date and time when the account collection started. | [required]
**completed** | **datetime** | The date and time when the account collection finished. | [required]
**errors** | **[]str** | A list of errors that occurred during the collection. | [required]
**warnings** | **[]str** | A list of warnings that occurred during the collection. | [required]
**stats** | [**AccountsCollectedForAggregationStats**](accounts-collected-for-aggregation-stats) |  | [required]
}

## Example

```python
from sailpoint.v2025.models.accounts_collected_for_aggregation import AccountsCollectedForAggregation

accounts_collected_for_aggregation = AccountsCollectedForAggregation(
source=sailpoint.v2025.models.accounts_collected_for_aggregation_source.AccountsCollectedForAggregation_source(
                    id = '4e4d982dddff4267ab12f0f1e72b5a6d', 
                    type = 'SOURCE', 
                    name = 'Corporate Active Directory', ),
status=Success,
started='2020-06-29T22:01:50.474Z',
completed='2020-06-29T22:02:04.090Z',
errors=[
                    'Unable to collect accounts for aggregation.'
                    ],
warnings=[
                    'Account Skipped'
                    ],
stats=sailpoint.v2025.models.accounts_collected_for_aggregation_stats.AccountsCollectedForAggregation_stats(
                    scanned = 200, 
                    unchanged = 190, 
                    changed = 6, 
                    added = 4, 
                    removed = 3, )
)

```
[[Back to top]](#) 

