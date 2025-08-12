---
id: v2025-role-identity
title: RoleIdentity
pagination_label: RoleIdentity
sidebar_label: RoleIdentity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleIdentity', 'V2025RoleIdentity'] 
slug: /tools/sdk/powershell/v2025/models/role-identity
tags: ['SDK', 'Software Development Kit', 'RoleIdentity', 'V2025RoleIdentity']
---


# RoleIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The ID of the Identity | [optional] 
**AliasName** | **String** | The alias / username of the Identity | [optional] 
**Name** | **String** | The human-readable display name of the Identity | [optional] 
**Email** | **String** | Email address of the Identity | [optional] 
**RoleAssignmentSource** | [**RoleAssignmentSourceType**](role-assignment-source-type) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleIdentity = Initialize-V2025RoleIdentity  -Id 2c9180a46faadee4016fb4e018c20639 `
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

