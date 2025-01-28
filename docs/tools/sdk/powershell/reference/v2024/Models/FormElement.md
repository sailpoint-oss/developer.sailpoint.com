---
id: v2024-form-element
title: FormElement
pagination_label: FormElement
sidebar_label: FormElement
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'FormElement', 'V2024FormElement'] 
slug: /tools/sdk/powershell/v2024/models/form-element
tags: ['SDK', 'Software Development Kit', 'FormElement', 'V2024FormElement']
---


# FormElement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Form element identifier. | [optional] 
**ElementType** |  Pointer to  **Enum** [  "TEXT",    "TOGGLE",    "TEXTAREA",    "HIDDEN",    "PHONE",    "EMAIL",    "SELECT",    "DATE",    "SECTION",    "COLUMN_SET",    "IMAGE",    "DESCRIPTION" ] | FormElementType value.  TEXT FormElementTypeText TOGGLE FormElementTypeToggle TEXTAREA FormElementTypeTextArea HIDDEN FormElementTypeHidden PHONE FormElementTypePhone EMAIL FormElementTypeEmail SELECT FormElementTypeSelect DATE FormElementTypeDate SECTION FormElementTypeSection COLUMN_SET FormElementTypeColumns IMAGE FormElementTypeImage DESCRIPTION FormElementTypeDescription | [optional] 
**Config** |  Pointer to [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | Config object. | [optional] 
**Key** |  Pointer to **String** | Technical key. | [optional] 
**Validations** |  Pointer to [**[]FormElementValidationsSet**](form-element-validations-set) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$FormElement = Initialize-PSSailpoint.V2024FormElement  -Id 00000000-0000-0000-0000-000000000000 `
 -ElementType TEXT `
 -Config {label&#x3D;Department} `
 -Key department `
 -Validations null
```

- Convert the resource to JSON
```powershell
$FormElement | ConvertTo-JSON
```


[[Back to top]](#) 

