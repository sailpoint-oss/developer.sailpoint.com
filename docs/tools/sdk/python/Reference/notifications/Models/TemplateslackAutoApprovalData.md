---
id: templateslack-auto-approval-data
title: TemplateslackAutoApprovalData
pagination_label: TemplateslackAutoApprovalData
sidebar_label: TemplateslackAutoApprovalData
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'TemplateslackAutoApprovalData', 'TemplateslackAutoApprovalData'] 
slug: /tools/sdk/python/notifications/models/templateslack-auto-approval-data
tags: ['SDK', 'Software Development Kit', 'TemplateslackAutoApprovalData', 'TemplateslackAutoApprovalData']
---

# TemplateslackAutoApprovalData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_auto_approved** | **str** | Whether the request was auto-approved | [optional] 
**item_id** | **str** | The item ID | [optional] 
**item_type** | **str** | The item type | [optional] 
**auto_approval_message_json** | **str** | JSON message for auto-approval | [optional] 
**auto_approval_title** | **str** | Title for auto-approval | [optional] 
}

## Example

```python
from sailpoint.notifications.models.templateslack_auto_approval_data import TemplateslackAutoApprovalData

templateslack_auto_approval_data = TemplateslackAutoApprovalData(
is_auto_approved='',
item_id='',
item_type='',
auto_approval_message_json='',
auto_approval_title=''
)

```
[[Back to top]](#) 

