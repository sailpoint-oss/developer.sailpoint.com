---
id: v2025-role-insights-entitlement-changes
title: RoleInsightsEntitlementChanges
pagination_label: RoleInsightsEntitlementChanges
sidebar_label: RoleInsightsEntitlementChanges
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleInsightsEntitlementChanges', 'V2025RoleInsightsEntitlementChanges'] 
slug: /tools/sdk/powershell/v2025/models/role-insights-entitlement-changes
tags: ['SDK', 'Software Development Kit', 'RoleInsightsEntitlementChanges', 'V2025RoleInsightsEntitlementChanges']
---


# RoleInsightsEntitlementChanges

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Name of the entitlement | [optional] 
**Id** | **String** | Id of the entitlement | [optional] 
**Description** | **String** | Description for the entitlement | [optional] 
**Attribute** | **String** | Attribute for the entitlement | [optional] 
**Value** | **String** | Attribute value for the entitlement | [optional] 
**Source** | **String** | Source or the application for the entitlement | [optional] 
**Insight** | [**RoleInsightsInsight**](role-insights-insight) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleInsightsEntitlementChanges = Initialize-PSSailpoint.V2025RoleInsightsEntitlementChanges  -Name Administrator `
 -Id 8c190e67-87aa-4ed9-a90b-d9d5344523fb `
 -Description Full administrative access to IdentityNow `
 -Attribute assignedGroups `
 -Value ORG_ADMIN `
 -Source IdentityNow `
 -Insight null
```

- Convert the resource to JSON
```powershell
$RoleInsightsEntitlementChanges | ConvertTo-JSON
```


[[Back to top]](#) 

