---
id: accesssummary-access
title: AccesssummaryAccess
pagination_label: AccesssummaryAccess
sidebar_label: AccesssummaryAccess
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccesssummaryAccess', 'AccesssummaryAccess'] 
slug: /tools/sdk/powershell/certifications/models/accesssummary-access
tags: ['SDK', 'Software Development Kit', 'AccesssummaryAccess', 'AccesssummaryAccess']
---


# AccesssummaryAccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**Dtotype**](dtotype) |  | [optional] 
**Id** | **String** | The ID of the item being certified | [optional] 
**Name** | **String** | The name of the item being certified | [optional] 

## Examples

- Prepare the resource
```powershell
$AccesssummaryAccess = Initialize-AccesssummaryAccess  -Type null `
 -Id 2c9180867160846801719932c5153fb7 `
 -Name Entitlement for Company Database
```

- Convert the resource to JSON
```powershell
$AccesssummaryAccess | ConvertTo-JSON
```


[[Back to top]](#) 

