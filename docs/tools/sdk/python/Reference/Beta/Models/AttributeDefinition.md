---
id: beta-attribute-definition
title: AttributeDefinition
pagination_label: AttributeDefinition
sidebar_label: AttributeDefinition
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AttributeDefinition', 'BetaAttributeDefinition'] 
slug: /tools/sdk/python/beta/models/attribute-definition
tags: ['SDK', 'Software Development Kit', 'AttributeDefinition', 'BetaAttributeDefinition']
---

# AttributeDefinition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the attribute. | [optional] 
**native_name** | **str** | Attribute name in the native system. | [optional] 
**type** | [**AttributeDefinitionType**](attribute-definition-type) |  | [optional] 
**var_schema** | [**AttributeDefinitionSchema**](attribute-definition-schema) |  | [optional] 
**description** | **str** | A human-readable description of the attribute. | [optional] 
**is_multi** | **bool** | Flag indicating whether or not the attribute is multi-valued. | [optional] [default to False]
**is_entitlement** | **bool** | Flag indicating whether or not the attribute is an entitlement. | [optional] [default to False]
**is_group** | **bool** | Flag indicating whether or not the attribute represents a group. This can only be `true` if `isEntitlement` is also `true` **and** there is a schema defined for the attribute.  | [optional] [default to False]
}

## Example

```python
from sailpoint.beta.models.attribute_definition import AttributeDefinition

attribute_definition = AttributeDefinition(
name='sAMAccountName',
native_name='sAMAccountName',
type='STRING',
var_schema=sailpoint.beta.models.attribute_definition_schema.AttributeDefinition_schema(
                    type = 'CONNECTOR_SCHEMA', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'group', ),
description='The sAMAccountName attribute',
is_multi=False,
is_entitlement=False,
is_group=False
)

```
[[Back to top]](#) 

