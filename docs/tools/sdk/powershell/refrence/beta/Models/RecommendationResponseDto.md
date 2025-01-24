---
id: recommendation-response-dto
title: RecommendationResponseDto
pagination_label: RecommendationResponseDto
sidebar_label: RecommendationResponseDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RecommendationResponseDto'] 
slug: /tools/sdk/powershell/beta/models/recommendation-response-dto
tags: ['SDK', 'Software Development Kit', 'RecommendationResponseDto']
---


# RecommendationResponseDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Response** |  Pointer to [**[]RecommendationResponse**](recommendation-response) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RecommendationResponseDto = Initialize-PSSailpoint.BetaRecommendationResponseDto  -Response null
```

- Convert the resource to JSON
```powershell
$RecommendationResponseDto | ConvertTo-JSON
```


[[Back to top]](#) 

