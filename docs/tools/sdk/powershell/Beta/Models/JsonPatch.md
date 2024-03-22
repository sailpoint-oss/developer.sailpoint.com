---
id: json-patch
title: JsonPatch
pagination_label: JsonPatch
sidebar_label: JsonPatch
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'JsonPatch'] 
slug: /tools/sdk/powershell/beta/models/json-patch
tags: ['SDK', 'Software Development Kit', 'JsonPatch']
---


# JsonPatch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operations** |  Pointer to [**[]JsonPatchOperation**](json-patch-operation) | Operations to be applied | [optional] 

## Examples

- Prepare the resource
```powershell
$JsonPatch = Initialize-PSSailpointBetaJsonPatch  -Operations null
```

- Convert the resource to JSON
```powershell
$JsonPatch | ConvertTo-JSON
```


[[Back to top]](#) 

