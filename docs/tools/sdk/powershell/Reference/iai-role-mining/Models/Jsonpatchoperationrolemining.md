---
id: jsonpatchoperationrolemining
title: Jsonpatchoperationrolemining
pagination_label: Jsonpatchoperationrolemining
sidebar_label: Jsonpatchoperationrolemining
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Jsonpatchoperationrolemining', 'Jsonpatchoperationrolemining'] 
slug: /tools/sdk/powershell/iairolemining/models/jsonpatchoperationrolemining
tags: ['SDK', 'Software Development Kit', 'Jsonpatchoperationrolemining', 'Jsonpatchoperationrolemining']
---


# Jsonpatchoperationrolemining

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Op** |  **Enum** [  "remove",    "replace" ] | The operation to be performed | [required]
**Path** | **String** | A string JSON Pointer representing the target path to an element to be affected by the operation | [required]
**Value** | [**JsonpatchoperationroleminingValue**](jsonpatchoperationrolemining-value) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Jsonpatchoperationrolemining = Initialize-Jsonpatchoperationrolemining  -Op replace `
 -Path /description `
 -Value null
```

- Convert the resource to JSON
```powershell
$Jsonpatchoperationrolemining | ConvertTo-JSON
```


[[Back to top]](#) 

