---
id: attribute-request
title: AttributeRequest
pagination_label: AttributeRequest
sidebar_label: AttributeRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AttributeRequest', 'AttributeRequest'] 
slug: /tools/sdk/powershell/v3/models/attribute-request
tags: ['SDK', 'Software Development Kit', 'AttributeRequest', 'AttributeRequest']
---


# AttributeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Attribute name. | [optional] 
**Op** | **String** | Operation to perform on attribute. | [optional] 
**Value** | **String** | Value of attribute. | [optional] 

## Examples

- Prepare the resource
```powershell
$AttributeRequest = Initialize-PSSailpoint.V3AttributeRequest  -Name groups `
 -Op Add `
 -Value 3203537556531076
```

- Convert the resource to JSON
```powershell
$AttributeRequest | ConvertTo-JSON
```


[[Back to top]](#) 

