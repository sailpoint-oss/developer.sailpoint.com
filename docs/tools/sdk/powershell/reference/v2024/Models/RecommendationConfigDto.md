---
id: v2024-recommendation-config-dto
title: RecommendationConfigDto
pagination_label: RecommendationConfigDto
sidebar_label: RecommendationConfigDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RecommendationConfigDto'] 
slug: /tools/sdk/powershell/v2024/models/recommendation-config-dto
tags: ['SDK', 'Software Development Kit', 'RecommendationConfigDto']
---


# RecommendationConfigDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RecommenderFeatures** |  Pointer to **[]String** | List of identity attributes to use for calculating certification recommendations | [optional] 
**PeerGroupPercentageThreshold** |  Pointer to **Double** | The percent value that the recommendation calculation must surpass to produce a YES recommendation | [optional] 
**RunAutoSelectOnce** |  Pointer to **Boolean** | If true, rulesRecommenderConfig will be refreshed with new programatically selected attribute and threshold values on the next pipeline run | [optional] [default to $false]
**OnlyTuneThreshold** |  Pointer to **Boolean** | If true, rulesRecommenderConfig will be refreshed with new programatically selected threshold values on the next pipeline run | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$RecommendationConfigDto = Initialize-PSSailpoint.V2024RecommendationConfigDto  -RecommenderFeatures [jobTitle, location, peer_group, department, active] `
 -PeerGroupPercentageThreshold 0.5 `
 -RunAutoSelectOnce false `
 -OnlyTuneThreshold false
```

- Convert the resource to JSON
```powershell
$RecommendationConfigDto | ConvertTo-JSON
```


[[Back to top]](#) 

