---
id: v2025-error-message
title: ErrorMessage
pagination_label: ErrorMessage
sidebar_label: ErrorMessage
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ErrorMessage', 'V2025ErrorMessage'] 
slug: /tools/sdk/powershell/v2025/models/error-message
tags: ['SDK', 'Software Development Kit', 'ErrorMessage', 'V2025ErrorMessage']
---


# ErrorMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Locale** | **String** | Locale is the current Locale | [optional] 
**LocaleOrigin** | **String** | LocaleOrigin holds possible values of how the locale was selected | [optional] 
**Text** | **String** | Text is the actual text of the error message | [optional] 

## Examples

- Prepare the resource
```powershell
$ErrorMessage = Initialize-V2025ErrorMessage  -Locale en-US `
 -LocaleOrigin DEFAULT `
 -Text This is an error
```

- Convert the resource to JSON
```powershell
$ErrorMessage | ConvertTo-JSON
```


[[Back to top]](#) 

