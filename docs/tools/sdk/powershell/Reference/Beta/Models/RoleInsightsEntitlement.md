---
id: beta-role-insights-entitlement
title: RoleInsightsEntitlement
pagination_label: RoleInsightsEntitlement
sidebar_label: RoleInsightsEntitlement
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleInsightsEntitlement', 'BetaRoleInsightsEntitlement'] 
slug: /tools/sdk/powershell/beta/models/role-insights-entitlement
tags: ['SDK', 'Software Development Kit', 'RoleInsightsEntitlement', 'BetaRoleInsightsEntitlement']
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
$RoleInsightsEntitlement = Initialize-BetaRoleInsightsEntitlement  -Name null `
 -Id null `
 -Description null `
 -Source null `
 -Attribute null `
 -Value null
```

- Convert the resource to JSON
```powershell
$RoleInsightsEntitlement | ConvertTo-JSON
```


[[Back to top]](#) 

