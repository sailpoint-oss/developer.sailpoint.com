---
id: v2025-value
title: Value
pagination_label: Value
sidebar_label: Value
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Value', 'V2025Value'] 
slug: /tools/sdk/powershell/v2025/models/value
tags: ['SDK', 'Software Development Kit', 'Value', 'V2025Value']
---


# Value

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **String** | The type of attribute value | [optional] 
**Value** | **String** | The attribute value | [optional] 

## Examples

- Prepare the resource
```powershell
$Value = Initialize-PSSailpoint.V2025Value  -Type STRING `
 -Value Austin
```

- Convert the resource to JSON
```powershell
$Value | ConvertTo-JSON
```


[[Back to top]](#) 

