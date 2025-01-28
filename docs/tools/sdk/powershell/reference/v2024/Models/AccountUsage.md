---
id: v2024-account-usage
title: AccountUsage
pagination_label: AccountUsage
sidebar_label: AccountUsage
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountUsage'] 
slug: /tools/sdk/powershell/v2024/models/account-usage
tags: ['SDK', 'Software Development Kit', 'AccountUsage']
---


# AccountUsage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Date** |  Pointer to **System.DateTime** | The first day of the month for which activity is aggregated. | [optional] 
**Count** |  Pointer to **Int64** | The number of days within the month that the account was active in a source. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountUsage = Initialize-PSSailpoint.V2024AccountUsage  -Date Thu Apr 20 20:00:00 EDT 2023 `
 -Count 10
```

- Convert the resource to JSON
```powershell
$AccountUsage | ConvertTo-JSON
```


[[Back to top]](#) 

