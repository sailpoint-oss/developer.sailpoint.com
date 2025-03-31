---
id: v2024-approval-description
title: ApprovalDescription
pagination_label: ApprovalDescription
sidebar_label: ApprovalDescription
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalDescription', 'V2024ApprovalDescription'] 
slug: /tools/sdk/python/v2024/models/approval-description
tags: ['SDK', 'Software Development Kit', 'ApprovalDescription', 'V2024ApprovalDescription']
---

# ApprovalDescription

The description of what the approval is asking for

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | The description of what the approval is asking for | [optional] 
**locale** | **str** | What locale the description of the approval is using | [optional] 
}

## Example

```python
from sailpoint.v2024.models.approval_description import ApprovalDescription

approval_description = ApprovalDescription(
value='This access allows viewing and editing of workflow resource',
locale='en_US'
)

```
[[Back to top]](#) 

