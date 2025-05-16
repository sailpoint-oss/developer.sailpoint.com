---
id: beta-sp-config-message
title: SpConfigMessage
pagination_label: SpConfigMessage
sidebar_label: SpConfigMessage
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SpConfigMessage', 'BetaSpConfigMessage'] 
slug: /tools/sdk/powershell/beta/models/sp-config-message
tags: ['SDK', 'Software Development Kit', 'SpConfigMessage', 'BetaSpConfigMessage']
---


# SpConfigMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **String** | Message key. | [required]
**Text** | **String** | Message text. | [required]
**Details** | [**map[string]SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Message details if any, in key:value pairs. | [required]

## Examples

- Prepare the resource
```powershell
$SpConfigMessage = Initialize-BetaSpConfigMessage  -Key UNKNOWN_REFERENCE_RESOLVER `
 -Text Unable to resolve reference for object [type: IDENTITY, id: 2c91808c746e9c9601747d6507332ecz, name: random identity] `
 -Details {details=message details}
```

- Convert the resource to JSON
```powershell
$SpConfigMessage | ConvertTo-JSON
```


[[Back to top]](#) 

