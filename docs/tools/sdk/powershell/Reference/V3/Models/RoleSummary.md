---
id: role-summary
title: RoleSummary
pagination_label: RoleSummary
sidebar_label: RoleSummary
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleSummary', 'RoleSummary'] 
slug: /tools/sdk/powershell/v3/models/role-summary
tags: ['SDK', 'Software Development Kit', 'RoleSummary', 'RoleSummary']
---


# RoleSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the referenced object. | [optional] 
**Name** | **String** | The human readable name of the referenced object. | [optional] 
**DisplayName** | **String** |  | [optional] 
**Description** | **String** | Description of access item. | [optional] 
**Type** | **String** | Type of the access item. | [optional] 
**Owner** | [**DisplayReference**](display-reference) |  | [optional] 
**Disabled** | **Boolean** |  | [optional] 
**Revocable** | **Boolean** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleSummary = Initialize-RoleSummary  -Id 2c91808568c529c60168cca6f90c1313 `
 -Name John Doe `
 -DisplayName John Q. Doe `
 -Description null `
 -Type ROLE `
 -Owner null `
 -Disabled null `
 -Revocable null
```

- Convert the resource to JSON
```powershell
$RoleSummary | ConvertTo-JSON
```


[[Back to top]](#) 

