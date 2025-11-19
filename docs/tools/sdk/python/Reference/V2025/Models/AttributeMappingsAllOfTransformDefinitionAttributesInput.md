---
id: v2025-attribute-mappings-all-of-transform-definition-attributes-input
title: AttributeMappingsAllOfTransformDefinitionAttributesInput
pagination_label: AttributeMappingsAllOfTransformDefinitionAttributesInput
sidebar_label: AttributeMappingsAllOfTransformDefinitionAttributesInput
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AttributeMappingsAllOfTransformDefinitionAttributesInput', 'V2025AttributeMappingsAllOfTransformDefinitionAttributesInput'] 
slug: /tools/sdk/python/v2025/models/attribute-mappings-all-of-transform-definition-attributes-input
tags: ['SDK', 'Software Development Kit', 'AttributeMappingsAllOfTransformDefinitionAttributesInput', 'V2025AttributeMappingsAllOfTransformDefinitionAttributesInput']
---

# AttributeMappingsAllOfTransformDefinitionAttributesInput

Input Object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The Type of Attribute | [optional] 
**attributes** | [**AttributeMappingsAllOfTransformDefinitionAttributesInputAttributes**](attribute-mappings-all-of-transform-definition-attributes-input-attributes) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.attribute_mappings_all_of_transform_definition_attributes_input import AttributeMappingsAllOfTransformDefinitionAttributesInput

attribute_mappings_all_of_transform_definition_attributes_input = AttributeMappingsAllOfTransformDefinitionAttributesInput(
type='accountAttribute',
attributes=sailpoint.v2025.models.attribute_mappings_all_of_transform_definition_attributes_input_attributes.AttributeMappings_allOf_transformDefinition_attributes_input_attributes(
                    attribute_name = 'givenName', 
                    source_name = 'delimited-src', 
                    name = '8d3e0094e99445de98eef6c75e25jc04', )
)

```
[[Back to top]](#) 

