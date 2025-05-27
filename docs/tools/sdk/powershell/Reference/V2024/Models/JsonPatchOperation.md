---
id: v2024-json-patch-operation
title: JsonPatchOperation
pagination_label: JsonPatchOperation
sidebar_label: JsonPatchOperation
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'JsonPatchOperation', 'V2024JsonPatchOperation'] 
slug: /tools/sdk/powershell/v2024/models/json-patch-operation
tags: ['SDK', 'Software Development Kit', 'JsonPatchOperation', 'V2024JsonPatchOperation']
---


# JsonPatchOperation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Op** |  **Enum** [  "add",    "remove",    "replace",    "move",    "copy",    "test" ] | The operation to be performed | [required]
**Path** | **String** | A string JSON Pointer representing the target path to an element to be affected by the operation | [required]
**Value** | [**UpdateMultiHostSourcesRequestInnerValue**](update-multi-host-sources-request-inner-value) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$JsonPatchOperation = Initialize-V2024JsonPatchOperation  -Op replace `
 -Path /description `
 -Value null
```

- Convert the resource to JSON
```powershell
$JsonPatchOperation | ConvertTo-JSON
```


[[Back to top]](#) 

