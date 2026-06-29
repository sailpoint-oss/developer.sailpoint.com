---
id: errormessagedto
title: Errormessagedto
pagination_label: Errormessagedto
sidebar_label: Errormessagedto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Errormessagedto', 'Errormessagedto'] 
slug: /tools/sdk/powershell/tags/models/errormessagedto
tags: ['SDK', 'Software Development Kit', 'Errormessagedto', 'Errormessagedto']
---


# Errormessagedto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Locale** | **String** | The locale for the message text, a BCP 47 language tag. | [optional] 
**LocaleOrigin** | [**Localeorigin**](localeorigin) |  | [optional] 
**Text** | **String** | Actual text of the error message in the indicated locale. | [optional] 

## Examples

- Prepare the resource
```powershell
$Errormessagedto = Initialize-Errormessagedto  -Locale en-US `
 -LocaleOrigin null `
 -Text The request was syntactically correct but its content is semantically invalid.
```

- Convert the resource to JSON
```powershell
$Errormessagedto | ConvertTo-JSON
```


[[Back to top]](#) 

