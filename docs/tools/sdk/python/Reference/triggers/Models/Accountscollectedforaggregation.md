---
id: accountscollectedforaggregation
title: Accountscollectedforaggregation
pagination_label: Accountscollectedforaggregation
sidebar_label: Accountscollectedforaggregation
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accountscollectedforaggregation', 'Accountscollectedforaggregation'] 
slug: /tools/sdk/python/triggers/models/accountscollectedforaggregation
tags: ['SDK', 'Software Development Kit', 'Accountscollectedforaggregation', 'Accountscollectedforaggregation']
---

# Accountscollectedforaggregation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | [**AccountscollectedforaggregationSource**](accountscollectedforaggregation-source) |  | [required]
**status** |  **Enum** [  'Success',    'Failed',    'Terminated' ] | The overall status of the collection. | [required]
**started** | **datetime** | The date and time when the account collection started. | [required]
**completed** | **datetime** | The date and time when the account collection finished. | [required]
**errors** | **[]str** | A list of errors that occurred during the collection. | [required]
**warnings** | **[]str** | A list of warnings that occurred during the collection. | [required]
**stats** | [**AccountscollectedforaggregationStats**](accountscollectedforaggregation-stats) |  | [required]
}

## Example

```python
from sailpoint.triggers.models.accountscollectedforaggregation import Accountscollectedforaggregation

accountscollectedforaggregation = Accountscollectedforaggregation(
source=sailpoint.triggers.models.accountscollectedforaggregation_source.accountscollectedforaggregation_source(
                    id = '4e4d982dddff4267ab12f0f1e72b5a6d', 
                    type = 'SOURCE', 
                    name = 'Corporate Active Directory', ),
status='Success',
started='2020-06-29T22:01:50.474Z',
completed='2020-06-29T22:02:04.090Z',
errors=[
                    'Unable to collect accounts for aggregation.'
                    ],
warnings=[
                    'Account Skipped'
                    ],
stats=sailpoint.triggers.models.accountscollectedforaggregation_stats.accountscollectedforaggregation_stats(
                    scanned = 200, 
                    unchanged = 190, 
                    changed = 6, 
                    added = 4, 
                    removed = 3, )
)

```
[[Back to top]](#) 

