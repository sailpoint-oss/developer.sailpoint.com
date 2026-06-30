---
id: accessrequestrecommendationconfigdto
title: Accessrequestrecommendationconfigdto
pagination_label: Accessrequestrecommendationconfigdto
sidebar_label: Accessrequestrecommendationconfigdto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accessrequestrecommendationconfigdto', 'Accessrequestrecommendationconfigdto'] 
slug: /tools/sdk/python/iai-access-request-recommendations/models/accessrequestrecommendationconfigdto
tags: ['SDK', 'Software Development Kit', 'Accessrequestrecommendationconfigdto', 'Accessrequestrecommendationconfigdto']
---

# Accessrequestrecommendationconfigdto


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
from sailpoint.iai_access_request_recommendations.models.accessrequestrecommendationconfigdto import Accessrequestrecommendationconfigdto

accessrequestrecommendationconfigdto = Accessrequestrecommendationconfigdto(
score_threshold=0.5,
start_date_attribute='startDate',
restriction_attribute='location',
mover_attribute='isMover',
joiner_attribute='isJoiner',
use_restriction_attribute=True
)

```
[[Back to top]](#) 

