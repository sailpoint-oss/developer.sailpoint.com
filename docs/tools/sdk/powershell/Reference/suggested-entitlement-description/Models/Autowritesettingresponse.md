---
id: autowritesettingresponse
title: Autowritesettingresponse
pagination_label: Autowritesettingresponse
sidebar_label: Autowritesettingresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Autowritesettingresponse', 'Autowritesettingresponse'] 
slug: /tools/sdk/powershell/suggestedentitlementdescription/models/autowritesettingresponse
tags: ['SDK', 'Software Development Kit', 'Autowritesettingresponse', 'Autowritesettingresponse']
---


# Autowritesettingresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | **Boolean** | Whether auto-write is currently enabled for the tenant | [optional] [default to $false]
**IncludedSourceIds** | **[]String** | Source IDs in the allowlist. Empty array means not in allowlist mode. | [optional] 
**ExcludedSourceIds** | **[]String** | Source IDs to exclude from auto-write. Always applied. | [optional] 
**CreatedAt** | **System.DateTime** | When settings were first created | [optional] 
**UpdatedAt** | **System.DateTime** | When settings were last modified | [optional] 

## Examples

- Prepare the resource
```powershell
$Autowritesettingresponse = Initialize-Autowritesettingresponse  -Enabled true `
 -IncludedSourceIds [2c91808a7813090a017814552e526349, 2c91808a7813090a017814552e52634a] `
 -ExcludedSourceIds [2c91808a7813090a017814552e526350] `
 -CreatedAt 2026-02-15T10:30Z `
 -UpdatedAt 2026-03-09T14:22Z
```

- Convert the resource to JSON
```powershell
$Autowritesettingresponse | ConvertTo-JSON
```


[[Back to top]](#) 

