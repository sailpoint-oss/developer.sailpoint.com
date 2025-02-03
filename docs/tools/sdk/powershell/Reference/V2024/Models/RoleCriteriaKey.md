---
id: v2024-role-criteria-key
title: RoleCriteriaKey
pagination_label: RoleCriteriaKey
sidebar_label: RoleCriteriaKey
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleCriteriaKey', 'V2024RoleCriteriaKey'] 
slug: /tools/sdk/powershell/v2024/models/role-criteria-key
tags: ['SDK', 'Software Development Kit', 'RoleCriteriaKey', 'V2024RoleCriteriaKey']
---


# RoleCriteriaKey

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**RoleCriteriaKeyType**](role-criteria-key-type) |  | [required]
**Property** | **String** | The name of the attribute or entitlement to which the associated criteria applies. | [required]
**SourceId** | **String** | ID of the Source from which an account attribute or entitlement is drawn. Required if type is ACCOUNT or ENTITLEMENT | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleCriteriaKey = Initialize-PSSailpoint.V2024RoleCriteriaKey  -Type null `
 -Property attribute.email `
 -SourceId 2c9180867427f3a301745aec18211519
```

- Convert the resource to JSON
```powershell
$RoleCriteriaKey | ConvertTo-JSON
```


[[Back to top]](#) 

