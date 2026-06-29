---
id: formerror
title: Formerror
pagination_label: Formerror
sidebar_label: Formerror
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Formerror', 'Formerror'] 
slug: /tools/sdk/powershell/customforms/models/formerror
tags: ['SDK', 'Software Development Kit', 'Formerror', 'Formerror']
---


# Formerror

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **String** | Key is the technical key | [optional] 
**Messages** | [**[]Errormessage**](errormessage) | Messages is a list of web.ErrorMessage items | [optional] 
**Value** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | Value is the value associated with a Key | [optional] 

## Examples

- Prepare the resource
```powershell
$Formerror = Initialize-Formerror  -Key department `
 -Messages null `
 -Value Engineering
```

- Convert the resource to JSON
```powershell
$Formerror | ConvertTo-JSON
```


[[Back to top]](#) 

