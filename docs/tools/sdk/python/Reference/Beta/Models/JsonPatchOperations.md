---
id: beta-json-patch-operations
title: JsonPatchOperations
pagination_label: JsonPatchOperations
sidebar_label: JsonPatchOperations
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'JsonPatchOperations', 'BetaJsonPatchOperations'] 
slug: /tools/sdk/python/beta/models/json-patch-operations
tags: ['SDK', 'Software Development Kit', 'JsonPatchOperations', 'BetaJsonPatchOperations']
---

# JsonPatchOperations

A limited JSONPatch Operation as defined by [RFC 6902 - JSON Patch](https://tools.ietf.org/html/rfc6902)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**op** |  **Enum** [  'add',    'remove',    'replace' ] | The operation to be performed | [required]
**path** | **str** | A string representing the target path to an element to be affected by the operation | [required]
**value** | [**JsonPatchOperationsValue**](json-patch-operations-value) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.json_patch_operations import JsonPatchOperations

json_patch_operations = JsonPatchOperations(
op='replace',
path='/dismissed',
value=true
)

```
[[Back to top]](#) 

