---
id: sourceitemref
title: Sourceitemref
pagination_label: Sourceitemref
sidebar_label: Sourceitemref
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Sourceitemref', 'Sourceitemref'] 
slug: /tools/sdk/powershell/accessrequests/models/sourceitemref
tags: ['SDK', 'Software Development Kit', 'Sourceitemref', 'Sourceitemref']
---


# Sourceitemref

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceId** | **String** | The id for the source on which account selections are made | [optional] 
**Accounts** | [**[]Accountitemref**](accountitemref) | A list of account selections on the source. Currently, only one selection per source is supported. | [optional] 

## Examples

- Prepare the resource
```powershell
$Sourceitemref = Initialize-Sourceitemref  -SourceId cb89bc2f1ee6445fbea12224c526ba3a `
 -Accounts null
```

- Convert the resource to JSON
```powershell
$Sourceitemref | ConvertTo-JSON
```


[[Back to top]](#) 

