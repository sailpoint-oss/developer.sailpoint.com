---
id: role-insights-insight
title: RoleInsightsInsight
pagination_label: RoleInsightsInsight
sidebar_label: RoleInsightsInsight
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleInsightsInsight'] 
slug: /tools/sdk/powershell/beta/models/role-insights-insight
tags: ['SDK', 'Software Development Kit', 'RoleInsightsInsight']
---


# RoleInsightsInsight

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to **String** | The number of identities in this role with the entitlement. | [optional] 
**IdentitiesWithAccess** |  Pointer to **Int32** | The number of identities in this role with the entitlement. | [optional] 
**IdentitiesImpacted** |  Pointer to **Int32** | The number of identities in this role that do not have the specified entitlement. | [optional] 
**TotalNumberOfIdentities** |  Pointer to **Int32** | The total number of identities. | [optional] 
**ImpactedIdentityNames** |  Pointer to **String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleInsightsInsight = Initialize-PSSailpoint.BetaRoleInsightsInsight  -Type ADD `
 -IdentitiesWithAccess 850 `
 -IdentitiesImpacted 150 `
 -TotalNumberOfIdentities 1000 `
 -ImpactedIdentityNames null
```

- Convert the resource to JSON
```powershell
$RoleInsightsInsight | ConvertTo-JSON
```


[[Back to top]](#) 

