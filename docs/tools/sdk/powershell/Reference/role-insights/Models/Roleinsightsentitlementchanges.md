---
id: roleinsightsentitlementchanges
title: Roleinsightsentitlementchanges
pagination_label: Roleinsightsentitlementchanges
sidebar_label: Roleinsightsentitlementchanges
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Roleinsightsentitlementchanges', 'Roleinsightsentitlementchanges'] 
slug: /tools/sdk/powershell/roleinsights/models/roleinsightsentitlementchanges
tags: ['SDK', 'Software Development Kit', 'Roleinsightsentitlementchanges', 'Roleinsightsentitlementchanges']
---


# Roleinsightsentitlementchanges

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Name of the entitlement | [optional] 
**Id** | **String** | Id of the entitlement | [optional] 
**Description** | **String** | Description for the entitlement | [optional] 
**Attribute** | **String** | Attribute for the entitlement | [optional] 
**Value** | **String** | Attribute value for the entitlement | [optional] 
**Source** | **String** | Source or the application for the entitlement | [optional] 
**Insight** | [**Roleinsightsinsight**](roleinsightsinsight) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Roleinsightsentitlementchanges = Initialize-Roleinsightsentitlementchanges  -Name Administrator `
 -Id 8c190e67-87aa-4ed9-a90b-d9d5344523fb `
 -Description Full administrative access to IdentityNow `
 -Attribute assignedGroups `
 -Value ORG_ADMIN `
 -Source IdentityNow `
 -Insight null
```

- Convert the resource to JSON
```powershell
$Roleinsightsentitlementchanges | ConvertTo-JSON
```


[[Back to top]](#) 

