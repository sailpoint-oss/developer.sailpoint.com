---
id: jsonpatchoperation
title: Jsonpatchoperation
pagination_label: Jsonpatchoperation
sidebar_label: Jsonpatchoperation
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Jsonpatchoperation', 'Jsonpatchoperation'] 
slug: /tools/sdk/python/global-tenant-security-settings/models/jsonpatchoperation
tags: ['SDK', 'Software Development Kit', 'Jsonpatchoperation', 'Jsonpatchoperation']
---

# Jsonpatchoperation

A JSONPatch Operation as defined by [RFC 6902 - JSON Patch](https://tools.ietf.org/html/rfc6902)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**op** |  **Enum** [  'add',    'remove',    'replace',    'move',    'copy',    'test' ] | The operation to be performed | [required]
**path** | **str** | A string JSON Pointer representing the target path to an element to be affected by the operation | [required]
**value** | [**JsonpatchoperationValue**](jsonpatchoperation-value) |  | [optional] 
}

## Example

```python
from sailpoint.global_tenant_security_settings.models.jsonpatchoperation import Jsonpatchoperation

jsonpatchoperation = Jsonpatchoperation(
op='replace',
path='/description',
value=New description
)

```
[[Back to top]](#) 

