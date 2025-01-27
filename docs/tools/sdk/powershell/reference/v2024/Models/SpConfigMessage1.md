---
id: v2024-sp-config-message1
title: SpConfigMessage1
pagination_label: SpConfigMessage1
sidebar_label: SpConfigMessage1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SpConfigMessage1'] 
slug: /tools/sdk/powershell/v2024/models/sp-config-message1
tags: ['SDK', 'Software Development Kit', 'SpConfigMessage1']
---


# SpConfigMessage1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** |  **String** | Message key. | [required]
**Text** |  **String** | Message text. | [required]
**Details** |  [**map[string]SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Message details if any, in key:value pairs. | [required]

## Examples

- Prepare the resource
```powershell
$SpConfigMessage1 = Initialize-PSSailpoint.V2024SpConfigMessage1  -Key UNKNOWN_REFERENCE_RESOLVER `
 -Text Unable to resolve reference for object [type: IDENTITY, id: 2c91808c746e9c9601747d6507332ecz, name: random identity] `
 -Details {details&#x3D;message details}
```

- Convert the resource to JSON
```powershell
$SpConfigMessage1 | ConvertTo-JSON
```


[[Back to top]](#) 

