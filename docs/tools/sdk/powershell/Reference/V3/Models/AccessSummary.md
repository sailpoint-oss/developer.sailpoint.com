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
**Access** | [**AccessSummaryAccess**](access-summary-access) |  | [optional] 
**Entitlement** | [**ReviewableEntitlement**](reviewable-entitlement) |  | [optional] 
**AccessProfile** | [**ReviewableAccessProfile**](reviewable-access-profile) |  | [optional] 
**Role** | [**ReviewableRole**](reviewable-role) |  | [optional] 

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

