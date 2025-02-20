---
id: beta-work-item-forward
title: WorkItemForward
pagination_label: WorkItemForward
sidebar_label: WorkItemForward
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'WorkItemForward', 'BetaWorkItemForward'] 
slug: /tools/sdk/python/beta/models/work-item-forward
tags: ['SDK', 'Software Development Kit', 'WorkItemForward', 'BetaWorkItemForward']
---

# WorkItemForward


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_owner_id** | **str** | The ID of the identity to forward this work item to. | [required]
**comment** | **str** | Comments to send to the target owner | [required]
**send_notifications** | **bool** | If true, send a notification to the target owner. | [optional] [default to True]
}

## Example

```python
from sailpoint.beta.models.work_item_forward import WorkItemForward

work_item_forward = WorkItemForward(
target_owner_id='2c9180835d2e5168015d32f890ca1581',
comment='I'm going on vacation.',
send_notifications=True
)

```
[[Back to top]](#) 

