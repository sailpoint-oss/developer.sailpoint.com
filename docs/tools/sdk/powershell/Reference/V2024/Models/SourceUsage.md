---
id: v2024-source-usage
title: SourceUsage
pagination_label: SourceUsage
sidebar_label: SourceUsage
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceUsage', 'V2024SourceUsage'] 
slug: /tools/sdk/powershell/v2024/models/source-usage
tags: ['SDK', 'Software Development Kit', 'SourceUsage', 'V2024SourceUsage']
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
$SourceUsage = Initialize-PSSailpoint.V2024SourceUsage  -Date Fri Apr 21 00:00:00 UTC 2023 `
 -Count 10.45
```

- Convert the resource to JSON
```powershell
$SourceUsage | ConvertTo-JSON
```


[[Back to top]](#) 

