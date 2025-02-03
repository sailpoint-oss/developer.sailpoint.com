---
id: value
title: Value
pagination_label: Value
sidebar_label: Value
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Value', 'Value'] 
slug: /tools/sdk/powershell/v3/models/value
tags: ['SDK', 'Software Development Kit', 'Value', 'Value']
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
$Value = Initialize-PSSailpoint.V3Value  -Type STRING `
 -Value Austin
```

- Convert the resource to JSON
```powershell
$Value | ConvertTo-JSON
```


[[Back to top]](#) 

