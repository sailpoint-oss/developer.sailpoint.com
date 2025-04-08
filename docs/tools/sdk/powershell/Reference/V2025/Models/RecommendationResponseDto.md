---
id: v2025-recommendation-response-dto
title: RecommendationResponseDto
pagination_label: RecommendationResponseDto
sidebar_label: RecommendationResponseDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RecommendationResponseDto', 'V2025RecommendationResponseDto'] 
slug: /tools/sdk/powershell/v2025/models/recommendation-response-dto
tags: ['SDK', 'Software Development Kit', 'RecommendationResponseDto', 'V2025RecommendationResponseDto']
---


# RecommendationResponseDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Response** | [**[]RecommendationResponse**](recommendation-response) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RecommendationResponseDto = Initialize-PSSailpoint.V2025RecommendationResponseDto  -Response null
```

- Convert the resource to JSON
```powershell
$RecommendationResponseDto | ConvertTo-JSON
```


[[Back to top]](#) 

