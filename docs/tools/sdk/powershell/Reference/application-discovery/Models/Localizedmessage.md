---
id: localizedmessage
title: Localizedmessage
pagination_label: Localizedmessage
sidebar_label: Localizedmessage
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Localizedmessage', 'Localizedmessage'] 
slug: /tools/sdk/powershell/applicationdiscovery/models/localizedmessage
tags: ['SDK', 'Software Development Kit', 'Localizedmessage', 'Localizedmessage']
---


# Localizedmessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Locale** | **String** | Message locale | [required]
**Message** | **String** | Message text | [required]

## Examples

- Prepare the resource
```powershell
$Localizedmessage = Initialize-Localizedmessage  -Locale An error has occurred! `
 -Message Error has occurred!
```

- Convert the resource to JSON
```powershell
$Localizedmessage | ConvertTo-JSON
```


[[Back to top]](#) 

