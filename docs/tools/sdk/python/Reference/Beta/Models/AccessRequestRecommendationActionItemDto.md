---
id: beta-access-request-recommendation-action-item-dto
title: AccessRequestRecommendationActionItemDto
pagination_label: AccessRequestRecommendationActionItemDto
sidebar_label: AccessRequestRecommendationActionItemDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessRequestRecommendationActionItemDto', 'BetaAccessRequestRecommendationActionItemDto'] 
slug: /tools/sdk/python/beta/models/access-request-recommendation-action-item-dto
tags: ['SDK', 'Software Development Kit', 'AccessRequestRecommendationActionItemDto', 'BetaAccessRequestRecommendationActionItemDto']
---

# AccessRequestRecommendationActionItemDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_id** | **str** | The identity ID taking the action. | [required]
**access** | [**AccessRequestRecommendationItem**](access-request-recommendation-item) |  | [required]
}

## Example

```python
from sailpoint.beta.models.access_request_recommendation_action_item_dto import AccessRequestRecommendationActionItemDto

access_request_recommendation_action_item_dto = AccessRequestRecommendationActionItemDto(
identity_id='2c91808570313110017040b06f344ec9',
access=sailpoint.beta.models.access_request_recommendation_item.Access Request Recommendation Item(
                    id = '2c9180835d2e5168015d32f890ca1581', 
                    type = 'ACCESS_PROFILE', )
)

```
[[Back to top]](#) 

