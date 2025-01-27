---
id: beta-validate-filter-output-dto
title: ValidateFilterOutputDto
pagination_label: ValidateFilterOutputDto
sidebar_label: ValidateFilterOutputDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ValidateFilterOutputDto'] 
slug: /tools/sdk/powershell/beta/models/validate-filter-output-dto
tags: ['SDK', 'Software Development Kit', 'ValidateFilterOutputDto']
---


# ValidateFilterOutputDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsValid** |  Pointer to **Boolean** | When this field is true, the filter expression is valid against the input. | [optional] [default to $false]
**IsValidJSONPath** |  Pointer to **Boolean** | When this field is true, the filter expression is using a valid JSON path. | [optional] [default to $false]
**IsPathExist** |  Pointer to **Boolean** | When this field is true, the filter expression is using an existing path. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$ValidateFilterOutputDto = Initialize-PSSailpoint.BetaValidateFilterOutputDto  -IsValid true `
 -IsValidJSONPath true `
 -IsPathExist true
```

- Convert the resource to JSON
```powershell
$ValidateFilterOutputDto | ConvertTo-JSON
```


[[Back to top]](#) 

