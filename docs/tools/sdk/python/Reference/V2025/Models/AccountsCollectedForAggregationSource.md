---
id: v2025-accounts-collected-for-aggregation-source
title: AccountsCollectedForAggregationSource
pagination_label: AccountsCollectedForAggregationSource
sidebar_label: AccountsCollectedForAggregationSource
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountsCollectedForAggregationSource', 'V2025AccountsCollectedForAggregationSource'] 
slug: /tools/sdk/python/v2025/models/accounts-collected-for-aggregation-source
tags: ['SDK', 'Software Development Kit', 'AccountsCollectedForAggregationSource', 'V2025AccountsCollectedForAggregationSource']
---

# AccountsCollectedForAggregationSource

Reference to the source that has been aggregated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the object to which this reference applies | [required]
**type** |  **Enum** [  'SOURCE' ] | The type of object that is referenced | [required]
**name** | **str** | Human-readable display name of the object to which this reference applies | [required]
}

## Example

```python
from sailpoint.v2025.models.accounts_collected_for_aggregation_source import AccountsCollectedForAggregationSource

accounts_collected_for_aggregation_source = AccountsCollectedForAggregationSource(
id='4e4d982dddff4267ab12f0f1e72b5a6d',
type='SOURCE',
name='Corporate Active Directory'
)

```
[[Back to top]](#) 

