---
id: sed-patch
title: SedPatch
pagination_label: SedPatch
sidebar_label: SedPatch
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SedPatch'] 
slug: /tools/sdk/powershell/v2024/models/sed-patch
tags: ['SDK', 'Software Development Kit', 'SedPatch']
---


# SedPatch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Op** |  Pointer to **String** | desired operation | [optional] 
**Path** |  Pointer to **String** | field to be patched | [optional] 
**Value** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | value to replace with | [optional] 

## Examples

- Prepare the resource
```powershell
$SedPatch = Initialize-PSSailpoint.V2024SedPatch  -Op replace `
 -Path status `
 -Value approved
```

- Convert the resource to JSON
```powershell
$SedPatch | ConvertTo-JSON
```


[[Back to top]](#) 

