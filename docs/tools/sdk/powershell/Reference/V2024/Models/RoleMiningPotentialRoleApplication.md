---
id: v2024-role-mining-potential-role-application
title: RoleMiningPotentialRoleApplication
pagination_label: RoleMiningPotentialRoleApplication
sidebar_label: RoleMiningPotentialRoleApplication
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleMiningPotentialRoleApplication', 'V2024RoleMiningPotentialRoleApplication'] 
slug: /tools/sdk/powershell/v2024/models/role-mining-potential-role-application
tags: ['SDK', 'Software Development Kit', 'RoleMiningPotentialRoleApplication', 'V2024RoleMiningPotentialRoleApplication']
---


# RoleMiningPotentialRoleApplication

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Id of the application | [optional] 
**Name** | **String** | Name of the application | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningPotentialRoleApplication = Initialize-V2024RoleMiningPotentialRoleApplication  -Id {id=2c9180877212632a017228d5a796292b} `
 -Name {name=Slack}
```

- Convert the resource to JSON
```powershell
$RoleMiningPotentialRoleApplication | ConvertTo-JSON
```


[[Back to top]](#) 

