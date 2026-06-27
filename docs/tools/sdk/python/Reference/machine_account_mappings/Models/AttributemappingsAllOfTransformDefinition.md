---
id: attributemappings-all-of-transform-definition
title: AttributemappingsAllOfTransformDefinition
pagination_label: AttributemappingsAllOfTransformDefinition
sidebar_label: AttributemappingsAllOfTransformDefinition
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AttributemappingsAllOfTransformDefinition', 'AttributemappingsAllOfTransformDefinition'] 
slug: /tools/sdk/python/machine-account-mappings/models/attributemappings-all-of-transform-definition
tags: ['SDK', 'Software Development Kit', 'AttributemappingsAllOfTransformDefinition', 'AttributemappingsAllOfTransformDefinition']
---

# AttributemappingsAllOfTransformDefinition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type of transform | [optional] 
**attributes** | [**AttributemappingsAllOfTransformDefinitionAttributes**](attributemappings-all-of-transform-definition-attributes) |  | [optional] 
**id** | **str** | Transform Operation | [optional] 
}

## Example

```python
from sailpoint.machine_account_mappings.models.attributemappings_all_of_transform_definition import AttributemappingsAllOfTransformDefinition

attributemappings_all_of_transform_definition = AttributemappingsAllOfTransformDefinition(
type='reference',
attributes=sailpoint.machine_account_mappings.models.attributemappings_all_of_transform_definition_attributes.attributemappings_allOf_transformDefinition_attributes(
                    input = sailpoint.machine_account_mappings.models.attributemappings_all_of_transform_definition_attributes_input.attributemappings_allOf_transformDefinition_attributes_input(
                        type = 'accountAttribute', ), ),
id='ToUpper'
)

```
[[Back to top]](#) 

