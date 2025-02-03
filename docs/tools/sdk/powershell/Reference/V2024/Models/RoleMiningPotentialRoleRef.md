---
id: v2024-role-mining-potential-role-ref
title: RoleMiningPotentialRoleRef
pagination_label: RoleMiningPotentialRoleRef
sidebar_label: RoleMiningPotentialRoleRef
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleMiningPotentialRoleRef', 'V2024RoleMiningPotentialRoleRef'] 
slug: /tools/sdk/powershell/v2024/models/role-mining-potential-role-ref
tags: ['SDK', 'Software Development Kit', 'RoleMiningPotentialRoleRef', 'V2024RoleMiningPotentialRoleRef']
---


# RoleMiningPotentialRoleRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Id of the potential role | [optional] 
**Name** | **String** | Name of the potential role | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningPotentialRoleRef = Initialize-PSSailpoint.V2024RoleMiningPotentialRoleRef  -Id e0cc5d7d-bf7f-4f81-b2af-8885b09d9923 `
 -Name Potential Role - e0cc5d
```

- Convert the resource to JSON
```powershell
$RoleMiningPotentialRoleRef | ConvertTo-JSON
```


[[Back to top]](#) 

