---
id: validatefilteroutputdto
title: Validatefilteroutputdto
pagination_label: Validatefilteroutputdto
sidebar_label: Validatefilteroutputdto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Validatefilteroutputdto', 'Validatefilteroutputdto'] 
slug: /tools/sdk/powershell/triggers/models/validatefilteroutputdto
tags: ['SDK', 'Software Development Kit', 'Validatefilteroutputdto', 'Validatefilteroutputdto']
---


# Validatefilteroutputdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsValid** | **Boolean** | When this field is true, the filter expression is valid against the input. | [optional] [default to $false]
**IsValidJSONPath** | **Boolean** | When this field is true, the filter expression is using a valid JSON path. | [optional] [default to $false]
**IsPathExist** | **Boolean** | When this field is true, the filter expression is using an existing path. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$Validatefilteroutputdto = Initialize-Validatefilteroutputdto  -IsValid true `
 -IsValidJSONPath true `
 -IsPathExist true
```

- Convert the resource to JSON
```powershell
$Validatefilteroutputdto | ConvertTo-JSON
```


[[Back to top]](#) 

