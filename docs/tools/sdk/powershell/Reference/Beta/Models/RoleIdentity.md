---
id: beta-role-identity
title: RoleIdentity
pagination_label: RoleIdentity
sidebar_label: RoleIdentity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleIdentity', 'BetaRoleIdentity'] 
slug: /tools/sdk/powershell/beta/models/role-identity
tags: ['SDK', 'Software Development Kit', 'RoleIdentity', 'BetaRoleIdentity']
---


# RoleIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The ID of the Identity | [optional] 
**AliasName** |  Pointer to **String** | The alias / username of the Identity | [optional] 
**Name** |  Pointer to **String** | The human-readable display name of the Identity | [optional] 
**Email** |  Pointer to **String** | Email address of the Identity | [optional] 
**RoleAssignmentSource** |  Pointer to [**RoleAssignmentSourceType**](role-assignment-source-type) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleIdentity = Initialize-PSSailpoint.BetaRoleIdentity  -Id 2c9180a46faadee4016fb4e018c20639 `
 -AliasName t.edison `
 -Name Thomas Edison `
 -Email t.edison@identitynow.com `
 -RoleAssignmentSource null
```

- Convert the resource to JSON
```powershell
$RoleIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

