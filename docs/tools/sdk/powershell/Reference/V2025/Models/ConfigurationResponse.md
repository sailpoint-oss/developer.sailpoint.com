---
id: v2025-configuration-response
title: ConfigurationResponse
pagination_label: ConfigurationResponse
sidebar_label: ConfigurationResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ConfigurationResponse', 'V2025ConfigurationResponse'] 
slug: /tools/sdk/powershell/v2025/models/configuration-response
tags: ['SDK', 'Software Development Kit', 'ConfigurationResponse', 'V2025ConfigurationResponse']
---


# ConfigurationResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** | [**Identity1**](identity1) |  | [optional] 
**ConfigDetails** | [**[]ConfigurationDetailsResponse**](configuration-details-response) | Details of how work should be reassigned for an Identity | [optional] 

## Examples

- Prepare the resource
```powershell
$ConfigurationResponse = Initialize-PSSailpoint.V2025ConfigurationResponse  -Identity null `
 -ConfigDetails null
```

- Convert the resource to JSON
```powershell
$ConfigurationResponse | ConvertTo-JSON
```


[[Back to top]](#) 

