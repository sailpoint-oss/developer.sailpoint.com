---
id: v2025-approval-item-details
title: ApprovalItemDetails
pagination_label: ApprovalItemDetails
sidebar_label: ApprovalItemDetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalItemDetails', 'V2025ApprovalItemDetails'] 
slug: /tools/sdk/python/v2025/models/approval-item-details
tags: ['SDK', 'Software Development Kit', 'ApprovalItemDetails', 'V2025ApprovalItemDetails']
---

# ApprovalItemDetails


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
from sailpoint.v2025.models.approval_item_details import ApprovalItemDetails

approval_item_details = ApprovalItemDetails(
id='2c9180835d2e5168015d32f890ca1581',
account='john.smith',
application='Active Directory',
name='emailAddress',
operation='update',
value='a@b.com',
state=
)

```
[[Back to top]](#) 

