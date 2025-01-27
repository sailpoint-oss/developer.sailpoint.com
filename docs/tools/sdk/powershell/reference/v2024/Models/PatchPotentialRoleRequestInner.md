---
id: v2024-patch-potential-role-request-inner
title: PatchPotentialRoleRequestInner
pagination_label: PatchPotentialRoleRequestInner
sidebar_label: PatchPotentialRoleRequestInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PatchPotentialRoleRequestInner'] 
slug: /tools/sdk/powershell/v2024/models/patch-potential-role-request-inner
tags: ['SDK', 'Software Development Kit', 'PatchPotentialRoleRequestInner']
---


# PatchPotentialRoleRequestInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Op** |  Pointer to  **Enum** [  "remove",    "replace" ] | The operation to be performed | [optional] 
**Path** |  **String** | A string JSON Pointer representing the target path to an element to be affected by the operation | [required]
**Value** |  Pointer to [**JsonPatchOperationValue**](json-patch-operation-value) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$PatchPotentialRoleRequestInner = Initialize-PSSailpoint.V2024PatchPotentialRoleRequestInner  -Op replace `
 -Path /description `
 -Value null
```

- Convert the resource to JSON
```powershell
$PatchPotentialRoleRequestInner | ConvertTo-JSON
```


[[Back to top]](#) 

