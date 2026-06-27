---
id: spconfigmessage2
title: Spconfigmessage2
pagination_label: Spconfigmessage2
sidebar_label: Spconfigmessage2
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Spconfigmessage2', 'Spconfigmessage2'] 
slug: /tools/sdk/powershell/spconfig/models/spconfigmessage2
tags: ['SDK', 'Software Development Kit', 'Spconfigmessage2', 'Spconfigmessage2']
---


# Spconfigmessage2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **String** | Message key. | [required]
**Text** | **String** | Message text. | [required]
**Details** | [**map[string]SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Message details if any, in key:value pairs. | [required]

## Examples

- Prepare the resource
```powershell
$Spconfigmessage2 = Initialize-Spconfigmessage2  -Key UNKNOWN_REFERENCE_RESOLVER `
 -Text Unable to resolve reference for object [type: IDENTITY, id: 2c91808c746e9c9601747d6507332ecz, name: random identity] `
 -Details {"details":"message details"}
```

- Convert the resource to JSON
```powershell
$Spconfigmessage2 | ConvertTo-JSON
```


[[Back to top]](#) 

