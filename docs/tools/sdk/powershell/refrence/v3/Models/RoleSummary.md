---
id: role-summary
title: RoleSummary
pagination_label: RoleSummary
sidebar_label: RoleSummary
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleSummary'] 
slug: /tools/sdk/powershell/v3/models/role-summary
tags: ['SDK', 'Software Development Kit', 'RoleSummary']
---


# RoleSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The unique ID of the referenced object. | [optional] 
**Name** |  Pointer to **String** | The human readable name of the referenced object. | [optional] 
**DisplayName** |  Pointer to **String** |  | [optional] 
**Type** |  Pointer to [**DtoType**](dto-type) |  | [optional] 
**Description** |  Pointer to **String** |  | [optional] 
**Owner** |  Pointer to [**DisplayReference**](display-reference) |  | [optional] 
**Disabled** |  Pointer to **Boolean** |  | [optional] 
**Revocable** |  Pointer to **Boolean** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleSummary = Initialize-PSSailpoint.V3RoleSummary  -Id 2c91808568c529c60168cca6f90c1313 `
 -Name John Doe `
 -DisplayName John Q. Doe `
 -Type null `
 -Description null `
 -Owner null `
 -Disabled null `
 -Revocable null
```

- Convert the resource to JSON
```powershell
$RoleSummary | ConvertTo-JSON
```


[[Back to top]](#) 

