---
id: v2024-latest-outlier-summary
title: LatestOutlierSummary
pagination_label: LatestOutlierSummary
sidebar_label: LatestOutlierSummary
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'LatestOutlierSummary', 'V2024LatestOutlierSummary'] 
slug: /tools/sdk/python/v2024/models/latest-outlier-summary
tags: ['SDK', 'Software Development Kit', 'LatestOutlierSummary', 'V2024LatestOutlierSummary']
---

# LatestOutlierSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'LOW_SIMILARITY',    'STRUCTURAL' ] | The type of outlier summary | [optional] 
**snapshot_date** | **datetime** | The date the bulk outlier detection ran/snapshot was created | [optional] 
**total_outliers** | **int** | Total number of outliers for the customer making the request | [optional] 
**total_identities** | **int** | Total number of identities for the customer making the request | [optional] 
**total_ignored** | **int** | Total number of ignored outliers | [optional] 
}

## Example

```python
from sailpoint.v2024.models.latest_outlier_summary import LatestOutlierSummary

latest_outlier_summary = LatestOutlierSummary(
type='LOW_SIMILARITY',
snapshot_date='2021-05-01T18:40:35.772Z',
total_outliers=50,
total_identities=5000,
total_ignored=10
)

```
[[Back to top]](#) 

