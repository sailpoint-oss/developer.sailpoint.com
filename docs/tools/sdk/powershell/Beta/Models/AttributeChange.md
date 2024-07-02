---
id: attribute-change
title: AttributeChange
pagination_label: AttributeChange
sidebar_label: AttributeChange
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AttributeChange'] 
slug: /tools/sdk/powershell/beta/models/attribute-change
tags: ['SDK', 'Software Development Kit', 'AttributeChange']
---


# AttributeChange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  Pointer to **String** | the attribute name | [optional] 
**PreviousValue** |  Pointer to **String** | the old value of attribute | [optional] 
**NewValue** |  Pointer to **String** | the new value of attribute | [optional] 

## Examples

- Prepare the resource
```powershell
$AttributeChange = Initialize-BetaAttributeChange  -Name null `
 -PreviousValue null `
 -NewValue null
```

- Convert the resource to JSON
```powershell
$AttributeChange | ConvertTo-JSON
```


[[Back to top]](#) 

