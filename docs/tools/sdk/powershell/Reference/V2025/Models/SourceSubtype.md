---
id: v2025-source-subtype
title: SourceSubtype
pagination_label: SourceSubtype
sidebar_label: SourceSubtype
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceSubtype', 'V2025SourceSubtype'] 
slug: /tools/sdk/powershell/v2025/models/source-subtype
tags: ['SDK', 'Software Development Kit', 'SourceSubtype', 'V2025SourceSubtype']
---


# SourceSubtype

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Unique identifier for the subtype. | [optional] 
**SourceId** | **String** | The ID of the source. | [optional] [readonly] 
**TechnicalName** | **String** | Technical name of the subtype. | [required]
**DisplayName** | **String** | Display name of the subtype. | [required]
**Description** | **String** | Description of the subtype. | [required]
**Created** | **System.DateTime** | Creation timestamp. | [optional] 
**Modified** | **System.DateTime** | Last modified timestamp. | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceSubtype = Initialize-V2025SourceSubtype  -Id 43bdd144-4b17-4fce-a744-17c7fd3e717b `
 -SourceId null `
 -TechnicalName foo `
 -DisplayName Mr Foo `
 -Description fighters `
 -Created 2025-07-28T16:13:42.801300Z `
 -Modified 2025-07-28T16:13:42.750850Z
```

- Convert the resource to JSON
```powershell
$SourceSubtype | ConvertTo-JSON
```


[[Back to top]](#) 

