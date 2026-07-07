---
id: sourceusage
title: Sourceusage
pagination_label: Sourceusage
sidebar_label: Sourceusage
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Sourceusage', 'Sourceusage'] 
slug: /tools/sdk/powershell/sourceusages/models/sourceusage
tags: ['SDK', 'Software Development Kit', 'Sourceusage', 'Sourceusage']
---


# Sourceusage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Date** | **System.DateTime** | The first day of the month for which activity is aggregated. | [optional] 
**Count** | **Double** | The average number of days that accounts were active within this source, for the month. | [optional] 

## Examples

- Prepare the resource
```powershell
$Sourceusage = Initialize-Sourceusage  -Date Thu Apr 20 20:00:00 EDT 2023 `
 -Count 10.45
```

- Convert the resource to JSON
```powershell
$Sourceusage | ConvertTo-JSON
```


[[Back to top]](#) 

