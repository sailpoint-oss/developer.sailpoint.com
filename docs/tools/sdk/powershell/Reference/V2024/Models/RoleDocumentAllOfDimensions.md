---
id: v2024-role-document-all-of-dimensions
title: RoleDocumentAllOfDimensions
pagination_label: RoleDocumentAllOfDimensions
sidebar_label: RoleDocumentAllOfDimensions
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleDocumentAllOfDimensions', 'V2024RoleDocumentAllOfDimensions'] 
slug: /tools/sdk/powershell/v2024/models/role-document-all-of-dimensions
tags: ['SDK', 'Software Development Kit', 'RoleDocumentAllOfDimensions', 'V2024RoleDocumentAllOfDimensions']
---


# RoleDocumentAllOfDimensions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Unique ID of the dimension. | [optional] 
**Name** | **String** | Name of the dimension. | [optional] 
**Description** | **String** | Description of the dimension. | [optional] 
**Entitlements** | [**[]RoleDocumentAllOfEntitlements1**](role-document-all-of-entitlements1) | Entitlements included with the role. | [optional] 
**AccessProfiles** | [**[]BaseAccessProfile**](base-access-profile) | Access profiles included in the dimension. | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleDocumentAllOfDimensions = Initialize-V2024RoleDocumentAllOfDimensions  -Id b3c28992ba964a40a7598978139d1ced `
 -Name Manager Austin Branch `
 -Description Managers located at the Austin branch `
 -Entitlements null `
 -AccessProfiles null
```

- Convert the resource to JSON
```powershell
$RoleDocumentAllOfDimensions | ConvertTo-JSON
```


[[Back to top]](#) 

