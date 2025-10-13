---
id: v2025-parameter-storage-json-patch
title: ParameterStorageJsonPatch
pagination_label: ParameterStorageJsonPatch
sidebar_label: ParameterStorageJsonPatch
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ParameterStorageJsonPatch', 'V2025ParameterStorageJsonPatch'] 
slug: /tools/sdk/python/v2025/models/parameter-storage-json-patch
tags: ['SDK', 'Software Development Kit', 'ParameterStorageJsonPatch', 'V2025ParameterStorageJsonPatch']
---

# ParameterStorageJsonPatch

RFC 6902 JSON Patch operation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**op** |  **Enum** [  'add',    'remove',    'replace',    'move',    'copy',    'test' ] | The operation to perform (add, remove, replace, move, copy, test) | [required]
**path** | **str** | A JSON-Pointer describing the target location | [required]
**value** | **object** | The value to be used within the operations. Required for add/replace/test. | [optional] 
**var_from** | **str** | A JSON-Pointer describing the source location for move/copy. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.parameter_storage_json_patch import ParameterStorageJsonPatch

parameter_storage_json_patch = ParameterStorageJsonPatch(
op='replace',
path='/name',
value=Credentials for server.,
var_from='/description'
)

```
[[Back to top]](#) 

