---
id: approvalitemdetails
title: Approvalitemdetails
pagination_label: Approvalitemdetails
sidebar_label: Approvalitemdetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Approvalitemdetails', 'Approvalitemdetails'] 
slug: /tools/sdk/python/work-items/models/approvalitemdetails
tags: ['SDK', 'Software Development Kit', 'Approvalitemdetails', 'Approvalitemdetails']
---

# Approvalitemdetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The approval item's ID | [optional] 
**account** | **str** | The account referenced by the approval item | [optional] 
**application** | **str** | The name of the application/source | [optional] 
**name** | **str** | The attribute's name | [optional] 
**operation** | **str** | The attribute's operation | [optional] 
**value** | **str** | The attribute's value | [optional] 
**state** | [**Workitemstate**](workitemstate) |  | [optional] 
}

## Example

```python
from sailpoint.work_items.models.approvalitemdetails import Approvalitemdetails

approvalitemdetails = Approvalitemdetails(
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

