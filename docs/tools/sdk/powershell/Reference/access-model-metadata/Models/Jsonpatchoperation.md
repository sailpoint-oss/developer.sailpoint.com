---
id: jsonpatchoperation
title: Jsonpatchoperation
pagination_label: Jsonpatchoperation
sidebar_label: Jsonpatchoperation
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Jsonpatchoperation', 'Jsonpatchoperation'] 
slug: /tools/sdk/powershell/accessmodelmetadata/models/jsonpatchoperation
tags: ['SDK', 'Software Development Kit', 'Jsonpatchoperation', 'Jsonpatchoperation']
---


# Jsonpatchoperation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Op** |  **Enum** [  "add",    "remove",    "replace",    "move",    "copy",    "test" ] | The operation to be performed | [required]
**Path** | **String** | A string JSON Pointer representing the target path to an element to be affected by the operation | [required]
**Value** | [**JsonpatchoperationValue**](jsonpatchoperation-value) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Jsonpatchoperation = Initialize-Jsonpatchoperation  -Op replace `
 -Path /description `
 -Value null
```

- Convert the resource to JSON
```powershell
$Jsonpatchoperation | ConvertTo-JSON
```


[[Back to top]](#) 

