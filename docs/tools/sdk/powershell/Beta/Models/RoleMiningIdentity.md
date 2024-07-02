---
id: role-mining-identity
title: RoleMiningIdentity
pagination_label: RoleMiningIdentity
sidebar_label: RoleMiningIdentity
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'RoleMiningIdentity'] 
slug: /tools/sdk/powershell/beta/models/role-mining-identity
tags: ['SDK', 'Software Development Kit', 'RoleMiningIdentity']
---


# RoleMiningIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Id of the identity | [optional] 
**Name** |  Pointer to **String** | Name of the identity | [optional] 
**Attributes** |  Pointer to **map[string]String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningIdentity = Initialize-BetaRoleMiningIdentity  -Id null `
 -Name null `
 -Attributes null
```

- Convert the resource to JSON
```powershell
$RoleMiningIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

