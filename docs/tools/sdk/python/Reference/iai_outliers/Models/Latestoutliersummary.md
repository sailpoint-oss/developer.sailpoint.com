---
id: latestoutliersummary
title: Latestoutliersummary
pagination_label: Latestoutliersummary
sidebar_label: Latestoutliersummary
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Latestoutliersummary', 'Latestoutliersummary'] 
slug: /tools/sdk/python/iai-outliers/models/latestoutliersummary
tags: ['SDK', 'Software Development Kit', 'Latestoutliersummary', 'Latestoutliersummary']
---

# Latestoutliersummary


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
from sailpoint.iai_outliers.models.latestoutliersummary import Latestoutliersummary

latestoutliersummary = Latestoutliersummary(
type='LOW_SIMILARITY',
snapshot_date='2021-05-01T18:40:35.772Z',
total_outliers=50,
total_identities=5000,
total_ignored=10
)

```
[[Back to top]](#) 

