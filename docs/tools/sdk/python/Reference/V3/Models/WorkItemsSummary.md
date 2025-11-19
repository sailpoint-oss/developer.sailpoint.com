---
id: work-items-summary
title: WorkItemsSummary
pagination_label: WorkItemsSummary
sidebar_label: WorkItemsSummary
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'WorkItemsSummary', 'WorkItemsSummary'] 
slug: /tools/sdk/python/v3/models/work-items-summary
tags: ['SDK', 'Software Development Kit', 'WorkItemsSummary', 'WorkItemsSummary']
---

# WorkItemsSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**open** | **int** | The count of open work items | [optional] 
**completed** | **int** | The count of completed work items | [optional] 
**total** | **int** | The count of total work items | [optional] 
}

## Example

```python
from sailpoint.v3.models.work_items_summary import WorkItemsSummary

work_items_summary = WorkItemsSummary(
open=29,
completed=1,
total=30
)

```
[[Back to top]](#) 

