---
id: accessrequestrecommendationactionitemresponsedto
title: Accessrequestrecommendationactionitemresponsedto
pagination_label: Accessrequestrecommendationactionitemresponsedto
sidebar_label: Accessrequestrecommendationactionitemresponsedto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accessrequestrecommendationactionitemresponsedto', 'Accessrequestrecommendationactionitemresponsedto'] 
slug: /tools/sdk/python/iai-access-request-recommendations/models/accessrequestrecommendationactionitemresponsedto
tags: ['SDK', 'Software Development Kit', 'Accessrequestrecommendationactionitemresponsedto', 'Accessrequestrecommendationactionitemresponsedto']
---

# Accessrequestrecommendationactionitemresponsedto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_id** | **str** | The identity ID taking the action. | [optional] 
**access** | [**Accessrequestrecommendationitem**](accessrequestrecommendationitem) |  | [optional] 
**timestamp** | **datetime** |  | [optional] 
}

## Example

```python
from sailpoint.iai_access_request_recommendations.models.accessrequestrecommendationactionitemresponsedto import Accessrequestrecommendationactionitemresponsedto

accessrequestrecommendationactionitemresponsedto = Accessrequestrecommendationactionitemresponsedto(
identity_id='2c91808570313110017040b06f344ec9',
access=sailpoint.iai_access_request_recommendations.models.access_request_recommendation_item.Access Request Recommendation Item(
                    id = '2c9180835d2e5168015d32f890ca1581', 
                    type = 'ACCESS_PROFILE', ),
timestamp='2017-07-11T18:45:37.098Z'
)

```
[[Back to top]](#) 

