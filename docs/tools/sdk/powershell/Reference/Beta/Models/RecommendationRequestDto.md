---
id: beta-recommendation-request-dto
title: RecommendationRequestDto
pagination_label: RecommendationRequestDto
sidebar_label: RecommendationRequestDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RecommendationRequestDto', 'BetaRecommendationRequestDto'] 
slug: /tools/sdk/powershell/beta/models/recommendation-request-dto
tags: ['SDK', 'Software Development Kit', 'RecommendationRequestDto', 'BetaRecommendationRequestDto']
---


# RecommendationRequestDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Requests** | [**[]RecommendationRequest**](recommendation-request) |  | [optional] 
**ExcludeInterpretations** | **Boolean** | Exclude interpretations in the response if ""true"". Return interpretations in the response if this attribute is not specified. | [optional] [default to $false]
**IncludeTranslationMessages** | **Boolean** | When set to true, the calling system uses the translated messages for the specified language | [optional] [default to $false]
**IncludeDebugInformation** | **Boolean** | Returns the recommender calculations if set to true | [optional] [default to $false]
**PrescribeMode** | **Boolean** | When set to true, uses prescribedRulesRecommenderConfig to get identity attributes and peer group threshold instead of standard config. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$RecommendationRequestDto = Initialize-BetaRecommendationRequestDto  -Requests null `
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

