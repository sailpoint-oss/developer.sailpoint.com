---
id: role-mining-potential-role-application
title: RoleMiningPotentialRoleApplication
pagination_label: RoleMiningPotentialRoleApplication
sidebar_label: RoleMiningPotentialRoleApplication
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleMiningPotentialRoleApplication'] 
slug: /tools/sdk/powershell/beta/models/role-mining-potential-role-application
tags: ['SDK', 'Software Development Kit', 'RoleMiningPotentialRoleApplication']
---


# RoleMiningPotentialRoleApplication

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Id of the application | [optional] 
**Name** |  Pointer to **String** | Name of the application | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningPotentialRoleApplication = Initialize-PSSailpoint.BetaRoleMiningPotentialRoleApplication  -Id {id&#x3D;2c9180877212632a017228d5a796292b} `
 -Name {name&#x3D;Slack}
```

- Convert the resource to JSON
```powershell
$RoleMiningPotentialRoleApplication | ConvertTo-JSON
```


[[Back to top]](#) 

