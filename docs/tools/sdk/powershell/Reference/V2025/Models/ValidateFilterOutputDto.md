---
id: v2025-validate-filter-output-dto
title: ValidateFilterOutputDto
pagination_label: ValidateFilterOutputDto
sidebar_label: ValidateFilterOutputDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ValidateFilterOutputDto', 'V2025ValidateFilterOutputDto'] 
slug: /tools/sdk/powershell/v2025/models/validate-filter-output-dto
tags: ['SDK', 'Software Development Kit', 'ValidateFilterOutputDto', 'V2025ValidateFilterOutputDto']
---


# ValidateFilterOutputDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsValid** | **Boolean** | When this field is true, the filter expression is valid against the input. | [optional] [default to $false]
**IsValidJSONPath** | **Boolean** | When this field is true, the filter expression is using a valid JSON path. | [optional] [default to $false]
**IsPathExist** | **Boolean** | When this field is true, the filter expression is using an existing path. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$ValidateFilterOutputDto = Initialize-PSSailpoint.V2025ValidateFilterOutputDto  -IsValid true `
 -IsValidJSONPath true `
 -IsPathExist true
```

- Convert the resource to JSON
```powershell
$ValidateFilterOutputDto | ConvertTo-JSON
```


[[Back to top]](#) 

