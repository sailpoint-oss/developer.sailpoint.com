---
id: v2025-role-mining-potential-role-source-usage
title: RoleMiningPotentialRoleSourceUsage
pagination_label: RoleMiningPotentialRoleSourceUsage
sidebar_label: RoleMiningPotentialRoleSourceUsage
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleMiningPotentialRoleSourceUsage', 'V2025RoleMiningPotentialRoleSourceUsage'] 
slug: /tools/sdk/powershell/v2025/models/role-mining-potential-role-source-usage
tags: ['SDK', 'Software Development Kit', 'RoleMiningPotentialRoleSourceUsage', 'V2025RoleMiningPotentialRoleSourceUsage']
---


# RoleMiningPotentialRoleSourceUsage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The identity ID | [optional] 
**DisplayName** | **String** | Display name for the identity | [optional] 
**Email** | **String** | Email address for the identity | [optional] 
**UsageCount** | **Int32** | The number of days there has been usage of the source by the identity. | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningPotentialRoleSourceUsage = Initialize-V2025RoleMiningPotentialRoleSourceUsage  -Id 2c918089762475180176267f894b54dc `
 -DisplayName Kirk Koepp `
 -Email kirk.koepp@testmail.identitynow.com `
 -UsageCount 25
```

- Convert the resource to JSON
```powershell
$RoleMiningPotentialRoleSourceUsage | ConvertTo-JSON
```


[[Back to top]](#) 

