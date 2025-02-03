---
id: v2024-owner-reference-dto
title: OwnerReferenceDto
pagination_label: OwnerReferenceDto
sidebar_label: OwnerReferenceDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'OwnerReferenceDto', 'V2024OwnerReferenceDto'] 
slug: /tools/sdk/powershell/v2024/models/owner-reference-dto
tags: ['SDK', 'Software Development Kit', 'OwnerReferenceDto', 'V2024OwnerReferenceDto']
---


# OwnerReferenceDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The owner id for the entitlement | [optional] 
**Name** |  Pointer to **String** | The owner name for the entitlement | [optional] 
**Type** |  Pointer to  **Enum** [  "IDENTITY" ] | The type of the owner. Initially only type IDENTITY is supported | [optional] 

## Examples

- Prepare the resource
```powershell
$OwnerReferenceDto = Initialize-PSSailpoint.V2024OwnerReferenceDto  -Id 2a2fdacca5e345f18bf7970cfbb8fec2 `
 -Name identity 1 `
 -Type IDENTITY
```

- Convert the resource to JSON
```powershell
$OwnerReferenceDto | ConvertTo-JSON
```


[[Back to top]](#) 

