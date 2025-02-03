---
id: beta-sed-patch
title: SedPatch
pagination_label: SedPatch
sidebar_label: SedPatch
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SedPatch', 'BetaSedPatch'] 
slug: /tools/sdk/powershell/beta/models/sed-patch
tags: ['SDK', 'Software Development Kit', 'SedPatch', 'BetaSedPatch']
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
$SedPatch = Initialize-PSSailpoint.BetaSedPatch  -Op replace `
 -Path status `
 -Value approved
```

- Convert the resource to JSON
```powershell
$SedPatch | ConvertTo-JSON
```


[[Back to top]](#) 

