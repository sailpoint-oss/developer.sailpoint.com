---
id: v2025-form-element
title: FormElement
pagination_label: FormElement
sidebar_label: FormElement
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'FormElement', 'V2025FormElement'] 
slug: /tools/sdk/powershell/v2025/models/form-element
tags: ['SDK', 'Software Development Kit', 'FormElement', 'V2025FormElement']
---


# FormElement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Form element identifier. | [optional] 
**ElementType** |  **Enum** [  "TEXT",    "TOGGLE",    "TEXTAREA",    "HIDDEN",    "PHONE",    "EMAIL",    "SELECT",    "DATE",    "SECTION",    "COLUMN_SET",    "IMAGE",    "DESCRIPTION" ] | FormElementType value.  TEXT FormElementTypeText TOGGLE FormElementTypeToggle TEXTAREA FormElementTypeTextArea HIDDEN FormElementTypeHidden PHONE FormElementTypePhone EMAIL FormElementTypeEmail SELECT FormElementTypeSelect DATE FormElementTypeDate SECTION FormElementTypeSection COLUMN_SET FormElementTypeColumns IMAGE FormElementTypeImage DESCRIPTION FormElementTypeDescription | [optional] 
**Config** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | Config object. | [optional] 
**Key** | **String** | Technical key. | [optional] 
**Validations** | [**[]FormElementValidationsSet**](form-element-validations-set) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$FormElement = Initialize-PSSailpoint.V2025FormElement  -Id 00000000-0000-0000-0000-000000000000 `
 -ElementType TEXT `
 -Config {label=Department} `
 -Key department `
 -Validations null
```

- Convert the resource to JSON
```powershell
$FormElement | ConvertTo-JSON
```


[[Back to top]](#) 

