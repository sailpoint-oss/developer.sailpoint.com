---
id: beta-role-insights-identities
title: RoleInsightsIdentities
pagination_label: RoleInsightsIdentities
sidebar_label: RoleInsightsIdentities
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleInsightsIdentities', 'BetaRoleInsightsIdentities'] 
slug: /tools/sdk/powershell/beta/models/role-insights-identities
tags: ['SDK', 'Software Development Kit', 'RoleInsightsIdentities', 'BetaRoleInsightsIdentities']
---


# RoleInsightsIdentities

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Id for identity | [optional] 
**Name** | **String** | Name for identity | [optional] 
**Attributes** | **map[string]String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleInsightsIdentities = Initialize-BetaRoleInsightsIdentities  -Id null `
 -Name null `
 -Attributes null
```

- Convert the resource to JSON
```powershell
$RoleInsightsIdentities | ConvertTo-JSON
```


[[Back to top]](#) 

