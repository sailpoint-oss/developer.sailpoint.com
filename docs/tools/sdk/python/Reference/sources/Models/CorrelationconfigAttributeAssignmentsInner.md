---
id: correlationconfig-attribute-assignments-inner
title: CorrelationconfigAttributeAssignmentsInner
pagination_label: CorrelationconfigAttributeAssignmentsInner
sidebar_label: CorrelationconfigAttributeAssignmentsInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CorrelationconfigAttributeAssignmentsInner', 'CorrelationconfigAttributeAssignmentsInner'] 
slug: /tools/sdk/python/sources/models/correlationconfig-attribute-assignments-inner
tags: ['SDK', 'Software Development Kit', 'CorrelationconfigAttributeAssignmentsInner', 'CorrelationconfigAttributeAssignmentsInner']
---

# CorrelationconfigAttributeAssignmentsInner

The attribute assignment of the correlation configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_property** | **str** | The property of the attribute assignment. | [optional] 
**value** | **str** | The value of the attribute assignment. | [optional] 
**operation** |  **Enum** [  'EQ' ] | The operation of the attribute assignment. | [optional] 
**complex** | **bool** | Whether or not the it's a complex attribute assignment. | [optional] [default to False]
**ignore_case** | **bool** | Whether or not the attribute assignment should ignore case. | [optional] [default to False]
**match_mode** |  **Enum** [  'ANYWHERE',    'START',    'END' ] | The match mode of the attribute assignment. | [optional] 
**filter_string** | **str** | The filter string of the attribute assignment. | [optional] 
}

## Example

```python
from sailpoint.sources.models.correlationconfig_attribute_assignments_inner import CorrelationconfigAttributeAssignmentsInner

correlationconfig_attribute_assignments_inner = CorrelationconfigAttributeAssignmentsInner(
var_property='first_name',
value='firstName',
operation='EQ',
complex=False,
ignore_case=False,
match_mode='ANYWHERE',
filter_string='first_name == "John"'
)

```
[[Back to top]](#) 

