---
id: v2025-json-patch
title: JsonPatch
pagination_label: JsonPatch
sidebar_label: JsonPatch
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'JsonPatch', 'V2025JsonPatch'] 
slug: /tools/sdk/python/v2025/models/json-patch
tags: ['SDK', 'Software Development Kit', 'JsonPatch', 'V2025JsonPatch']
---

# JsonPatch

A JSONPatch document as defined by [RFC 6902 - JSON Patch](https://tools.ietf.org/html/rfc6902)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operations** | [**[]JsonPatchOperation**](json-patch-operation) | Operations to be applied | [optional] 
}

## Example

```python
from sailpoint.v2025.models.json_patch import JsonPatch

json_patch = JsonPatch(
operations=[
                    sailpoint.v2025.models.json_patch_operation.Json Patch Operation(
                        op = 'replace', 
                        path = '/description', 
                        value = New description, )
                    ]
)

```
[[Back to top]](#) 

