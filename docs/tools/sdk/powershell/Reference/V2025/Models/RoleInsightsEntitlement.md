---
id: v2025-role-insights-entitlement
title: RoleInsightsEntitlement
pagination_label: RoleInsightsEntitlement
sidebar_label: RoleInsightsEntitlement
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleInsightsEntitlement', 'V2025RoleInsightsEntitlement'] 
slug: /tools/sdk/powershell/v2025/models/role-insights-entitlement
tags: ['SDK', 'Software Development Kit', 'RoleInsightsEntitlement', 'V2025RoleInsightsEntitlement']
---


# RoleInsightsEntitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Name of the entitlement | [optional] 
**Id** | **String** | Id of the entitlement | [optional] 
**Description** | **String** | Description for the entitlement | [optional] 
**Source** | **String** | Source or the application for the entitlement | [optional] 
**Attribute** | **String** | Attribute for the entitlement | [optional] 
**Value** | **String** | Attribute value for the entitlement | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleInsightsEntitlement = Initialize-V2025RoleInsightsEntitlement  -Name Administrator `
 -Id 8c190e67-87aa-4ed9-a90b-d9d5344523fb `
 -Description Full administrative access to IdentityNow `
 -Source IdentityNow `
 -Attribute assignedGroups `
 -Value ORG_ADMIN
```

- Convert the resource to JSON
```powershell
$RoleInsightsEntitlement | ConvertTo-JSON
```


[[Back to top]](#) 

