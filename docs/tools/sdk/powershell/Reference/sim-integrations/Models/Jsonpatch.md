---
id: jsonpatch
title: Jsonpatch
pagination_label: Jsonpatch
sidebar_label: Jsonpatch
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Jsonpatch', 'Jsonpatch'] 
slug: /tools/sdk/powershell/simintegrations/models/jsonpatch
tags: ['SDK', 'Software Development Kit', 'Jsonpatch', 'Jsonpatch']
---


# Jsonpatch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operations** | [**[]Jsonpatchoperation**](jsonpatchoperation) | Operations to be applied | [optional] 

## Examples

- Prepare the resource
```powershell
$Jsonpatch = Initialize-Jsonpatch  -Operations null
```

- Convert the resource to JSON
```powershell
$Jsonpatch | ConvertTo-JSON
```


[[Back to top]](#) 

