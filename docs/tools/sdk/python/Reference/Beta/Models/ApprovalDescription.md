---
id: beta-approval-description
title: ApprovalDescription
pagination_label: ApprovalDescription
sidebar_label: ApprovalDescription
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalDescription', 'BetaApprovalDescription'] 
slug: /tools/sdk/python/beta/models/approval-description
tags: ['SDK', 'Software Development Kit', 'ApprovalDescription', 'BetaApprovalDescription']
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
from sailpoint.beta.models.approval_description import ApprovalDescription

approval_description = ApprovalDescription(
value='This access allows viewing and editing of workflow resource',
locale='en_US'
)

```
[[Back to top]](#) 

