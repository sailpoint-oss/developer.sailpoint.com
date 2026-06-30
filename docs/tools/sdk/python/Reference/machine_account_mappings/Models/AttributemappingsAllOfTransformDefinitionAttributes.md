---
id: attributemappings-all-of-transform-definition-attributes
title: AttributemappingsAllOfTransformDefinitionAttributes
pagination_label: AttributemappingsAllOfTransformDefinitionAttributes
sidebar_label: AttributemappingsAllOfTransformDefinitionAttributes
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AttributemappingsAllOfTransformDefinitionAttributes', 'AttributemappingsAllOfTransformDefinitionAttributes'] 
slug: /tools/sdk/python/machine-account-mappings/models/attributemappings-all-of-transform-definition-attributes
tags: ['SDK', 'Software Development Kit', 'AttributemappingsAllOfTransformDefinitionAttributes', 'AttributemappingsAllOfTransformDefinitionAttributes']
---

# AttributemappingsAllOfTransformDefinitionAttributes

attributes object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input** | [**AttributemappingsAllOfTransformDefinitionAttributesInput**](attributemappings-all-of-transform-definition-attributes-input) |  | [optional] 
}

## Example

```python
from sailpoint.machine_account_mappings.models.attributemappings_all_of_transform_definition_attributes import AttributemappingsAllOfTransformDefinitionAttributes

attributemappings_all_of_transform_definition_attributes = AttributemappingsAllOfTransformDefinitionAttributes(
input=sailpoint.machine_account_mappings.models.attributemappings_all_of_transform_definition_attributes_input.attributemappings_allOf_transformDefinition_attributes_input(
                    type = 'accountAttribute', 
                    attributes = sailpoint.machine_account_mappings.models.attributemappings_all_of_transform_definition_attributes_input_attributes.attributemappings_allOf_transformDefinition_attributes_input_attributes(
                        attribute_name = 'givenName', 
                        source_name = 'delimited-src', 
                        name = '8d3e0094e99445de98eef6c75e25jc04', ), )
)

```
[[Back to top]](#) 

