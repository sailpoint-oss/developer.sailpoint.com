---
id: beta-recommendation-response-dto
title: RecommendationResponseDto
pagination_label: RecommendationResponseDto
sidebar_label: RecommendationResponseDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RecommendationResponseDto', 'BetaRecommendationResponseDto'] 
slug: /tools/sdk/powershell/beta/models/recommendation-response-dto
tags: ['SDK', 'Software Development Kit', 'RecommendationResponseDto', 'BetaRecommendationResponseDto']
---


# RecommendationResponseDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Response** | [**[]RecommendationResponse**](recommendation-response) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RecommendationResponseDto = Initialize-BetaRecommendationResponseDto  -Response null
```

- Convert the resource to JSON
```powershell
$RecommendationResponseDto | ConvertTo-JSON
```


[[Back to top]](#) 

