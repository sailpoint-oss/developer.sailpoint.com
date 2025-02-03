---
id: v2024-feature-value-dto
title: FeatureValueDto
pagination_label: FeatureValueDto
sidebar_label: FeatureValueDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'FeatureValueDto', 'V2024FeatureValueDto'] 
slug: /tools/sdk/powershell/v2024/models/feature-value-dto
tags: ['SDK', 'Software Development Kit', 'FeatureValueDto', 'V2024FeatureValueDto']
---


# FeatureValueDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Feature** | **String** | The type of feature | [optional] 
**Numerator** | **Int32** | The number of identities that have access to the feature | [optional] 
**Denominator** | **Int32** | The number of identities with the corresponding feature | [optional] 

## Examples

- Prepare the resource
```powershell
$FeatureValueDto = Initialize-PSSailpoint.V2024FeatureValueDto  -Feature department `
 -Numerator 14 `
 -Denominator 14
```

- Convert the resource to JSON
```powershell
$FeatureValueDto | ConvertTo-JSON
```


[[Back to top]](#) 

