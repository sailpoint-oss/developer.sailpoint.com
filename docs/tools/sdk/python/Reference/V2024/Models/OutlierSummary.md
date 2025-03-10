---
id: v2024-outlier-summary
title: OutlierSummary
pagination_label: OutlierSummary
sidebar_label: OutlierSummary
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'OutlierSummary', 'V2024OutlierSummary'] 
slug: /tools/sdk/python/v2024/models/outlier-summary
tags: ['SDK', 'Software Development Kit', 'OutlierSummary', 'V2024OutlierSummary']
---

# OutlierSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'LOW_SIMILARITY',    'STRUCTURAL' ] | The type of outlier summary | [optional] 
**snapshot_date** | **datetime** | The date the bulk outlier detection ran/snapshot was created | [optional] 
**total_outliers** | **int** | Total number of outliers for the customer making the request | [optional] 
**total_identities** | **int** | Total number of identities for the customer making the request | [optional] 
**total_ignored** | **int** |  | [optional] [default to 0]
}

## Example

```python
from sailpoint.v2024.models.outlier_summary import OutlierSummary

outlier_summary = OutlierSummary(
type='LOW_SIMILARITY',
snapshot_date='2021-05-01T18:40:35.772Z',
total_outliers=50,
total_identities=5000,
total_ignored=0
)

```
[[Back to top]](#) 

