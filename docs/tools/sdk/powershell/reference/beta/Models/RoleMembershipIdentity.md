---
id: beta-role-membership-identity
title: RoleMembershipIdentity
pagination_label: RoleMembershipIdentity
sidebar_label: RoleMembershipIdentity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleMembershipIdentity'] 
slug: /tools/sdk/powershell/beta/models/role-membership-identity
tags: ['SDK', 'Software Development Kit', 'RoleMembershipIdentity']
---


# RoleMembershipIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to [**DtoType**](dto-type) |  | [optional] 
**Id** |  Pointer to **String** | Identity id | [optional] 
**Name** |  Pointer to **String** | Human-readable display name of the Identity. | [optional] 
**AliasName** |  Pointer to **String** | User name of the Identity | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMembershipIdentity = Initialize-PSSailpoint.BetaRoleMembershipIdentity  -Type null `
 -Id 2c9180a46faadee4016fb4e018c20639 `
 -Name Thomas Edison `
 -AliasName t.edison
```

- Convert the resource to JSON
```powershell
$RoleMembershipIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

