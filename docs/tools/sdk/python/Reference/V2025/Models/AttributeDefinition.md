---
id: v2025-attribute-definition
title: AttributeDefinition
pagination_label: AttributeDefinition
sidebar_label: AttributeDefinition
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AttributeDefinition', 'V2025AttributeDefinition'] 
slug: /tools/sdk/python/v2025/models/attribute-definition
tags: ['SDK', 'Software Development Kit', 'AttributeDefinition', 'V2025AttributeDefinition']
---

# AttributeDefinition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the attribute. | [optional] 
**type** | [**AttributeDefinitionType**](attribute-definition-type) |  | [optional] 
**var_schema** | [**AttributeDefinitionSchema**](attribute-definition-schema) |  | [optional] 
**description** | **str** | A human-readable description of the attribute. | [optional] 
**is_multi** | **bool** | Flag indicating whether or not the attribute is multi-valued. | [optional] [default to False]
**is_entitlement** | **bool** | Flag indicating whether or not the attribute is an entitlement. | [optional] [default to False]
**is_group** | **bool** | Flag indicating whether or not the attribute represents a group. This can only be `true` if `isEntitlement` is also `true` **and** there is a schema defined for the attribute..  | [optional] [default to False]
}

## Example

```python
from sailpoint.v2025.models.attribute_definition import AttributeDefinition

attribute_definition = AttributeDefinition(
name='sAMAccountName',
type='STRING',
var_schema=sailpoint.v2025.models.attribute_definition_schema.AttributeDefinition_schema(
                    type = 'CONNECTOR_SCHEMA', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'group', ),
description='SAM Account Name',
is_multi=False,
is_entitlement=False,
is_group=False
)

```
[[Back to top]](#) 

