---
id: form-element
title: FormElement
pagination_label: FormElement
sidebar_label: FormElement
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'FormElement'] 
slug: /tools/sdk/powershell/beta/models/form-element
tags: ['SDK', 'Software Development Kit', 'FormElement']
---


# FormElement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Form element identifier. | [optional] 
**ElementType** |  Pointer to  **Enum** [  "TEXT",    "TOGGLE",    "TEXTAREA",    "HIDDEN",    "PHONE",    "EMAIL",    "SELECT",    "DATE",    "SECTION",    "COLUMNS" ] | FormElementType value.  TEXT FormElementTypeText TOGGLE FormElementTypeToggle TEXTAREA FormElementTypeTextArea HIDDEN FormElementTypeHidden PHONE FormElementTypePhone EMAIL FormElementTypeEmail SELECT FormElementTypeSelect DATE FormElementTypeDate SECTION FormElementTypeSection COLUMNS FormElementTypeColumns | [optional] 
**Config** |  Pointer to [**map[string]SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-8.0 | Config object. | [optional] 
**Key** |  Pointer to **String** | Technical key. | [optional] 
**Validations** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-8.0 | Set of FormElementValidation items. | [optional] 

## Examples

- Prepare the resource
```powershell
$FormElement = Initialize-BetaFormElement  -Id 00000000-0000-0000-0000-000000000000 `
 -ElementType TEXT `
 -Config {label=Department} `
 -Key department `
 -Validations [{validationType=REQUIRED}]
```

- Convert the resource to JSON
```powershell
$FormElement | ConvertTo-JSON
```


[[Back to top]](#) 

