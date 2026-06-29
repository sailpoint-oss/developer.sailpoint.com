---
id: sedassignment
title: Sedassignment
pagination_label: Sedassignment
sidebar_label: Sedassignment
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Sedassignment', 'Sedassignment'] 
slug: /tools/sdk/python/suggested-entitlement-description/models/sedassignment
tags: ['SDK', 'Software Development Kit', 'Sedassignment', 'Sedassignment']
---

# Sedassignment

Sed Assignment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignee** | [**Sedassignee**](sedassignee) |  | [optional] 
**items** | **[]str** | List of SED id's | [optional] 
}

## Example

```python
from sailpoint.suggested_entitlement_description.models.sedassignment import Sedassignment

sedassignment = Sedassignment(
assignee=sailpoint.suggested_entitlement_description.models.sed_assignee.Sed Assignee(
                    type = 'SOURCE_OWNER', 
                    value = '016629d1-1d25-463f-97f3-c6686846650', ),
items=[
                    '016629d1-1d25-463f-97f3-0c6686846650'
                    ]
)

```
[[Back to top]](#) 

