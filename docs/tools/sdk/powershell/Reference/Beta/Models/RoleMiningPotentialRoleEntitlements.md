---
id: beta-role-mining-potential-role-entitlements
title: RoleMiningPotentialRoleEntitlements
pagination_label: RoleMiningPotentialRoleEntitlements
sidebar_label: RoleMiningPotentialRoleEntitlements
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleMiningPotentialRoleEntitlements', 'BetaRoleMiningPotentialRoleEntitlements'] 
slug: /tools/sdk/powershell/beta/models/role-mining-potential-role-entitlements
tags: ['SDK', 'Software Development Kit', 'RoleMiningPotentialRoleEntitlements', 'BetaRoleMiningPotentialRoleEntitlements']
---


# RoleMiningPotentialRoleEntitlements

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Id of the entitlement | [optional] 
**Name** | **String** | Name of the entitlement | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningPotentialRoleEntitlements = Initialize-PSSailpoint.BetaRoleMiningPotentialRoleEntitlements  -Id {id=2c9180877212632a017228d5a796292c} `
 -Name {name=LauncherTest2}
```

- Convert the resource to JSON
```powershell
$RoleMiningPotentialRoleEntitlements | ConvertTo-JSON
```


[[Back to top]](#) 

