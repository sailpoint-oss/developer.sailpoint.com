---
id: formelement
title: Formelement
pagination_label: Formelement
sidebar_label: Formelement
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Formelement', 'Formelement'] 
slug: /tools/sdk/powershell/customforms/models/formelement
tags: ['SDK', 'Software Development Kit', 'Formelement', 'Formelement']
---


# Formelement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Form element identifier. | [optional] 
**ElementType** |  **Enum** [  "TEXT",    "TOGGLE",    "TEXTAREA",    "HIDDEN",    "PHONE",    "EMAIL",    "SELECT",    "DATE",    "SECTION",    "COLUMN_SET",    "IMAGE",    "DESCRIPTION" ] | FormElementType value.  TEXT FormElementTypeText TOGGLE FormElementTypeToggle TEXTAREA FormElementTypeTextArea HIDDEN FormElementTypeHidden PHONE FormElementTypePhone EMAIL FormElementTypeEmail SELECT FormElementTypeSelect DATE FormElementTypeDate SECTION FormElementTypeSection COLUMN_SET FormElementTypeColumns IMAGE FormElementTypeImage DESCRIPTION FormElementTypeDescription | [optional] 
**Config** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | Config object. | [optional] 
**Key** | **String** | Technical key. | [optional] 
**Validations** | [**[]Formelementvalidationsset**](formelementvalidationsset) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Formelement = Initialize-Formelement  -Id 00000000-0000-0000-0000-000000000000 `
 -ElementType TEXT `
 -Config {"label":"Department"} `
 -Key department `
 -Validations null
```

- Convert the resource to JSON
```powershell
$Formelement | ConvertTo-JSON
```


[[Back to top]](#) 

