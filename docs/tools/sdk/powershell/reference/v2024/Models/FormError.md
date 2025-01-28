---
id: v2024-form-error
title: FormError
pagination_label: FormError
sidebar_label: FormError
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'FormError', 'V2024FormError'] 
slug: /tools/sdk/powershell/v2024/models/form-error
tags: ['SDK', 'Software Development Kit', 'FormError', 'V2024FormError']
---


# FormError

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** |  Pointer to **String** | Key is the technical key | [optional] 
**Messages** |  Pointer to [**[]ErrorMessage**](error-message) | Messages is a list of web.ErrorMessage items | [optional] 
**Value** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Value is the value associated with a Key | [optional] 

## Examples

- Prepare the resource
```powershell
$FormError = Initialize-PSSailpoint.V2024FormError  -Key department `
 -Messages null `
 -Value Engineering
```

- Convert the resource to JSON
```powershell
$FormError | ConvertTo-JSON
```


[[Back to top]](#) 

