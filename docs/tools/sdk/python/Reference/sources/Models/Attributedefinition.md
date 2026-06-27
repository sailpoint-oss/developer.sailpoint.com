---
id: attributedefinition
title: Attributedefinition
pagination_label: Attributedefinition
sidebar_label: Attributedefinition
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Attributedefinition', 'Attributedefinition'] 
slug: /tools/sdk/python/sources/models/attributedefinition
tags: ['SDK', 'Software Development Kit', 'Attributedefinition', 'Attributedefinition']
---

# Attributedefinition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the attribute. | [optional] 
**native_name** | **str** | Attribute name in the native system. | [optional] 
**type** | [**Attributedefinitiontype**](attributedefinitiontype) |  | [optional] 
**var_schema** | [**AttributedefinitionSchema**](attributedefinition-schema) |  | [optional] 
**description** | **str** | A human-readable description of the attribute. | [optional] 
**is_multi** | **bool** | Flag indicating whether or not the attribute is multi-valued. | [optional] [default to False]
**is_entitlement** | **bool** | Flag indicating whether or not the attribute is an entitlement. | [optional] [default to False]
**is_group** | **bool** | Flag indicating whether or not the attribute represents a group. This can only be `true` if `isEntitlement` is also `true` **and** there is a schema defined for the attribute..  | [optional] [default to False]
}

## Example

```python
from sailpoint.sources.models.attributedefinition import Attributedefinition

attributedefinition = Attributedefinition(
name='sAMAccountName',
native_name='sAMAccountName',
type='STRING',
var_schema=sailpoint.sources.models.attributedefinition_schema.attributedefinition_schema(
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

