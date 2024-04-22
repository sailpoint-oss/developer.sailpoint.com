---
id: role-mining-potential-role-edit-entitlements
title: RoleMiningPotentialRoleEditEntitlements
pagination_label: RoleMiningPotentialRoleEditEntitlements
sidebar_label: RoleMiningPotentialRoleEditEntitlements
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'RoleMiningPotentialRoleEditEntitlements'] 
slug: /tools/sdk/powershell/beta/models/role-mining-potential-role-edit-entitlements
tags: ['SDK', 'Software Development Kit', 'RoleMiningPotentialRoleEditEntitlements']
---


# RoleMiningPotentialRoleEditEntitlements

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** |  Pointer to **[]String** | The list of entitlement ids to be edited | [optional] 
**Exclude** |  Pointer to **Boolean** | If true, add ids to be exclusion list. If false, remove ids from the exclusion list. | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningPotentialRoleEditEntitlements = Initialize-BetaRoleMiningPotentialRoleEditEntitlements  -Ids null `
 -Exclude null
```

- Convert the resource to JSON
```powershell
$RoleMiningPotentialRoleEditEntitlements | ConvertTo-JSON
```


[[Back to top]](#) 

