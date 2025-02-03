---
id: v2024-role-summary
title: RoleSummary
pagination_label: RoleSummary
sidebar_label: RoleSummary
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleSummary', 'V2024RoleSummary'] 
slug: /tools/sdk/powershell/v2024/models/role-summary
tags: ['SDK', 'Software Development Kit', 'RoleSummary', 'V2024RoleSummary']
---


# RoleSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the referenced object. | [optional] 
**Name** | **String** | The human readable name of the referenced object. | [optional] 
**DisplayName** | **String** |  | [optional] 
**Type** | [**DtoType**](dto-type) |  | [optional] 
**Description** | **String** |  | [optional] 
**Owner** | [**DisplayReference**](display-reference) |  | [optional] 
**Disabled** | **Boolean** |  | [optional] 
**Revocable** | **Boolean** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleSummary = Initialize-PSSailpoint.V2024RoleSummary  -Id 2c91808568c529c60168cca6f90c1313 `
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

