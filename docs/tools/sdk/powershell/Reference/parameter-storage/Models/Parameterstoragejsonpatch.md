---
id: parameterstoragejsonpatch
title: Parameterstoragejsonpatch
pagination_label: Parameterstoragejsonpatch
sidebar_label: Parameterstoragejsonpatch
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Parameterstoragejsonpatch', 'Parameterstoragejsonpatch'] 
slug: /tools/sdk/powershell/parameterstorage/models/parameterstoragejsonpatch
tags: ['SDK', 'Software Development Kit', 'Parameterstoragejsonpatch', 'Parameterstoragejsonpatch']
---


# Parameterstoragejsonpatch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Op** |  **Enum** [  "add",    "remove",    "replace",    "move",    "copy",    "test" ] | The operation to perform (add, remove, replace, move, copy, test) | [required]
**Path** | **String** | A JSON-Pointer describing the target location | [required]
**Value** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | The value to be used within the operations. Required for add/replace/test. | [optional] 
**VarFrom** | **String** | A JSON-Pointer describing the source location for move/copy. | [optional] 

## Examples

- Prepare the resource
```powershell
$Parameterstoragejsonpatch = Initialize-Parameterstoragejsonpatch  -Op replace `
 -Path /name `
 -Value Credentials for server. `
 -VarFrom /description
```

- Convert the resource to JSON
```powershell
$Parameterstoragejsonpatch | ConvertTo-JSON
```


[[Back to top]](#) 

