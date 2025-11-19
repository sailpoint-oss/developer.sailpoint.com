---
id: v2025-error-message-dto1
title: ErrorMessageDto1
pagination_label: ErrorMessageDto1
sidebar_label: ErrorMessageDto1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ErrorMessageDto1', 'V2025ErrorMessageDto1'] 
slug: /tools/sdk/powershell/v2025/models/error-message-dto1
tags: ['SDK', 'Software Development Kit', 'ErrorMessageDto1', 'V2025ErrorMessageDto1']
---


# ErrorMessageDto1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Locale** | **String** | The locale for the message text, a BCP 47 language tag. | [optional] 
**LocaleOrigin** | [**LocaleOrigin**](locale-origin) |  | [optional] 
**Text** | **String** | Actual text of the error message in the indicated locale. | [optional] 

## Examples

- Prepare the resource
```powershell
$ErrorMessageDto1 = Initialize-V2025ErrorMessageDto1  -Locale en-US `
 -LocaleOrigin null `
 -Text The request was syntactically correct but its content is semantically invalid.
```

- Convert the resource to JSON
```powershell
$ErrorMessageDto1 | ConvertTo-JSON
```


[[Back to top]](#) 

