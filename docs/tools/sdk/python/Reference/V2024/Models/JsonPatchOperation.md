---
id: v2024-json-patch-operation
title: JsonPatchOperation
pagination_label: JsonPatchOperation
sidebar_label: JsonPatchOperation
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'JsonPatchOperation', 'V2024JsonPatchOperation'] 
slug: /tools/sdk/python/v2024/models/json-patch-operation
tags: ['SDK', 'Software Development Kit', 'JsonPatchOperation', 'V2024JsonPatchOperation']
---

# JsonPatchOperation

A JSONPatch Operation as defined by [RFC 6902 - JSON Patch](https://tools.ietf.org/html/rfc6902)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**op** |  **Enum** [  'add',    'remove',    'replace',    'move',    'copy',    'test' ] | The operation to be performed | [required]
**path** | **str** | A string JSON Pointer representing the target path to an element to be affected by the operation | [required]
**value** | [**UpdateMultiHostSourcesRequestInnerValue**](update-multi-host-sources-request-inner-value) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.json_patch_operation import JsonPatchOperation

json_patch_operation = JsonPatchOperation(
op='replace',
path='/description',
value=New description
)

```
[[Back to top]](#) 

