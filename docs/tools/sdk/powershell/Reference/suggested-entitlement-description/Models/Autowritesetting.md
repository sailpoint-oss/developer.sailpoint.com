---
id: autowritesetting
title: Autowritesetting
pagination_label: Autowritesetting
sidebar_label: Autowritesetting
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Autowritesetting', 'Autowritesetting'] 
slug: /tools/sdk/powershell/suggestedentitlementdescription/models/autowritesetting
tags: ['SDK', 'Software Development Kit', 'Autowritesetting', 'Autowritesetting']
---


# Autowritesetting

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | **Boolean** | Whether auto-write is currently enabled for the tenant | [optional] [default to $false]
**IncludedSourceIds** | **[]String** | Source IDs in the allowlist. Empty array means not in allowlist mode. | [optional] 
**ExcludedSourceIds** | **[]String** | Source IDs to exclude from auto-write. Always applied. | [optional] 

## Examples

- Prepare the resource
```powershell
$Autowritesetting = Initialize-Autowritesetting  -Enabled true `
 -IncludedSourceIds ["2c91808a7813090a017814552e526349","2c91808a7813090a017814552e52634a"] `
 -ExcludedSourceIds ["2c91808a7813090a017814552e526350"]
```

- Convert the resource to JSON
```powershell
$Autowritesetting | ConvertTo-JSON
```


[[Back to top]](#) 

