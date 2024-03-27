---
id: put-password-dictionary-request
title: PutPasswordDictionaryRequest
pagination_label: PutPasswordDictionaryRequest
sidebar_label: PutPasswordDictionaryRequest
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'PutPasswordDictionaryRequest'] 
slug: /tools/sdk/powershell/beta/models/put-password-dictionary-request
tags: ['SDK', 'Software Development Kit', 'PutPasswordDictionaryRequest']
---


# PutPasswordDictionaryRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** |  Pointer to **System.IO.FileInfo** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$PutPasswordDictionaryRequest = Initialize-PSSailpointBetaPutPasswordDictionaryRequest  -File null
```

- Convert the resource to JSON
```powershell
$PutPasswordDictionaryRequest | ConvertTo-JSON
```


[[Back to top]](#) 

