---
id: v2024-attribute-request
title: AttributeRequest
pagination_label: AttributeRequest
sidebar_label: AttributeRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AttributeRequest', 'V2024AttributeRequest'] 
slug: /tools/sdk/powershell/v2024/models/attribute-request
tags: ['SDK', 'Software Development Kit', 'AttributeRequest', 'V2024AttributeRequest']
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
$AttributeRequest = Initialize-PSSailpoint.V2024AttributeRequest  -Name groups `
 -Op Add `
 -Value 3203537556531076
```

- Convert the resource to JSON
```powershell
$AttributeRequest | ConvertTo-JSON
```


[[Back to top]](#) 

