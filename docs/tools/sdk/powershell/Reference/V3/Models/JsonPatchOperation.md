---
id: json-patch-operation
title: JsonPatchOperation
pagination_label: JsonPatchOperation
sidebar_label: JsonPatchOperation
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'JsonPatchOperation', 'JsonPatchOperation'] 
slug: /tools/sdk/powershell/v3/models/json-patch-operation
tags: ['SDK', 'Software Development Kit', 'JsonPatchOperation', 'JsonPatchOperation']
---


# JsonPatchOperation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Op** |  **Enum** [  "add",    "remove",    "replace",    "move",    "copy",    "test" ] | The operation to be performed | [required]
**Path** | **String** | A string JSON Pointer representing the target path to an element to be affected by the operation | [required]
**Value** | [**JsonPatchOperationValue**](json-patch-operation-value) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$JsonPatchOperation = Initialize-PSSailpoint.V3JsonPatchOperation  -Op replace `
 -Path /description `
 -Value null
```

- Convert the resource to JSON
```powershell
$JsonPatchOperation | ConvertTo-JSON
```


[[Back to top]](#) 

