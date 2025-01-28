---
id: access-summary
title: AccessSummary
pagination_label: AccessSummary
sidebar_label: AccessSummary
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessSummary', 'AccessSummary'] 
slug: /tools/sdk/powershell/v3/models/access-summary
tags: ['SDK', 'Software Development Kit', 'AccessSummary', 'AccessSummary']
---


# AccessSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Access** |  Pointer to [**AccessSummaryAccess**](access-summary-access) |  | [optional] 
**Entitlement** |  Pointer to [**ReviewableEntitlement**](reviewable-entitlement) |  | [optional] 
**AccessProfile** |  Pointer to [**ReviewableAccessProfile**](reviewable-access-profile) |  | [optional] 
**Role** |  Pointer to [**ReviewableRole**](reviewable-role) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessSummary = Initialize-PSSailpoint.V3AccessSummary  -Access null `
 -Entitlement null `
 -AccessProfile null `
 -Role null
```

- Convert the resource to JSON
```powershell
$AccessSummary | ConvertTo-JSON
```


[[Back to top]](#) 

