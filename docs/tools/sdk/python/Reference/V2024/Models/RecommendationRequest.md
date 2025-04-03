---
id: v2024-recommendation-request
title: RecommendationRequest
pagination_label: RecommendationRequest
sidebar_label: RecommendationRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RecommendationRequest', 'V2024RecommendationRequest'] 
slug: /tools/sdk/python/v2024/models/recommendation-request
tags: ['SDK', 'Software Development Kit', 'RecommendationRequest', 'V2024RecommendationRequest']
---

# RecommendationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_id** | **str** | The identity ID | [optional] 
**item** | [**AccessItemRef**](access-item-ref) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.recommendation_request import RecommendationRequest

recommendation_request = RecommendationRequest(
identity_id='2c938083633d259901633d25c68c00fa',
item=sailpoint.v2024.models.access_item_ref.AccessItemRef(
                    id = '2c938083633d259901633d2623ec0375', 
                    type = 'ENTITLEMENT', )
)

```
[[Back to top]](#) 

