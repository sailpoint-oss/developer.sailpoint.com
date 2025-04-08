---
id: v2025-error-response-dto1
title: ErrorResponseDto1
pagination_label: ErrorResponseDto1
sidebar_label: ErrorResponseDto1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ErrorResponseDto1', 'V2025ErrorResponseDto1'] 
slug: /tools/sdk/powershell/v2025/models/error-response-dto1
tags: ['SDK', 'Software Development Kit', 'ErrorResponseDto1', 'V2025ErrorResponseDto1']
---


# ErrorResponseDto1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DetailCode** | **String** | Fine-grained error code providing more detail of the error. | [optional] 
**TrackingId** | **String** | Unique tracking id for the error. | [optional] 
**Messages** | [**[]ErrorMessageDto1**](error-message-dto1) | Generic localized reason for error | [optional] 
**Causes** | [**[]ErrorMessageDto1**](error-message-dto1) | Plain-text descriptive reasons to provide additional detail to the text provided in the messages field | [optional] 

## Examples

- Prepare the resource
```powershell
$ErrorResponseDto1 = Initialize-PSSailpoint.V2025ErrorResponseDto1  -DetailCode 400.1 Bad Request Content `
 -TrackingId e7eab60924f64aa284175b9fa3309599 `
 -Messages null `
 -Causes null
```

- Convert the resource to JSON
```powershell
$ErrorResponseDto1 | ConvertTo-JSON
```


[[Back to top]](#) 

