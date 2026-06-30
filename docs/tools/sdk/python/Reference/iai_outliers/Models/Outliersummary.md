---
id: outliersummary
title: Outliersummary
pagination_label: Outliersummary
sidebar_label: Outliersummary
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Outliersummary', 'Outliersummary'] 
slug: /tools/sdk/python/iai-outliers/models/outliersummary
tags: ['SDK', 'Software Development Kit', 'Outliersummary', 'Outliersummary']
---

# Outliersummary


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
from sailpoint.iai_outliers.models.outliersummary import Outliersummary

outliersummary = Outliersummary(
type='LOW_SIMILARITY',
snapshot_date='2021-05-01T18:40:35.772Z',
total_outliers=50,
total_identities=5000,
total_ignored=0
)

```
[[Back to top]](#) 

