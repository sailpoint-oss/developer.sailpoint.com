---
id: sourcesubtype
title: Sourcesubtype
pagination_label: Sourcesubtype
sidebar_label: Sourcesubtype
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Sourcesubtype', 'Sourcesubtype'] 
slug: /tools/sdk/powershell/machineaccounts/models/sourcesubtype
tags: ['SDK', 'Software Development Kit', 'Sourcesubtype', 'Sourcesubtype']
---


# Sourcesubtype

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
**Type** | **String** | Type of the subtype. Either MACHINE OR null. | [optional] 

## Examples

- Prepare the resource
```powershell
$Sourcesubtype = Initialize-Sourcesubtype  -Id 43bdd144-4b17-4fce-a744-17c7fd3e717b `
 -SourceId null `
 -TechnicalName foo `
 -DisplayName Mr Foo `
 -Description fighters `
 -Created 2025-07-28T16:13:42.801300Z `
 -Modified 2025-07-28T16:13:42.750850Z `
 -Type MACHINE
```

- Convert the resource to JSON
```powershell
$Sourcesubtype | ConvertTo-JSON
```


[[Back to top]](#) 

