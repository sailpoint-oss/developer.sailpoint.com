---
id: put-password-dictionary-request
title: PutPasswordDictionaryRequest
pagination_label: PutPasswordDictionaryRequest
sidebar_label: PutPasswordDictionaryRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PutPasswordDictionaryRequest', 'PutPasswordDictionaryRequest'] 
slug: /tools/sdk/powershell/v3/models/put-password-dictionary-request
tags: ['SDK', 'Software Development Kit', 'PutPasswordDictionaryRequest', 'PutPasswordDictionaryRequest']
---


# PutPasswordDictionaryRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** | **System.IO.FileInfo** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$PutPasswordDictionaryRequest = Initialize-PSSailpoint.V3PutPasswordDictionaryRequest  -File null
```

- Convert the resource to JSON
```powershell
$PutPasswordDictionaryRequest | ConvertTo-JSON
```


[[Back to top]](#) 

