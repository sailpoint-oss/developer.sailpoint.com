---
id: attributemappings
title: Attributemappings
pagination_label: Attributemappings
sidebar_label: Attributemappings
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Attributemappings', 'Attributemappings'] 
slug: /tools/sdk/python/machine-account-mappings/models/attributemappings
tags: ['SDK', 'Software Development Kit', 'Attributemappings', 'Attributemappings']
---

# Attributemappings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target** | [**AttributemappingsAllOfTarget**](attributemappings-all-of-target) |  | [optional] 
**transform_definition** | [**AttributemappingsAllOfTransformDefinition**](attributemappings-all-of-transform-definition) |  | [optional] 
}

## Example

```python
from sailpoint.machine_account_mappings.models.attributemappings import Attributemappings

attributemappings = Attributemappings(
target=sailpoint.machine_account_mappings.models.attributemappings_all_of_target.attributemappings_allOf_target(
                    type = 'IDENTITY', 
                    attribute_name = 'businessApplication', 
                    source_id = '2c9180835d2e5168015d32f890ca1581', ),
transform_definition=sailpoint.machine_account_mappings.models.attributemappings_all_of_transform_definition.attributemappings_allOf_transformDefinition(
                    type = 'reference', 
                    attributes = sailpoint.machine_account_mappings.models.attributemappings_all_of_transform_definition_attributes.attributemappings_allOf_transformDefinition_attributes(
                        input = sailpoint.machine_account_mappings.models.attributemappings_all_of_transform_definition_attributes_input.attributemappings_allOf_transformDefinition_attributes_input(
                            type = 'accountAttribute', ), ), 
                    id = 'ToUpper', )
)

```
[[Back to top]](#) 

