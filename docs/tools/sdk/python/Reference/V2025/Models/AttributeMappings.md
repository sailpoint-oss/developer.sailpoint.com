---
id: v2025-attribute-mappings
title: AttributeMappings
pagination_label: AttributeMappings
sidebar_label: AttributeMappings
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AttributeMappings', 'V2025AttributeMappings'] 
slug: /tools/sdk/python/v2025/models/attribute-mappings
tags: ['SDK', 'Software Development Kit', 'AttributeMappings', 'V2025AttributeMappings']
---

# AttributeMappings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target** | [**AttributeMappingsAllOfTarget**](attribute-mappings-all-of-target) |  | [optional] 
**transform_definition** | [**AttributeMappingsAllOfTransformDefinition**](attribute-mappings-all-of-transform-definition) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.attribute_mappings import AttributeMappings

attribute_mappings = AttributeMappings(
target=sailpoint.v2025.models.attribute_mappings_all_of_target.AttributeMappings_allOf_target(
                    type = 'IDENTITY', 
                    attribute_name = 'businessApplication', 
                    source_id = '2c9180835d2e5168015d32f890ca1581', ),
transform_definition=sailpoint.v2025.models.attribute_mappings_all_of_transform_definition.AttributeMappings_allOf_transformDefinition(
                    type = 'reference', 
                    attributes = sailpoint.v2025.models.attribute_mappings_all_of_transform_definition_attributes.AttributeMappings_allOf_transformDefinition_attributes(
                        input = sailpoint.v2025.models.attribute_mappings_all_of_transform_definition_attributes_input.AttributeMappings_allOf_transformDefinition_attributes_input(
                            type = 'accountAttribute', ), ), 
                    id = 'ToUpper', )
)

```
[[Back to top]](#) 

