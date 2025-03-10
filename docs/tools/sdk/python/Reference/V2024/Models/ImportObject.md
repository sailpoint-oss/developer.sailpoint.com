---
id: v2024-import-object
title: ImportObject
pagination_label: ImportObject
sidebar_label: ImportObject
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ImportObject', 'V2024ImportObject'] 
slug: /tools/sdk/python/v2024/models/import-object
tags: ['SDK', 'Software Development Kit', 'ImportObject', 'V2024ImportObject']
---

# ImportObject

Object created or updated by import.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'CONNECTOR_RULE',    'IDENTITY_OBJECT_CONFIG',    'IDENTITY_PROFILE',    'RULE',    'SOURCE',    'TRANSFORM',    'TRIGGER_SUBSCRIPTION' ] | DTO type of object created or updated by import. | [optional] 
**id** | **str** | ID of object created or updated by import. | [optional] 
**name** | **str** | Display name of object created or updated by import. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.import_object import ImportObject

import_object = ImportObject(
type='SOURCE',
id='2c9180835d191a86015d28455b4b232a',
name='HR Active Directory'
)

```
[[Back to top]](#) 

