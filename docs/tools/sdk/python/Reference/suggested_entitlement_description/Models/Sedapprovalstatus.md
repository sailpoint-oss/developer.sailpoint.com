---
id: sedapprovalstatus
title: Sedapprovalstatus
pagination_label: Sedapprovalstatus
sidebar_label: Sedapprovalstatus
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Sedapprovalstatus', 'Sedapprovalstatus'] 
slug: /tools/sdk/python/suggested-entitlement-description/models/sedapprovalstatus
tags: ['SDK', 'Software Development Kit', 'Sedapprovalstatus', 'Sedapprovalstatus']
---

# Sedapprovalstatus

SED Approval Status

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failed_reason** | **str** | failed reason will be display if status is failed | [optional] 
**id** | **str** | Sed id | [optional] 
**status** | **str** | SUCCESS | FAILED | [optional] 
}

## Example

```python
from sailpoint.suggested_entitlement_description.models.sedapprovalstatus import Sedapprovalstatus

sedapprovalstatus = Sedapprovalstatus(
failed_reason='invalid status',
id='016629d1-1d25-463f-97f3-0c6686846650',
status='SUCCESS'
)

```
[[Back to top]](#) 

