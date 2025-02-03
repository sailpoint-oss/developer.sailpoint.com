---
id: beta-role-mining-potential-role-provision-request
title: RoleMiningPotentialRoleProvisionRequest
pagination_label: RoleMiningPotentialRoleProvisionRequest
sidebar_label: RoleMiningPotentialRoleProvisionRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleMiningPotentialRoleProvisionRequest', 'BetaRoleMiningPotentialRoleProvisionRequest'] 
slug: /tools/sdk/powershell/beta/models/role-mining-potential-role-provision-request
tags: ['SDK', 'Software Development Kit', 'RoleMiningPotentialRoleProvisionRequest', 'BetaRoleMiningPotentialRoleProvisionRequest']
---


# RoleMiningPotentialRoleProvisionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoleName** |  Pointer to **String** | Name of the new role being created | [optional] 
**RoleDescription** |  Pointer to **String** | Short description of the new role being created | [optional] 
**OwnerId** |  Pointer to **String** | ID of the identity that will own this role | [optional] 
**IncludeIdentities** |  Pointer to **Boolean** | When true, create access requests for the identities associated with the potential role | [optional] [default to $false]
**DirectlyAssignedEntitlements** |  Pointer to **Boolean** | When true, assign entitlements directly to the role; otherwise, create access profiles containing the entitlements | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$RoleMiningPotentialRoleProvisionRequest = Initialize-PSSailpoint.BetaRoleMiningPotentialRoleProvisionRequest  -RoleName Finance - Accounting `
 -RoleDescription General access for accounting department `
 -OwnerId 2b568c65bc3c4c57a43bd97e3a8e41 `
 -IncludeIdentities true `
 -DirectlyAssignedEntitlements false
```

- Convert the resource to JSON
```powershell
$RoleMiningPotentialRoleProvisionRequest | ConvertTo-JSON
```


[[Back to top]](#) 

