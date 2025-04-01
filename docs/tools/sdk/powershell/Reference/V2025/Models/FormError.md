---
id: v2025-form-error
title: FormError
pagination_label: FormError
sidebar_label: FormError
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'FormError', 'V2025FormError'] 
slug: /tools/sdk/powershell/v2025/models/form-error
tags: ['SDK', 'Software Development Kit', 'FormError', 'V2025FormError']
---


# FormError

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **String** | Key is the technical key | [optional] 
**Messages** | [**[]ErrorMessage**](error-message) | Messages is a list of web.ErrorMessage items | [optional] 
**Value** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Value is the value associated with a Key | [optional] 

## Examples

- Prepare the resource
```powershell
$FormError = Initialize-PSSailpoint.V2025FormError  -Key department `
 -Messages null `
 -Value Engineering
```

- Convert the resource to JSON
```powershell
$FormError | ConvertTo-JSON
```


[[Back to top]](#) 

