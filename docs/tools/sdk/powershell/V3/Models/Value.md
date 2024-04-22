---
id: value
title: Value
pagination_label: Value
sidebar_label: Value
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'Value'] 
slug: /tools/sdk/powershell/v3/models/value
tags: ['SDK', 'Software Development Kit', 'Value']
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
$Value = Initialize-Value  -Type STRING `
 -Value Austin
```

- Convert the resource to JSON
```powershell
$Value | ConvertTo-JSON
```


[[Back to top]](#) 

