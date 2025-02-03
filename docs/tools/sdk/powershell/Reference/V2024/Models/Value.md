---
id: v2024-value
title: Value
pagination_label: Value
sidebar_label: Value
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Value', 'V2024Value'] 
slug: /tools/sdk/powershell/v2024/models/value
tags: ['SDK', 'Software Development Kit', 'Value', 'V2024Value']
---


# Value

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to **String** | The type of attribute value | [optional] 
**Value** |  Pointer to **String** | The attribute value | [optional] 

## Examples

- Prepare the resource
```powershell
$Value = Initialize-PSSailpoint.V2024Value  -Type STRING `
 -Value Austin
```

- Convert the resource to JSON
```powershell
$Value | ConvertTo-JSON
```


[[Back to top]](#) 

