---
id: role-insights-entitlement-changes
title: RoleInsightsEntitlementChanges
pagination_label: RoleInsightsEntitlementChanges
sidebar_label: RoleInsightsEntitlementChanges
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleInsightsEntitlementChanges'] 
slug: /tools/sdk/powershell/beta/models/role-insights-entitlement-changes
tags: ['SDK', 'Software Development Kit', 'RoleInsightsEntitlementChanges']
---


# RoleInsightsEntitlementChanges

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  Pointer to **String** | Name of the entitlement | [optional] 
**Id** |  Pointer to **String** | Id of the entitlement | [optional] 
**Description** |  Pointer to **String** | Description for the entitlement | [optional] 
**Attribute** |  Pointer to **String** | Attribute for the entitlement | [optional] 
**Value** |  Pointer to **String** | Attribute value for the entitlement | [optional] 
**Source** |  Pointer to **String** | Source or the application for the entitlement | [optional] 
**Insight** |  Pointer to [**RoleInsightsInsight**](role-insights-insight) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleInsightsEntitlementChanges = Initialize-PSSailpoint.BetaRoleInsightsEntitlementChanges  -Name null `
 -Id null `
 -Description null `
 -Attribute null `
 -Value null `
 -Source null `
 -Insight null
```

- Convert the resource to JSON
```powershell
$RoleInsightsEntitlementChanges | ConvertTo-JSON
```


[[Back to top]](#) 

