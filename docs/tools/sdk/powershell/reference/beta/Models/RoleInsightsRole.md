---
id: beta-role-insights-role
title: RoleInsightsRole
pagination_label: RoleInsightsRole
sidebar_label: RoleInsightsRole
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleInsightsRole', 'BetaRoleInsightsRole'] 
slug: /tools/sdk/powershell/beta/models/role-insights-role
tags: ['SDK', 'Software Development Kit', 'RoleInsightsRole', 'BetaRoleInsightsRole']
---


# RoleInsightsRole

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  Pointer to **String** | Role name | [optional] 
**Id** |  Pointer to **String** | Role id | [optional] 
**Description** |  Pointer to **String** | Role description | [optional] 
**OwnerName** |  Pointer to **String** | Role owner name | [optional] 
**OwnerId** |  Pointer to **String** | Role owner id | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleInsightsRole = Initialize-PSSailpoint.BetaRoleInsightsRole  -Name Software Engineer `
 -Id 1467e61e-f284-439c-ba2d-c6cc11cf0941 `
 -Description Person who develops software `
 -OwnerName Bob `
 -OwnerId 1467e61e-f284-439c-ba2d-c6cc11cf0941
```

- Convert the resource to JSON
```powershell
$RoleInsightsRole | ConvertTo-JSON
```


[[Back to top]](#) 

