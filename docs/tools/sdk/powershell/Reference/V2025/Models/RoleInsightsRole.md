---
id: v2025-role-insights-role
title: RoleInsightsRole
pagination_label: RoleInsightsRole
sidebar_label: RoleInsightsRole
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleInsightsRole', 'V2025RoleInsightsRole'] 
slug: /tools/sdk/powershell/v2025/models/role-insights-role
tags: ['SDK', 'Software Development Kit', 'RoleInsightsRole', 'V2025RoleInsightsRole']
---


# RoleInsightsRole

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Role name | [optional] 
**Id** | **String** | Role id | [optional] 
**Description** | **String** | Role description | [optional] 
**OwnerName** | **String** | Role owner name | [optional] 
**OwnerId** | **String** | Role owner id | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleInsightsRole = Initialize-V2025RoleInsightsRole  -Name Software Engineer `
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

