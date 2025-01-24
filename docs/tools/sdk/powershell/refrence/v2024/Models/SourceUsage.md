---
id: source-usage
title: SourceUsage
pagination_label: SourceUsage
sidebar_label: SourceUsage
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceUsage'] 
slug: /tools/sdk/powershell/v2024/models/source-usage
tags: ['SDK', 'Software Development Kit', 'SourceUsage']
---


# SourceUsage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Date** |  Pointer to **System.DateTime** | The first day of the month for which activity is aggregated. | [optional] 
**Count** |  Pointer to **Double** | The average number of days that accounts were active within this source, for the month. | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceUsage = Initialize-PSSailpoint.V2024SourceUsage  -Date Thu Apr 20 20:00:00 EDT 2023 `
 -Count 10.45
```

- Convert the resource to JSON
```powershell
$SourceUsage | ConvertTo-JSON
```


[[Back to top]](#) 

