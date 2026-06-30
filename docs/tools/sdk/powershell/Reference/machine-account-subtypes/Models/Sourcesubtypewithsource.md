---
id: sourcesubtypewithsource
title: Sourcesubtypewithsource
pagination_label: Sourcesubtypewithsource
sidebar_label: Sourcesubtypewithsource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Sourcesubtypewithsource', 'Sourcesubtypewithsource'] 
slug: /tools/sdk/powershell/machineaccountsubtypes/models/sourcesubtypewithsource
tags: ['SDK', 'Software Development Kit', 'Sourcesubtypewithsource', 'Sourcesubtypewithsource']
---


# Sourcesubtypewithsource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Unique identifier for the subtype. | [optional] 
**SourceId** | **String** | The ID of the source. | [optional] [readonly] 
**TechnicalName** | **String** | Technical name of the subtype. | [optional] 
**DisplayName** | **String** | Display name of the subtype. | [optional] 
**Description** | **String** | Description of the subtype. | [optional] 
**Created** | **System.DateTime** | Creation timestamp. | [optional] 
**Modified** | **System.DateTime** | Last modified timestamp. | [optional] 
**Type** | **String** | Type of the subtype. Either MACHINE OR null. | [optional] 
**Source** | [**SourcesubtypewithsourceSource**](sourcesubtypewithsource-source) |  | [optional] 
**SystemManaged** | **Boolean** | Indicates if the subtype is managed by the system. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$Sourcesubtypewithsource = Initialize-Sourcesubtypewithsource  -Id 38453251-6be2-5f8f-df93-5ce19e295838 `
 -SourceId null `
 -TechnicalName foo `
 -DisplayName Mr Foo `
 -Description fighters `
 -Created 2025-07-28T16:13:42.801300Z `
 -Modified 2025-07-28T16:13:42.750850Z `
 -Type MACHINE `
 -Source null `
 -SystemManaged true
```

- Convert the resource to JSON
```powershell
$Sourcesubtypewithsource | ConvertTo-JSON
```


[[Back to top]](#) 

