---
id: beta-role-mining-potential-role-source-usage
title: RoleMiningPotentialRoleSourceUsage
pagination_label: RoleMiningPotentialRoleSourceUsage
sidebar_label: RoleMiningPotentialRoleSourceUsage
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleMiningPotentialRoleSourceUsage', 'BetaRoleMiningPotentialRoleSourceUsage'] 
slug: /tools/sdk/powershell/beta/models/role-mining-potential-role-source-usage
tags: ['SDK', 'Software Development Kit', 'RoleMiningPotentialRoleSourceUsage', 'BetaRoleMiningPotentialRoleSourceUsage']
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
$RoleMiningPotentialRoleSourceUsage = Initialize-BetaRoleMiningPotentialRoleSourceUsage  -Id 2c918089762475180176267f894b54dc `
 -DisplayName Kirk Koepp `
 -Email kirk.koepp@testmail.identitynow.com `
 -UsageCount 25
```

- Convert the resource to JSON
```powershell
$RoleMiningPotentialRoleSourceUsage | ConvertTo-JSON
```


[[Back to top]](#) 

