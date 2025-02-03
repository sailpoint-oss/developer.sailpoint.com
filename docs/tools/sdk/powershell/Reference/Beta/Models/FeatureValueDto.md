---
id: beta-feature-value-dto
title: FeatureValueDto
pagination_label: FeatureValueDto
sidebar_label: FeatureValueDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'FeatureValueDto', 'BetaFeatureValueDto'] 
slug: /tools/sdk/powershell/beta/models/feature-value-dto
tags: ['SDK', 'Software Development Kit', 'FeatureValueDto', 'BetaFeatureValueDto']
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
$FeatureValueDto = Initialize-PSSailpoint.BetaFeatureValueDto  -Feature department `
 -Numerator 14 `
 -Denominator 14
```

- Convert the resource to JSON
```powershell
$FeatureValueDto | ConvertTo-JSON
```


[[Back to top]](#) 

