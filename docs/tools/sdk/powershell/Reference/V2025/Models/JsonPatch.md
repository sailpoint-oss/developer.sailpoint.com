---
id: v2025-json-patch
title: JsonPatch
pagination_label: JsonPatch
sidebar_label: JsonPatch
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'JsonPatch', 'V2025JsonPatch'] 
slug: /tools/sdk/powershell/v2025/models/json-patch
tags: ['SDK', 'Software Development Kit', 'JsonPatch', 'V2025JsonPatch']
---


# JsonPatch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operations** | [**[]JsonPatchOperation**](json-patch-operation) | Operations to be applied | [optional] 

## Examples

- Prepare the resource
```powershell
$JsonPatch = Initialize-V2025JsonPatch  -Operations null
```

- Convert the resource to JSON
```powershell
$JsonPatch | ConvertTo-JSON
```


[[Back to top]](#) 

