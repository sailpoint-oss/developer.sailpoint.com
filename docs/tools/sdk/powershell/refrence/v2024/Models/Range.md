---
id: range
title: Range
pagination_label: Range
sidebar_label: Range
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Range'] 
slug: /tools/sdk/powershell/v2024/models/range
tags: ['SDK', 'Software Development Kit', 'Range']
---


# Range

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Lower** |  Pointer to [**Bound**](bound) |  | [optional] 
**Upper** |  Pointer to [**Bound**](bound) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Range = Initialize-PSSailpoint.V2024Range  -Lower null `
 -Upper null
```

- Convert the resource to JSON
```powershell
$Range | ConvertTo-JSON
```


[[Back to top]](#) 

