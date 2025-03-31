---
id: beta-sed-assignment
title: SedAssignment
pagination_label: SedAssignment
sidebar_label: SedAssignment
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SedAssignment', 'BetaSedAssignment'] 
slug: /tools/sdk/python/beta/models/sed-assignment
tags: ['SDK', 'Software Development Kit', 'SedAssignment', 'BetaSedAssignment']
---

# SedAssignment

Sed Assignment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignee** | [**SedAssignee**](sed-assignee) |  | [optional] 
**items** | **[]str** | List of SED id's | [optional] 
}

## Example

```python
from sailpoint.beta.models.sed_assignment import SedAssignment

sed_assignment = SedAssignment(
assignee=sailpoint.beta.models.sed_assignee.SedAssignee(
                    type = 'SOURCE_OWNER', 
                    value = '016629d1-1d25-463f-97f3-c6686846650', ),
items=[
                    '016629d1-1d25-463f-97f3-0c6686846650'
                    ]
)

```
[[Back to top]](#) 

