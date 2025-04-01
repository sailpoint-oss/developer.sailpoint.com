---
id: v2025-sed-patch
title: SedPatch
pagination_label: SedPatch
sidebar_label: SedPatch
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SedPatch', 'V2025SedPatch'] 
slug: /tools/sdk/powershell/v2025/models/sed-patch
tags: ['SDK', 'Software Development Kit', 'SedPatch', 'V2025SedPatch']
---


# SedPatch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Op** | **String** | desired operation | [optional] 
**Path** | **String** | field to be patched | [optional] 
**Value** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | value to replace with | [optional] 

## Examples

- Prepare the resource
```powershell
$SedPatch = Initialize-PSSailpoint.V2025SedPatch  -Op replace `
 -Path status `
 -Value approved
```

- Convert the resource to JSON
```powershell
$SedPatch | ConvertTo-JSON
```


[[Back to top]](#) 

