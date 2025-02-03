---
id: v2024-put-password-dictionary-request
title: PutPasswordDictionaryRequest
pagination_label: PutPasswordDictionaryRequest
sidebar_label: PutPasswordDictionaryRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PutPasswordDictionaryRequest', 'V2024PutPasswordDictionaryRequest'] 
slug: /tools/sdk/powershell/v2024/models/put-password-dictionary-request
tags: ['SDK', 'Software Development Kit', 'PutPasswordDictionaryRequest', 'V2024PutPasswordDictionaryRequest']
---


# PutPasswordDictionaryRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** | **System.IO.FileInfo** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$PutPasswordDictionaryRequest = Initialize-PSSailpoint.V2024PutPasswordDictionaryRequest  -File null
```

- Convert the resource to JSON
```powershell
$PutPasswordDictionaryRequest | ConvertTo-JSON
```


[[Back to top]](#) 

