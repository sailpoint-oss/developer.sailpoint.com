---
id: attribute-request
title: AttributeRequest
pagination_label: AttributeRequest
sidebar_label: AttributeRequest
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AttributeRequest'] 
slug: /tools/sdk/powershell/v3/models/attribute-request
tags: ['SDK', 'Software Development Kit', 'AttributeRequest']
---


# AttributeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  Pointer to **String** | Attribute name. | [optional] 
**Op** |  Pointer to **String** | Operation to perform on attribute. | [optional] 
**Value** |  Pointer to **String** | Value of attribute. | [optional] 

## Examples

- Prepare the resource
```powershell
$AttributeRequest = Initialize-AttributeRequest  -Name groups `
 -Op Add `
 -Value 3203537556531076
```

- Convert the resource to JSON
```powershell
$AttributeRequest | ConvertTo-JSON
```


[[Back to top]](#) 

