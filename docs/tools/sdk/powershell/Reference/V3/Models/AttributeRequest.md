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
**Value** | [**AttributeRequestValue**](attribute-request-value) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AttributeRequest = Initialize-AttributeRequest  -Name groups `
 -Op Add `
 -Value null
```

- Convert the resource to JSON
```powershell
$AttributeRequest | ConvertTo-JSON
```


[[Back to top]](#) 

