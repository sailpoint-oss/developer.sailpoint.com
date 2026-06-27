---
id: workitemssummary
title: Workitemssummary
pagination_label: Workitemssummary
sidebar_label: Workitemssummary
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Workitemssummary', 'Workitemssummary'] 
slug: /tools/sdk/python/work-items/models/workitemssummary
tags: ['SDK', 'Software Development Kit', 'Workitemssummary', 'Workitemssummary']
---

# Workitemssummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**open** | **int** | The count of open work items | [optional] 
**completed** | **int** | The count of completed work items | [optional] 
**total** | **int** | The count of total work items | [optional] 
}

## Example

```python
from sailpoint.work_items.models.workitemssummary import Workitemssummary

workitemssummary = Workitemssummary(
open=29,
completed=1,
total=30
)

```
[[Back to top]](#) 

