---
id: role-mining-potential-role-application
title: RoleMiningPotentialRoleApplication
pagination_label: RoleMiningPotentialRoleApplication
sidebar_label: RoleMiningPotentialRoleApplication
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'RoleMiningPotentialRoleApplication'] 
slug: /tools/sdk/powershell/beta/models/role-mining-potential-role-application
tags: ['SDK', 'Software Development Kit', 'RoleMiningPotentialRoleApplication']
---


# RoleMiningPotentialRoleApplication

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Id of the potential role | [optional] 
**Name** |  Pointer to **String** | Name of the potential role | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningPotentialRoleApplication = Initialize-BetaRoleMiningPotentialRoleApplication  -Id null `
 -Name null
```

- Convert the resource to JSON
```powershell
$RoleMiningPotentialRoleApplication | ConvertTo-JSON
```


[[Back to top]](#) 

