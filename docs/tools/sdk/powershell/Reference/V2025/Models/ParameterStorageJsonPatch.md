---
id: v2025-parameter-storage-json-patch
title: ParameterStorageJsonPatch
pagination_label: ParameterStorageJsonPatch
sidebar_label: ParameterStorageJsonPatch
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ParameterStorageJsonPatch', 'V2025ParameterStorageJsonPatch'] 
slug: /tools/sdk/powershell/v2025/models/parameter-storage-json-patch
tags: ['SDK', 'Software Development Kit', 'ParameterStorageJsonPatch', 'V2025ParameterStorageJsonPatch']
---


# ParameterStorageJsonPatch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Op** |  **Enum** [  "add",    "remove",    "replace",    "move",    "copy",    "test" ] | The operation to perform (add, remove, replace, move, copy, test) | [required]
**Path** | **String** | A JSON-Pointer describing the target location | [required]
**Value** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | The value to be used within the operations. Required for add/replace/test. | [optional] 
**VarFrom** | **String** | A JSON-Pointer describing the source location for move/copy. | [optional] 

## Examples

- Prepare the resource
```powershell
$ParameterStorageJsonPatch = Initialize-V2025ParameterStorageJsonPatch  -Op replace `
 -Path /name `
 -Value Credentials for server. `
 -VarFrom /description
```

- Convert the resource to JSON
```powershell
$ParameterStorageJsonPatch | ConvertTo-JSON
```


[[Back to top]](#) 

