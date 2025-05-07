---
id: v2025-localized-message
title: LocalizedMessage
pagination_label: LocalizedMessage
sidebar_label: LocalizedMessage
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LocalizedMessage', 'V2025LocalizedMessage'] 
slug: /tools/sdk/powershell/v2025/models/localized-message
tags: ['SDK', 'Software Development Kit', 'LocalizedMessage', 'V2025LocalizedMessage']
---


# LocalizedMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Locale** | **String** | Message locale | [required]
**Message** | **String** | Message text | [required]

## Examples

- Prepare the resource
```powershell
$LocalizedMessage = Initialize-V2025LocalizedMessage  -Locale An error has occurred! `
 -Message Error has occurred!
```

- Convert the resource to JSON
```powershell
$LocalizedMessage | ConvertTo-JSON
```


[[Back to top]](#) 

