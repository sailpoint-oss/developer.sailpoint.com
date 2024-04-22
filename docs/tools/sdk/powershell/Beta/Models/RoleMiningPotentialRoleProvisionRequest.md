---
id: role-mining-potential-role-provision-request
title: RoleMiningPotentialRoleProvisionRequest
pagination_label: RoleMiningPotentialRoleProvisionRequest
sidebar_label: RoleMiningPotentialRoleProvisionRequest
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'RoleMiningPotentialRoleProvisionRequest'] 
slug: /tools/sdk/powershell/beta/models/role-mining-potential-role-provision-request
tags: ['SDK', 'Software Development Kit', 'RoleMiningPotentialRoleProvisionRequest']
---


# RoleMiningPotentialRoleProvisionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoleName** |  Pointer to **String** | Name of the new role being created | [optional] 
**RoleDescription** |  Pointer to **String** | Short description of the new role being created | [optional] 
**OwnerId** |  Pointer to **String** | ID of the identity that will own this role | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningPotentialRoleProvisionRequest = Initialize-BetaRoleMiningPotentialRoleProvisionRequest  -RoleName Finance - Accounting `
 -RoleDescription General access for accounting department `
 -OwnerId 2b568c65bc3c4c57a43bd97e3a8e41
```

- Convert the resource to JSON
```powershell
$RoleMiningPotentialRoleProvisionRequest | ConvertTo-JSON
```


[[Back to top]](#) 

