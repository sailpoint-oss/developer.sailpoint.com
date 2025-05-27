---
id: v2025-attribute-request
title: AttributeRequest
pagination_label: AttributeRequest
sidebar_label: AttributeRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AttributeRequest', 'V2025AttributeRequest'] 
slug: /tools/sdk/powershell/v2025/models/attribute-request
tags: ['SDK', 'Software Development Kit', 'AttributeRequest', 'V2025AttributeRequest']
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
$AttributeRequest = Initialize-V2025AttributeRequest  -Name groups `
 -Op Add `
 -Value null
```

- Convert the resource to JSON
```powershell
$AttributeRequest | ConvertTo-JSON
```


[[Back to top]](#) 

