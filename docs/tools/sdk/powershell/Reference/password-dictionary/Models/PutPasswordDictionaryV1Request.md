---
id: put-password-dictionary-v1-request
title: PutPasswordDictionaryV1Request
pagination_label: PutPasswordDictionaryV1Request
sidebar_label: PutPasswordDictionaryV1Request
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PutPasswordDictionaryV1Request', 'PutPasswordDictionaryV1Request'] 
slug: /tools/sdk/powershell/passworddictionary/models/put-password-dictionary-v1-request
tags: ['SDK', 'Software Development Kit', 'PutPasswordDictionaryV1Request', 'PutPasswordDictionaryV1Request']
---


# PutPasswordDictionaryV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** | **System.IO.FileInfo** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$PutPasswordDictionaryV1Request = Initialize-PutPasswordDictionaryV1Request  -File null
```

- Convert the resource to JSON
```powershell
$PutPasswordDictionaryV1Request | ConvertTo-JSON
```


[[Back to top]](#) 

