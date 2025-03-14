---
id: beta-source-usage
title: SourceUsage
pagination_label: SourceUsage
sidebar_label: SourceUsage
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceUsage', 'BetaSourceUsage'] 
slug: /tools/sdk/powershell/beta/models/source-usage
tags: ['SDK', 'Software Development Kit', 'SourceUsage', 'BetaSourceUsage']
---


# SourceUsage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Date** | **System.DateTime** | The first day of the month for which activity is aggregated. | [optional] 
**Count** | **Double** | The average number of days that accounts were active within this source, for the month. | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceUsage = Initialize-PSSailpoint.BetaSourceUsage  -Date Fri Apr 21 00:00:00 UTC 2023 `
 -Count 10.45
```

- Convert the resource to JSON
```powershell
$SourceUsage | ConvertTo-JSON
```


[[Back to top]](#) 

