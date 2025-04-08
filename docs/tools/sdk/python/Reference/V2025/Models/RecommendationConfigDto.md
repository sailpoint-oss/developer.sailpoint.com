---
id: v2025-recommendation-config-dto
title: RecommendationConfigDto
pagination_label: RecommendationConfigDto
sidebar_label: RecommendationConfigDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RecommendationConfigDto', 'V2025RecommendationConfigDto'] 
slug: /tools/sdk/python/v2025/models/recommendation-config-dto
tags: ['SDK', 'Software Development Kit', 'RecommendationConfigDto', 'V2025RecommendationConfigDto']
---

# RecommendationConfigDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recommender_features** | **[]str** | List of identity attributes to use for calculating certification recommendations | [optional] 
**peer_group_percentage_threshold** | **float** | The percent value that the recommendation calculation must surpass to produce a YES recommendation | [optional] 
**run_auto_select_once** | **bool** | If true, rulesRecommenderConfig will be refreshed with new programatically selected attribute and threshold values on the next pipeline run | [optional] [default to False]
**only_tune_threshold** | **bool** | If true, rulesRecommenderConfig will be refreshed with new programatically selected threshold values on the next pipeline run | [optional] [default to False]
}

## Example

```python
from sailpoint.v2025.models.recommendation_config_dto import RecommendationConfigDto

recommendation_config_dto = RecommendationConfigDto(
recommender_features=[jobTitle, location, peer_group, department, active],
peer_group_percentage_threshold=0.5,
run_auto_select_once=False,
only_tune_threshold=False
)

```
[[Back to top]](#) 

