---
id: recommendationconfigdto
title: Recommendationconfigdto
pagination_label: Recommendationconfigdto
sidebar_label: Recommendationconfigdto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Recommendationconfigdto', 'Recommendationconfigdto'] 
slug: /tools/sdk/python/iai-recommendations/models/recommendationconfigdto
tags: ['SDK', 'Software Development Kit', 'Recommendationconfigdto', 'Recommendationconfigdto']
---

# Recommendationconfigdto


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
from sailpoint.iai_recommendations.models.recommendationconfigdto import Recommendationconfigdto

recommendationconfigdto = Recommendationconfigdto(
recommender_features=["jobTitle","location","peer_group","department","active"],
peer_group_percentage_threshold=0.5,
run_auto_select_once=False,
only_tune_threshold=False
)

```
[[Back to top]](#) 

