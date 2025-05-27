---
id: v2024-attribute-mappings-all-of-transform-definition
title: AttributeMappingsAllOfTransformDefinition
pagination_label: AttributeMappingsAllOfTransformDefinition
sidebar_label: AttributeMappingsAllOfTransformDefinition
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AttributeMappingsAllOfTransformDefinition', 'V2024AttributeMappingsAllOfTransformDefinition'] 
slug: /tools/sdk/python/v2024/models/attribute-mappings-all-of-transform-definition
tags: ['SDK', 'Software Development Kit', 'AttributeMappingsAllOfTransformDefinition', 'V2024AttributeMappingsAllOfTransformDefinition']
---

# AttributeMappingsAllOfTransformDefinition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type of transform | [optional] 
**attributes** | [**AttributeMappingsAllOfTransformDefinitionAttributes**](attribute-mappings-all-of-transform-definition-attributes) |  | [optional] 
**id** | **str** | Transform Operation | [optional] 
}

## Example

```python
from sailpoint.v2024.models.attribute_mappings_all_of_transform_definition import AttributeMappingsAllOfTransformDefinition

attribute_mappings_all_of_transform_definition = AttributeMappingsAllOfTransformDefinition(
type='reference',
attributes=sailpoint.v2024.models.attribute_mappings_all_of_transform_definition_attributes.AttributeMappings_allOf_transformDefinition_attributes(
                    input = sailpoint.v2024.models.attribute_mappings_all_of_transform_definition_attributes_input.AttributeMappings_allOf_transformDefinition_attributes_input(
                        type = 'accountAttribute', ), ),
id='ToUpper'
)

```
[[Back to top]](#) 

