---
id: autowritesettingpatch
title: Autowritesettingpatch
pagination_label: Autowritesettingpatch
sidebar_label: Autowritesettingpatch
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Autowritesettingpatch', 'Autowritesettingpatch'] 
slug: /tools/sdk/powershell/suggestedentitlementdescription/models/autowritesettingpatch
tags: ['SDK', 'Software Development Kit', 'Autowritesettingpatch', 'Autowritesettingpatch']
---


# Autowritesettingpatch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Op** |  **Enum** [  "replace" ] | The operation to perform. Only ""replace"" is supported. | [required]
**Path** | **String** | The field to update. Allowed values: /enabled, /includedSourceIds, /excludedSourceIds | [required]
**Value** | [**AutowritesettingpatchValue**](autowritesettingpatch-value) |  | [required]

## Examples

- Prepare the resource
```powershell
$Autowritesettingpatch = Initialize-Autowritesettingpatch  -Op replace `
 -Path /enabled `
 -Value null
```

- Convert the resource to JSON
```powershell
$Autowritesettingpatch | ConvertTo-JSON
```


[[Back to top]](#) 

