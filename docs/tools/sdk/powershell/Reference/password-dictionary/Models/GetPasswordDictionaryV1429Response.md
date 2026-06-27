---
id: get-password-dictionary-v1429-response
title: GetPasswordDictionaryV1429Response
pagination_label: GetPasswordDictionaryV1429Response
sidebar_label: GetPasswordDictionaryV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetPasswordDictionaryV1429Response', 'GetPasswordDictionaryV1429Response'] 
slug: /tools/sdk/powershell/passworddictionary/models/get-password-dictionary-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetPasswordDictionaryV1429Response', 'GetPasswordDictionaryV1429Response']
---


# GetPasswordDictionaryV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetPasswordDictionaryV1429Response = Initialize-GetPasswordDictionaryV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetPasswordDictionaryV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

