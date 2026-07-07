---
id: attributemappings-all-of-transform-definition-attributes-input
title: AttributemappingsAllOfTransformDefinitionAttributesInput
pagination_label: AttributemappingsAllOfTransformDefinitionAttributesInput
sidebar_label: AttributemappingsAllOfTransformDefinitionAttributesInput
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AttributemappingsAllOfTransformDefinitionAttributesInput', 'AttributemappingsAllOfTransformDefinitionAttributesInput'] 
slug: /tools/sdk/python/machine-account-mappings/models/attributemappings-all-of-transform-definition-attributes-input
tags: ['SDK', 'Software Development Kit', 'AttributemappingsAllOfTransformDefinitionAttributesInput', 'AttributemappingsAllOfTransformDefinitionAttributesInput']
---

# AttributemappingsAllOfTransformDefinitionAttributesInput

Input Object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The Type of Attribute | [optional] 
**attributes** | [**AttributemappingsAllOfTransformDefinitionAttributesInputAttributes**](attributemappings-all-of-transform-definition-attributes-input-attributes) |  | [optional] 
}

## Example

```python
from sailpoint.machine_account_mappings.models.attributemappings_all_of_transform_definition_attributes_input import AttributemappingsAllOfTransformDefinitionAttributesInput

attributemappings_all_of_transform_definition_attributes_input = AttributemappingsAllOfTransformDefinitionAttributesInput(
type='accountAttribute',
attributes=sailpoint.machine_account_mappings.models.attributemappings_all_of_transform_definition_attributes_input_attributes.attributemappings_allOf_transformDefinition_attributes_input_attributes(
                    attribute_name = 'givenName', 
                    source_name = 'delimited-src', 
                    name = '8d3e0094e99445de98eef6c75e25jc04', )
)

```
[[Back to top]](#) 

