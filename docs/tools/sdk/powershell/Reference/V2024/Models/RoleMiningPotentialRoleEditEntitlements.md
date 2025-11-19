---
id: v2024-role-mining-potential-role-edit-entitlements
title: RoleMiningPotentialRoleEditEntitlements
pagination_label: RoleMiningPotentialRoleEditEntitlements
sidebar_label: RoleMiningPotentialRoleEditEntitlements
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleMiningPotentialRoleEditEntitlements', 'V2024RoleMiningPotentialRoleEditEntitlements'] 
slug: /tools/sdk/powershell/v2024/models/role-mining-potential-role-edit-entitlements
tags: ['SDK', 'Software Development Kit', 'RoleMiningPotentialRoleEditEntitlements', 'V2024RoleMiningPotentialRoleEditEntitlements']
---


# RoleMiningPotentialRoleEditEntitlements

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** | **[]String** | The list of entitlement ids to be edited | [optional] 
**Exclude** | **Boolean** | If true, add ids to be exclusion list. If false, remove ids from the exclusion list. | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningPotentialRoleEditEntitlements = Initialize-V2024RoleMiningPotentialRoleEditEntitlements  -Ids null `
 -Exclude null
```

- Convert the resource to JSON
```powershell
$RoleMiningPotentialRoleEditEntitlements | ConvertTo-JSON
```


[[Back to top]](#) 

