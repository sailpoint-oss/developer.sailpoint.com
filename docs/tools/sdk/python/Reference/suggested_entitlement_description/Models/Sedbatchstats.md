---
id: sedbatchstats
title: Sedbatchstats
pagination_label: Sedbatchstats
sidebar_label: Sedbatchstats
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Sedbatchstats', 'Sedbatchstats'] 
slug: /tools/sdk/python/suggested-entitlement-description/models/sedbatchstats
tags: ['SDK', 'Software Development Kit', 'Sedbatchstats', 'Sedbatchstats']
---

# Sedbatchstats

Sed Batch Stats

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_complete** | **bool** | batch complete | [optional] [default to False]
**batch_id** | **str** | batch Id | [optional] 
**discovered_count** | **int** | discovered count | [optional] 
**discovery_complete** | **bool** | discovery complete | [optional] [default to False]
**processed_count** | **int** | processed count | [optional] 
}

## Example

```python
from sailpoint.suggested_entitlement_description.models.sedbatchstats import Sedbatchstats

sedbatchstats = Sedbatchstats(
batch_complete=True,
batch_id='016629d1-1d25-463f-97f3-0c6686846650',
discovered_count=100,
discovery_complete=True,
processed_count=100
)

```
[[Back to top]](#) 

