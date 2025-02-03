---
id: v2024-role-insights-insight
title: RoleInsightsInsight
pagination_label: RoleInsightsInsight
sidebar_label: RoleInsightsInsight
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleInsightsInsight', 'V2024RoleInsightsInsight'] 
slug: /tools/sdk/powershell/v2024/models/role-insights-insight
tags: ['SDK', 'Software Development Kit', 'RoleInsightsInsight', 'V2024RoleInsightsInsight']
---


# RoleInsightsInsight

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **String** | The number of identities in this role with the entitlement. | [optional] 
**IdentitiesWithAccess** | **Int32** | The number of identities in this role with the entitlement. | [optional] 
**IdentitiesImpacted** | **Int32** | The number of identities in this role that do not have the specified entitlement. | [optional] 
**TotalNumberOfIdentities** | **Int32** | The total number of identities. | [optional] 
**ImpactedIdentityNames** | **String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleInsightsInsight = Initialize-PSSailpoint.V2024RoleInsightsInsight  -Type ADD `
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

