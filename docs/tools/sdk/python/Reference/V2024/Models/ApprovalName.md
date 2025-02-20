---
id: v2024-approval-name
title: ApprovalName
pagination_label: ApprovalName
sidebar_label: ApprovalName
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalName', 'V2024ApprovalName'] 
slug: /tools/sdk/python/v2024/models/approval-name
tags: ['SDK', 'Software Development Kit', 'ApprovalName', 'V2024ApprovalName']
---

# ApprovalName

Approval Name Object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | Name of the approval | [optional] 
**locale** | **str** | What locale the name of the approval is using | [optional] 
}

## Example

```python
from sailpoint.v2024.models.approval_name import ApprovalName

approval_name = ApprovalName(
value='Audit DB Access',
locale='en_US'
)

```
[[Back to top]](#) 

