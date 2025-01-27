---
id: beta-recommendation-request-dto
title: RecommendationRequestDto
pagination_label: RecommendationRequestDto
sidebar_label: RecommendationRequestDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RecommendationRequestDto'] 
slug: /tools/sdk/powershell/beta/models/recommendation-request-dto
tags: ['SDK', 'Software Development Kit', 'RecommendationRequestDto']
---


# RecommendationRequestDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Requests** |  Pointer to [**[]RecommendationRequest**](recommendation-request) |  | [optional] 
**ExcludeInterpretations** |  Pointer to **Boolean** | Exclude interpretations in the response if ""true"". Return interpretations in the response if this attribute is not specified. | [optional] [default to $false]
**IncludeTranslationMessages** |  Pointer to **Boolean** | When set to true, the calling system uses the translated messages for the specified language | [optional] [default to $false]
**IncludeDebugInformation** |  Pointer to **Boolean** | Returns the recommender calculations if set to true | [optional] [default to $false]
**PrescribeMode** |  Pointer to **Boolean** | When set to true, uses prescribedRulesRecommenderConfig to get identity attributes and peer group threshold instead of standard config. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$RecommendationRequestDto = Initialize-PSSailpoint.BetaRecommendationRequestDto  -Requests null `
 -ExcludeInterpretations false `
 -IncludeTranslationMessages false `
 -IncludeDebugInformation true `
 -PrescribeMode false
```

- Convert the resource to JSON
```powershell
$RecommendationRequestDto | ConvertTo-JSON
```


[[Back to top]](#) 

