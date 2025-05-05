---
id: account-usage
title: AccountUsage
pagination_label: AccountUsage
sidebar_label: AccountUsage
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountUsage', 'AccountUsage'] 
slug: /tools/sdk/powershell/v3/models/account-usage
tags: ['SDK', 'Software Development Kit', 'AccountUsage', 'AccountUsage']
---


# AccountUsage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Date** | **System.DateTime** | The first day of the month for which activity is aggregated. | [optional] 
**Count** | **Int64** | The number of days within the month that the account was active in a source. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountUsage = Initialize-PSSailpoint.V3AccountUsage  -Date Fri Apr 21 00:00:00 UTC 2023 `
 -Count 10
```

- Convert the resource to JSON
```powershell
$AccountUsage | ConvertTo-JSON
```


[[Back to top]](#) 

