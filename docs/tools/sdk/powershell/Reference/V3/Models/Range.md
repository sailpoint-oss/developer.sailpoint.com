---
id: range
title: Range
pagination_label: Range
sidebar_label: Range
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Range', 'Range'] 
slug: /tools/sdk/powershell/v3/models/range
tags: ['SDK', 'Software Development Kit', 'Range', 'Range']
---


# Range

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Lower** | [**Bound**](bound) |  | [optional] 
**Upper** | [**Bound**](bound) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Range = Initialize-PSSailpoint.V3Range  -Lower null `
 -Upper null
```

- Convert the resource to JSON
```powershell
$Range | ConvertTo-JSON
```


[[Back to top]](#) 

