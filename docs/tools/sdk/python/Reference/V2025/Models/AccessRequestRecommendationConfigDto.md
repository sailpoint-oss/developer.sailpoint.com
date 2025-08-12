---
id: v2025-access-request-recommendation-config-dto
title: AccessRequestRecommendationConfigDto
pagination_label: AccessRequestRecommendationConfigDto
sidebar_label: AccessRequestRecommendationConfigDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessRequestRecommendationConfigDto', 'V2025AccessRequestRecommendationConfigDto'] 
slug: /tools/sdk/python/v2025/models/access-request-recommendation-config-dto
tags: ['SDK', 'Software Development Kit', 'AccessRequestRecommendationConfigDto', 'V2025AccessRequestRecommendationConfigDto']
---

# AccessRequestRecommendationConfigDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**score_threshold** | **float** | The value that internal calculations need to exceed for recommendations to be made. | [required]
**start_date_attribute** | **str** | Use to map an attribute name for determining identities' start date. | [optional] 
**restriction_attribute** | **str** | Use to only give recommendations based on this attribute. | [optional] 
**mover_attribute** | **str** | Use to map an attribute name for determining whether identities are movers. | [optional] 
**joiner_attribute** | **str** | Use to map an attribute name for determining whether identities are joiners. | [optional] 
**use_restriction_attribute** | **bool** | Use only the attribute named in restrictionAttribute to make recommendations. | [optional] [default to False]
}

## Example

```python
from sailpoint.v2025.models.access_request_recommendation_config_dto import AccessRequestRecommendationConfigDto

access_request_recommendation_config_dto = AccessRequestRecommendationConfigDto(
score_threshold=0.5,
start_date_attribute='startDate',
restriction_attribute='location',
mover_attribute='isMover',
joiner_attribute='isJoiner',
use_restriction_attribute=True
)

```
[[Back to top]](#) 

