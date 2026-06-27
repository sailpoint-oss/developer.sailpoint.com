---
id: get-password-dictionary-v1401-response
title: GetPasswordDictionaryV1401Response
pagination_label: GetPasswordDictionaryV1401Response
sidebar_label: GetPasswordDictionaryV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetPasswordDictionaryV1401Response', 'GetPasswordDictionaryV1401Response'] 
slug: /tools/sdk/powershell/passworddictionary/models/get-password-dictionary-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetPasswordDictionaryV1401Response', 'GetPasswordDictionaryV1401Response']
---


# GetPasswordDictionaryV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetPasswordDictionaryV1401Response = Initialize-GetPasswordDictionaryV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetPasswordDictionaryV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

