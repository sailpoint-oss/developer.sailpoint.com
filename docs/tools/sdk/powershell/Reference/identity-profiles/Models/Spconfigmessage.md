---
id: spconfigmessage
title: Spconfigmessage
pagination_label: Spconfigmessage
sidebar_label: Spconfigmessage
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Spconfigmessage', 'Spconfigmessage'] 
slug: /tools/sdk/powershell/identityprofiles/models/spconfigmessage
tags: ['SDK', 'Software Development Kit', 'Spconfigmessage', 'Spconfigmessage']
---


# Spconfigmessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **String** | Message key. | [required]
**Text** | **String** | Message text. | [required]
**Details** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | Message details if any, in key:value pairs. | [required]

## Examples

- Prepare the resource
```powershell
$Spconfigmessage = Initialize-Spconfigmessage  -Key UNKNOWN_REFERENCE_RESOLVER `
 -Text Unable to resolve reference for object [type: IDENTITY, id: 2c91808c746e9c9601747d6507332ecz, name: random identity] `
 -Details {"details":"message details"}
```

- Convert the resource to JSON
```powershell
$Spconfigmessage | ConvertTo-JSON
```


[[Back to top]](#) 

