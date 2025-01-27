---
id: role-insights-identities
title: RoleInsightsIdentities
pagination_label: RoleInsightsIdentities
sidebar_label: RoleInsightsIdentities
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleInsightsIdentities'] 
slug: /tools/sdk/powershell/v2024/models/role-insights-identities
tags: ['SDK', 'Software Development Kit', 'RoleInsightsIdentities']
---


# RoleInsightsIdentities

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Id for identity | [optional] 
**Name** |  Pointer to **String** | Name for identity | [optional] 
**Attributes** |  Pointer to **map[string]String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleInsightsIdentities = Initialize-PSSailpoint.V2024RoleInsightsIdentities  -Id null `
 -Name null `
 -Attributes null
```

- Convert the resource to JSON
```powershell
$RoleInsightsIdentities | ConvertTo-JSON
```


[[Back to top]](#) 

