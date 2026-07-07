---
id: sedpatch
title: Sedpatch
pagination_label: Sedpatch
sidebar_label: Sedpatch
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Sedpatch', 'Sedpatch'] 
slug: /tools/sdk/powershell/suggestedentitlementdescription/models/sedpatch
tags: ['SDK', 'Software Development Kit', 'Sedpatch', 'Sedpatch']
---


# Sedpatch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Op** | **String** | desired operation | [optional] 
**Path** | **String** | field to be patched | [optional] 
**Value** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | value to replace with | [optional] 

## Examples

- Prepare the resource
```powershell
$Sedpatch = Initialize-Sedpatch  -Op replace `
 -Path status `
 -Value approved
```

- Convert the resource to JSON
```powershell
$Sedpatch | ConvertTo-JSON
```


[[Back to top]](#) 

