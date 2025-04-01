---
id: v2025-range
title: Range
pagination_label: Range
sidebar_label: Range
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Range', 'V2025Range'] 
slug: /tools/sdk/powershell/v2025/models/range
tags: ['SDK', 'Software Development Kit', 'Range', 'V2025Range']
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
$Range = Initialize-PSSailpoint.V2025Range  -Lower null `
 -Upper null
```

- Convert the resource to JSON
```powershell
$Range | ConvertTo-JSON
```


[[Back to top]](#) 

