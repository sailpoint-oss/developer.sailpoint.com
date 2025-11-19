---
id: v2024-access-request-recommendation-config-dto
title: AccessRequestRecommendationConfigDto
pagination_label: AccessRequestRecommendationConfigDto
sidebar_label: AccessRequestRecommendationConfigDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestRecommendationConfigDto', 'V2024AccessRequestRecommendationConfigDto'] 
slug: /tools/sdk/powershell/v2024/models/access-request-recommendation-config-dto
tags: ['SDK', 'Software Development Kit', 'AccessRequestRecommendationConfigDto', 'V2024AccessRequestRecommendationConfigDto']
---


# AccessRequestRecommendationConfigDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ScoreThreshold** | **Double** | The value that internal calculations need to exceed for recommendations to be made. | [required]
**StartDateAttribute** | **String** | Use to map an attribute name for determining identities' start date. | [optional] 
**RestrictionAttribute** | **String** | Use to only give recommendations based on this attribute. | [optional] 
**MoverAttribute** | **String** | Use to map an attribute name for determining whether identities are movers. | [optional] 
**JoinerAttribute** | **String** | Use to map an attribute name for determining whether identities are joiners. | [optional] 
**UseRestrictionAttribute** | **Boolean** | Use only the attribute named in restrictionAttribute to make recommendations. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$AccessRequestRecommendationConfigDto = Initialize-V2024AccessRequestRecommendationConfigDto  -ScoreThreshold 0.5 `
 -StartDateAttribute startDate `
 -RestrictionAttribute location `
 -MoverAttribute isMover `
 -JoinerAttribute isJoiner `
 -UseRestrictionAttribute true
```

- Convert the resource to JSON
```powershell
$AccessRequestRecommendationConfigDto | ConvertTo-JSON
```


[[Back to top]](#) 

