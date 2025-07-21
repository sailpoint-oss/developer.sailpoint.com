---
id: beta-correlation-config
title: CorrelationConfig
pagination_label: CorrelationConfig
sidebar_label: CorrelationConfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CorrelationConfig', 'BetaCorrelationConfig'] 
slug: /tools/sdk/python/beta/models/correlation-config
tags: ['SDK', 'Software Development Kit', 'CorrelationConfig', 'BetaCorrelationConfig']
---

# CorrelationConfig

Source configuration information that is used by correlation process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the correlation configuration. | [optional] 
**name** | **str** | The name of the correlation configuration. | [optional] 
**attribute_assignments** | [**[]CorrelationConfigAttributeAssignmentsInner**](correlation-config-attribute-assignments-inner) | The list of attribute assignments of the correlation configuration. | [optional] 
}

## Example

```python
from sailpoint.beta.models.correlation_config import CorrelationConfig

correlation_config = CorrelationConfig(
id='2c9180835d191a86015d28455b4a2329',
name='Source [source] Account Correlation',
attribute_assignments=[
                    sailpoint.beta.models.correlation_config_attribute_assignments_inner.CorrelationConfig_attributeAssignments_inner(
                        sequence = 1, 
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

