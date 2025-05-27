---
id: v2024-configuration-item-response
title: ConfigurationItemResponse
pagination_label: ConfigurationItemResponse
sidebar_label: ConfigurationItemResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ConfigurationItemResponse', 'V2024ConfigurationItemResponse'] 
slug: /tools/sdk/powershell/v2024/models/configuration-item-response
tags: ['SDK', 'Software Development Kit', 'ConfigurationItemResponse', 'V2024ConfigurationItemResponse']
---


# ConfigurationItemResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** | [**Identity1**](identity1) |  | [optional] 
**ConfigDetails** | [**[]ConfigurationDetailsResponse**](configuration-details-response) | Details of how work should be reassigned for an Identity | [optional] 

## Examples

- Prepare the resource
```powershell
$ConfigurationItemResponse = Initialize-V2024ConfigurationItemResponse  -Identity null `
 -ConfigDetails null
```

- Convert the resource to JSON
```powershell
$ConfigurationItemResponse | ConvertTo-JSON
```


[[Back to top]](#) 

