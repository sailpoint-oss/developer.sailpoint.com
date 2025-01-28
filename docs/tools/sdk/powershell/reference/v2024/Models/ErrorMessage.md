---
id: v2024-error-message
title: ErrorMessage
pagination_label: ErrorMessage
sidebar_label: ErrorMessage
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ErrorMessage'] 
slug: /tools/sdk/powershell/v2024/models/error-message
tags: ['SDK', 'Software Development Kit', 'ErrorMessage']
---


# ErrorMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Locale** |  Pointer to **String** | Locale is the current Locale | [optional] 
**LocaleOrigin** |  Pointer to **String** | LocaleOrigin holds possible values of how the locale was selected | [optional] 
**Text** |  Pointer to **String** | Text is the actual text of the error message | [optional] 

## Examples

- Prepare the resource
```powershell
$ErrorMessage = Initialize-PSSailpoint.V2024ErrorMessage  -Locale en-US `
 -LocaleOrigin DEFAULT `
 -Text This is an error
```

- Convert the resource to JSON
```powershell
$ErrorMessage | ConvertTo-JSON
```


[[Back to top]](#) 

