---
id: role-mining-potential-role-source-usage
title: RoleMiningPotentialRoleSourceUsage
pagination_label: RoleMiningPotentialRoleSourceUsage
sidebar_label: RoleMiningPotentialRoleSourceUsage
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleMiningPotentialRoleSourceUsage'] 
slug: /tools/sdk/powershell/v2024/models/role-mining-potential-role-source-usage
tags: ['SDK', 'Software Development Kit', 'RoleMiningPotentialRoleSourceUsage']
---


# RoleMiningPotentialRoleSourceUsage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The identity ID | [optional] 
**DisplayName** |  Pointer to **String** | Display name for the identity | [optional] 
**Email** |  Pointer to **String** | Email address for the identity | [optional] 
**UsageCount** |  Pointer to **Int32** | The number of days there has been usage of the source by the identity. | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningPotentialRoleSourceUsage = Initialize-PSSailpoint.V2024RoleMiningPotentialRoleSourceUsage  -Id 2c918089762475180176267f894b54dc `
 -DisplayName Kirk Koepp `
 -Email kirk.koepp@testmail.identitynow.com `
 -UsageCount 25
```

- Convert the resource to JSON
```powershell
$RoleMiningPotentialRoleSourceUsage | ConvertTo-JSON
```


[[Back to top]](#) 

