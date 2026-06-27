---
id: accessrequestrecommendationactionitemdto
title: Accessrequestrecommendationactionitemdto
pagination_label: Accessrequestrecommendationactionitemdto
sidebar_label: Accessrequestrecommendationactionitemdto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accessrequestrecommendationactionitemdto', 'Accessrequestrecommendationactionitemdto'] 
slug: /tools/sdk/python/iai-access-request-recommendations/models/accessrequestrecommendationactionitemdto
tags: ['SDK', 'Software Development Kit', 'Accessrequestrecommendationactionitemdto', 'Accessrequestrecommendationactionitemdto']
---

# Accessrequestrecommendationactionitemdto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_id** | **str** | The identity ID taking the action. | [required]
**access** | [**Accessrequestrecommendationitem**](accessrequestrecommendationitem) |  | [required]
}

## Example

```python
from sailpoint.iai_access_request_recommendations.models.accessrequestrecommendationactionitemdto import Accessrequestrecommendationactionitemdto

accessrequestrecommendationactionitemdto = Accessrequestrecommendationactionitemdto(
identity_id='2c91808570313110017040b06f344ec9',
access=sailpoint.iai_access_request_recommendations.models.access_request_recommendation_item.Access Request Recommendation Item(
                    id = '2c9180835d2e5168015d32f890ca1581', 
                    type = 'ACCESS_PROFILE', )
)

```
[[Back to top]](#) 

