---
id: approvalname
title: Approvalname
pagination_label: Approvalname
sidebar_label: Approvalname
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Approvalname', 'Approvalname'] 
slug: /tools/sdk/python/approvals/models/approvalname
tags: ['SDK', 'Software Development Kit', 'Approvalname', 'Approvalname']
---

# Approvalname

Approval Name Object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | Name of the approval | [optional] 
**locale** | **str** | What locale the name of the approval is using | [optional] 
}

## Example

```python
from sailpoint.approvals.models.approvalname import Approvalname

approvalname = Approvalname(
value='Audit DB Access',
locale='en_US'
)

```
[[Back to top]](#) 

