---
id: v2025-error-response-dto
title: ErrorResponseDto
pagination_label: ErrorResponseDto
sidebar_label: ErrorResponseDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ErrorResponseDto', 'V2025ErrorResponseDto'] 
slug: /tools/sdk/powershell/v2025/models/error-response-dto
tags: ['SDK', 'Software Development Kit', 'ErrorResponseDto', 'V2025ErrorResponseDto']
---


# ErrorResponseDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DetailCode** | **String** | Fine-grained error code providing more detail of the error. | [optional] 
**TrackingId** | **String** | Unique tracking id for the error. | [optional] 
**Messages** | [**[]ErrorMessageDto**](error-message-dto) | Generic localized reason for error | [optional] 
**Causes** | [**[]ErrorMessageDto**](error-message-dto) | Plain-text descriptive reasons to provide additional detail to the text provided in the messages field | [optional] 

## Examples

- Prepare the resource
```powershell
$ErrorResponseDto = Initialize-PSSailpoint.V2025ErrorResponseDto  -DetailCode 400.1 Bad Request Content `
 -TrackingId e7eab60924f64aa284175b9fa3309599 `
 -Messages null `
 -Causes null
```

- Convert the resource to JSON
```powershell
$ErrorResponseDto | ConvertTo-JSON
```


[[Back to top]](#) 

