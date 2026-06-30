---
id: approvalapproverequest
title: Approvalapproverequest
pagination_label: Approvalapproverequest
sidebar_label: Approvalapproverequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Approvalapproverequest', 'Approvalapproverequest'] 
slug: /tools/sdk/python/approvals/models/approvalapproverequest
tags: ['SDK', 'Software Development Kit', 'Approvalapproverequest', 'Approvalapproverequest']
---

# Approvalapproverequest

Approval Approve Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_attributes** | **map[string]str** | Additional attributes as key-value pairs that are not part of the standard schema but can be included for custom data. | [optional] 
**comment** | **str** | Comment associated with the request. | [optional] 
}

## Example

```python
from sailpoint.approvals.models.approvalapproverequest import Approvalapproverequest

approvalapproverequest = Approvalapproverequest(
additional_attributes={"additionalProp1":"string","additionalProp2":"string","additionalProp3":"string"},
comment='comment'
)

```
[[Back to top]](#) 

