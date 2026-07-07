---
id: errormessage
title: Errormessage
pagination_label: Errormessage
sidebar_label: Errormessage
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Errormessage', 'Errormessage'] 
slug: /tools/sdk/powershell/customforms/models/errormessage
tags: ['SDK', 'Software Development Kit', 'Errormessage', 'Errormessage']
---


# Errormessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Locale** | **String** | Locale is the current Locale | [optional] 
**LocaleOrigin** | **String** | LocaleOrigin holds possible values of how the locale was selected | [optional] 
**Text** | **String** | Text is the actual text of the error message | [optional] 

## Examples

- Prepare the resource
```powershell
$Errormessage = Initialize-Errormessage  -Locale en-US `
 -LocaleOrigin DEFAULT `
 -Text This is an error
```

- Convert the resource to JSON
```powershell
$Errormessage | ConvertTo-JSON
```


[[Back to top]](#) 

