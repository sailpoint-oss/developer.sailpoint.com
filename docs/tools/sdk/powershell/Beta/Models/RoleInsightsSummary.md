---
id: role-insights-summary
title: RoleInsightsSummary
pagination_label: RoleInsightsSummary
sidebar_label: RoleInsightsSummary
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'RoleInsightsSummary'] 
slug: /tools/sdk/powershell/beta/models/role-insights-summary
tags: ['SDK', 'Software Development Kit', 'RoleInsightsSummary']
---


# RoleInsightsSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NumberOfUpdates** |  Pointer to **Int32** | Total number of roles with updates | [optional] 
**LastGenerated** |  Pointer to **System.DateTime** | The date-time role insights were last found. | [optional] 
**EntitlementsIncludedInRoles** |  Pointer to **Int32** | The number of entitlements included in roles (vs free radicals). | [optional] 
**TotalNumberOfEntitlements** |  Pointer to **Int32** | The total number of entitlements. | [optional] 
**IdentitiesWithAccessViaRoles** |  Pointer to **Int32** | The number of identities in roles vs. identities with just entitlements and not in roles. | [optional] 
**TotalNumberOfIdentities** |  Pointer to **Int32** | The total number of identities. | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleInsightsSummary = Initialize-BetaRoleInsightsSummary  -NumberOfUpdates null `
 -LastGenerated 2020-05-19T13:49:37.385Z `
 -EntitlementsIncludedInRoles 45 `
 -TotalNumberOfEntitlements 250 `
 -IdentitiesWithAccessViaRoles 550 `
 -TotalNumberOfIdentities 980
```

- Convert the resource to JSON
```powershell
$RoleInsightsSummary | ConvertTo-JSON
```


[[Back to top]](#) 

