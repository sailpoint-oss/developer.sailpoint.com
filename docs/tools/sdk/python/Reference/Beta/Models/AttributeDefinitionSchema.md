---
id: beta-attribute-definition-schema
title: AttributeDefinitionSchema
pagination_label: AttributeDefinitionSchema
sidebar_label: AttributeDefinitionSchema
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AttributeDefinitionSchema', 'BetaAttributeDefinitionSchema'] 
slug: /tools/sdk/python/beta/models/attribute-definition-schema
tags: ['SDK', 'Software Development Kit', 'AttributeDefinitionSchema', 'BetaAttributeDefinitionSchema']
---

# AttributeDefinitionSchema

A reference to the schema on the source to the attribute values map to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'CONNECTOR_SCHEMA' ] | The type of object being referenced | [optional] 
**id** | **str** | The object ID this reference applies to. | [optional] 
**name** | **str** | The human-readable display name of the object. | [optional] 
}

## Example

```python
from sailpoint.beta.models.attribute_definition_schema import AttributeDefinitionSchema

attribute_definition_schema = AttributeDefinitionSchema(
type='CONNECTOR_SCHEMA',
id='2c91808568c529c60168cca6f90c1313',
name='group'
)

```
[[Back to top]](#) 

