---
id: v2024-role-mining-identity
title: RoleMiningIdentity
pagination_label: RoleMiningIdentity
sidebar_label: RoleMiningIdentity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleMiningIdentity', 'V2024RoleMiningIdentity'] 
slug: /tools/sdk/powershell/v2024/models/role-mining-identity
tags: ['SDK', 'Software Development Kit', 'RoleMiningIdentity', 'V2024RoleMiningIdentity']
---


# RoleMiningIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Id of the identity | [optional] 
**Name** | **String** | Name of the identity | [optional] 
**Attributes** | **map[string]String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningIdentity = Initialize-V2024RoleMiningIdentity  -Id 2c9180877212632a017228d5934525e6 `
 -Name Allene Abernathy-Welch `
 -Attributes {jobTitle=SQL Developer, department=IT, location=NYC, firstName=Allene}
```

- Convert the resource to JSON
```powershell
$RoleMiningIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

