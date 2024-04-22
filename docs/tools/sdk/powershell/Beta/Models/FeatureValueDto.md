---
id: feature-value-dto
title: FeatureValueDto
pagination_label: FeatureValueDto
sidebar_label: FeatureValueDto
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'FeatureValueDto'] 
slug: /tools/sdk/powershell/beta/models/feature-value-dto
tags: ['SDK', 'Software Development Kit', 'FeatureValueDto']
---


# FeatureValueDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Feature** |  Pointer to **String** | The type of feature | [optional] 
**Numerator** |  Pointer to **Int32** | The number of identities that have access to the feature | [optional] 
**Denominator** |  Pointer to **Int32** | The number of identities with the corresponding feature | [optional] 

## Examples

- Prepare the resource
```powershell
$FeatureValueDto = Initialize-BetaFeatureValueDto  -Feature department `
 -Numerator 14 `
 -Denominator 14
```

- Convert the resource to JSON
```powershell
$FeatureValueDto | ConvertTo-JSON
```


[[Back to top]](#) 

