---
id: access-summary-access
title: AccessSummaryAccess
pagination_label: AccessSummaryAccess
sidebar_label: AccessSummaryAccess
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessSummaryAccess', 'AccessSummaryAccess'] 
slug: /tools/sdk/powershell/v3/models/access-summary-access
tags: ['SDK', 'Software Development Kit', 'AccessSummaryAccess', 'AccessSummaryAccess']
---


# AccessSummaryAccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to [**DtoType**](dto-type) |  | [optional] 
**Id** |  Pointer to **String** | The ID of the item being certified | [optional] 
**Name** |  Pointer to **String** | The name of the item being certified | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessSummaryAccess = Initialize-PSSailpoint.V3AccessSummaryAccess  -Type null `
 -Id 2c9180867160846801719932c5153fb7 `
 -Name Entitlement for Company Database
```

- Convert the resource to JSON
```powershell
$AccessSummaryAccess | ConvertTo-JSON
```


[[Back to top]](#) 

