---
id: v2025-attribute-change
title: AttributeChange
pagination_label: AttributeChange
sidebar_label: AttributeChange
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AttributeChange', 'V2025AttributeChange'] 
slug: /tools/sdk/powershell/v2025/models/attribute-change
tags: ['SDK', 'Software Development Kit', 'AttributeChange', 'V2025AttributeChange']
---


# AttributeChange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | the attribute name | [optional] 
**PreviousValue** | **String** | the old value of attribute | [optional] 
**NewValue** | **String** | the new value of attribute | [optional] 

## Examples

- Prepare the resource
```powershell
$AttributeChange = Initialize-V2025AttributeChange  -Name null `
 -PreviousValue null `
 -NewValue null
```

- Convert the resource to JSON
```powershell
$AttributeChange | ConvertTo-JSON
```


[[Back to top]](#) 

