---
id: correlationconfig
title: Correlationconfig
pagination_label: Correlationconfig
sidebar_label: Correlationconfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Correlationconfig', 'Correlationconfig'] 
slug: /tools/sdk/python/sources/models/correlationconfig
tags: ['SDK', 'Software Development Kit', 'Correlationconfig', 'Correlationconfig']
---

# Correlationconfig

Source configuration information that is used by correlation process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the correlation configuration. | [optional] 
**name** | **str** | The name of the correlation configuration. | [optional] 
**attribute_assignments** | [**[]CorrelationconfigAttributeAssignmentsInner**](correlationconfig-attribute-assignments-inner) | The list of attribute assignments of the correlation configuration. | [optional] 
}

## Example

```python
from sailpoint.sources.models.correlationconfig import Correlationconfig

correlationconfig = Correlationconfig(
id='2c9180835d191a86015d28455b4a2329',
name='Source [source] Account Correlation',
attribute_assignments=[
                    sailpoint.sources.models.correlationconfig_attribute_assignments_inner.correlationconfig_attributeAssignments_inner(
                        property = 'first_name', 
                        value = 'firstName', 
                        operation = 'EQ', 
                        complex = False, 
                        ignore_case = False, 
                        match_mode = 'ANYWHERE', 
                        filter_string = 'first_name == "John"', )
                    ]
)

```
[[Back to top]](#) 

