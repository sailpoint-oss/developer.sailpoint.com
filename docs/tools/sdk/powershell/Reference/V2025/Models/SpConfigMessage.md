---
id: v2025-sp-config-message
title: SpConfigMessage
pagination_label: SpConfigMessage
sidebar_label: SpConfigMessage
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SpConfigMessage', 'V2025SpConfigMessage'] 
slug: /tools/sdk/powershell/v2025/models/sp-config-message
tags: ['SDK', 'Software Development Kit', 'SpConfigMessage', 'V2025SpConfigMessage']
---


# SpConfigMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **String** | Message key. | [required]
**Text** | **String** | Message text. | [required]
**Details** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | Message details if any, in key:value pairs. | [required]

## Examples

- Prepare the resource
```powershell
$SpConfigMessage = Initialize-V2025SpConfigMessage  -Key UNKNOWN_REFERENCE_RESOLVER `
 -Text Unable to resolve reference for object [type: IDENTITY, id: 2c91808c746e9c9601747d6507332ecz, name: random identity] `
 -Details {details=message details}
```

- Convert the resource to JSON
```powershell
$SpConfigMessage | ConvertTo-JSON
```


[[Back to top]](#) 

