---
id: v2025-attribute-mappings-all-of-transform-definition-attributes
title: AttributeMappingsAllOfTransformDefinitionAttributes
pagination_label: AttributeMappingsAllOfTransformDefinitionAttributes
sidebar_label: AttributeMappingsAllOfTransformDefinitionAttributes
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AttributeMappingsAllOfTransformDefinitionAttributes', 'V2025AttributeMappingsAllOfTransformDefinitionAttributes'] 
slug: /tools/sdk/python/v2025/models/attribute-mappings-all-of-transform-definition-attributes
tags: ['SDK', 'Software Development Kit', 'AttributeMappingsAllOfTransformDefinitionAttributes', 'V2025AttributeMappingsAllOfTransformDefinitionAttributes']
---

# AttributeMappingsAllOfTransformDefinitionAttributes

attributes object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input** | [**AttributeMappingsAllOfTransformDefinitionAttributesInput**](attribute-mappings-all-of-transform-definition-attributes-input) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.attribute_mappings_all_of_transform_definition_attributes import AttributeMappingsAllOfTransformDefinitionAttributes

attribute_mappings_all_of_transform_definition_attributes = AttributeMappingsAllOfTransformDefinitionAttributes(
input=sailpoint.v2025.models.attribute_mappings_all_of_transform_definition_attributes_input.AttributeMappings_allOf_transformDefinition_attributes_input(
                    type = 'accountAttribute', 
                    attributes = sailpoint.v2025.models.attribute_mappings_all_of_transform_definition_attributes_input_attributes.AttributeMappings_allOf_transformDefinition_attributes_input_attributes(
                        attribute_name = 'givenName', 
                        source_name = 'delimited-src', 
                        name = '8d3e0094e99445de98eef6c75e25jc04', ), )
)

```
[[Back to top]](#) 

