---
id: v2024-access-summary-access
title: AccessSummaryAccess
pagination_label: AccessSummaryAccess
sidebar_label: AccessSummaryAccess
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessSummaryAccess', 'V2024AccessSummaryAccess'] 
slug: /tools/sdk/powershell/v2024/models/access-summary-access
tags: ['SDK', 'Software Development Kit', 'AccessSummaryAccess', 'V2024AccessSummaryAccess']
---


# AccessSummaryAccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**DtoType**](dto-type) |  | [optional] 
**Id** | **String** | The ID of the item being certified | [optional] 
**Name** | **String** | The name of the item being certified | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessSummaryAccess = Initialize-V2024AccessSummaryAccess  -Type null `
 -Id 2c9180867160846801719932c5153fb7 `
 -Name Entitlement for Company Database
```

- Convert the resource to JSON
```powershell
$AccessSummaryAccess | ConvertTo-JSON
```


[[Back to top]](#) 

