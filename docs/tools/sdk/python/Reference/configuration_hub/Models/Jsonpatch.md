---
id: jsonpatch
title: Jsonpatch
pagination_label: Jsonpatch
sidebar_label: Jsonpatch
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Jsonpatch', 'Jsonpatch'] 
slug: /tools/sdk/python/configuration-hub/models/jsonpatch
tags: ['SDK', 'Software Development Kit', 'Jsonpatch', 'Jsonpatch']
---

# Jsonpatch

A JSONPatch document as defined by [RFC 6902 - JSON Patch](https://tools.ietf.org/html/rfc6902)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operations** | [**[]Jsonpatchoperation**](jsonpatchoperation) | Operations to be applied | [optional] 
}

## Example

```python
from sailpoint.configuration_hub.models.jsonpatch import Jsonpatch

jsonpatch = Jsonpatch(
operations=[
                    sailpoint.configuration_hub.models.json_patch_operation.Json Patch Operation(
                        op = 'replace', 
                        path = '/description', 
                        value = New description, )
                    ]
)

```
[[Back to top]](#) 

