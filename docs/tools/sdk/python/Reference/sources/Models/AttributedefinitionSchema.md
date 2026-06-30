---
id: attributedefinition-schema
title: AttributedefinitionSchema
pagination_label: AttributedefinitionSchema
sidebar_label: AttributedefinitionSchema
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AttributedefinitionSchema', 'AttributedefinitionSchema'] 
slug: /tools/sdk/python/sources/models/attributedefinition-schema
tags: ['SDK', 'Software Development Kit', 'AttributedefinitionSchema', 'AttributedefinitionSchema']
---

# AttributedefinitionSchema

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
from sailpoint.sources.models.attributedefinition_schema import AttributedefinitionSchema

attributedefinition_schema = AttributedefinitionSchema(
type='CONNECTOR_SCHEMA',
id='2c91808568c529c60168cca6f90c1313',
name='group'
)

```
[[Back to top]](#) 

