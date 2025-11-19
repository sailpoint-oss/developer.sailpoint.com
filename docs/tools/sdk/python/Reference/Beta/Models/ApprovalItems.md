---
id: beta-approval-items
title: ApprovalItems
pagination_label: ApprovalItems
sidebar_label: ApprovalItems
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalItems', 'BetaApprovalItems'] 
slug: /tools/sdk/python/beta/models/approval-items
tags: ['SDK', 'Software Development Kit', 'ApprovalItems', 'BetaApprovalItems']
---

# ApprovalItems


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The approval item's ID | [optional] 
**account** | **str** | The account referenced by the approval item | [optional] 
**application** | **str** | The name of the application/source | [optional] 
**name** | **str** | The attribute's name | [optional] 
**operation** | **str** | The attribute's operation | [optional] 
**value** | **str** | The attribute's value | [optional] 
**state** | [**WorkItemState**](work-item-state) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.approval_items import ApprovalItems

approval_items = ApprovalItems(
id='2c9180835d2e5168015d32f890ca1581',
account='john.smith',
application='Active Directory',
name='emailAddress',
operation='update',
value='a@b.com',
state='Pending'
)

```
[[Back to top]](#) 

