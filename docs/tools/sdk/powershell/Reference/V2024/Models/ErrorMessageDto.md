---
id: v2024-error-message-dto
title: ErrorMessageDto
pagination_label: ErrorMessageDto
sidebar_label: ErrorMessageDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ErrorMessageDto', 'V2024ErrorMessageDto'] 
slug: /tools/sdk/powershell/v2024/models/error-message-dto
tags: ['SDK', 'Software Development Kit', 'ErrorMessageDto', 'V2024ErrorMessageDto']
---


# ErrorMessageDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Locale** | **String** | The locale for the message text, a BCP 47 language tag. | [optional] 
**LocaleOrigin** | [**LocaleOrigin**](locale-origin) |  | [optional] 
**Text** | **String** | Actual text of the error message in the indicated locale. | [optional] 

## Examples

- Prepare the resource
```powershell
$ErrorMessageDto = Initialize-V2024ErrorMessageDto  -Locale en-US `
 -LocaleOrigin null `
 -Text The request was syntactically correct but its content is semantically invalid.
```

- Convert the resource to JSON
```powershell
$ErrorMessageDto | ConvertTo-JSON
```


[[Back to top]](#) 

