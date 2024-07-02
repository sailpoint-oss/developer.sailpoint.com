---
id: json-patch-operation
title: JsonPatchOperation
pagination_label: JsonPatchOperation
sidebar_label: JsonPatchOperation
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'JsonPatchOperation'] 
slug: /tools/sdk/powershell/beta/models/json-patch-operation
tags: ['SDK', 'Software Development Kit', 'JsonPatchOperation']
---


# JsonPatchOperation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Op** |   **Enum** [  "add",    "remove",    "replace",    "move",    "copy",    "test" ] | The operation to be performed | 
**Path** |  **String** | A string JSON Pointer representing the target path to an element to be affected by the operation | 
**Value** |  Pointer to [**JsonPatchOperationValue**](json-patch-operation-value) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$JsonPatchOperation = Initialize-BetaJsonPatchOperation  -Op replace `
 -Path /description `
 -Value null
```

- Convert the resource to JSON
```powershell
$JsonPatchOperation | ConvertTo-JSON
```


[[Back to top]](#) 

