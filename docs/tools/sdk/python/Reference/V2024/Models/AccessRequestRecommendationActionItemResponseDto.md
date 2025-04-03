---
id: v2024-access-request-recommendation-action-item-response-dto
title: AccessRequestRecommendationActionItemResponseDto
pagination_label: AccessRequestRecommendationActionItemResponseDto
sidebar_label: AccessRequestRecommendationActionItemResponseDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessRequestRecommendationActionItemResponseDto', 'V2024AccessRequestRecommendationActionItemResponseDto'] 
slug: /tools/sdk/python/v2024/models/access-request-recommendation-action-item-response-dto
tags: ['SDK', 'Software Development Kit', 'AccessRequestRecommendationActionItemResponseDto', 'V2024AccessRequestRecommendationActionItemResponseDto']
---

# AccessRequestRecommendationActionItemResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_id** | **str** | The identity ID taking the action. | [optional] 
**access** | [**AccessRequestRecommendationItem**](access-request-recommendation-item) |  | [optional] 
**timestamp** | **datetime** |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.access_request_recommendation_action_item_response_dto import AccessRequestRecommendationActionItemResponseDto

access_request_recommendation_action_item_response_dto = AccessRequestRecommendationActionItemResponseDto(
identity_id='2c91808570313110017040b06f344ec9',
access=sailpoint.v2024.models.access_request_recommendation_item.AccessRequestRecommendationItem(
                    id = '2c9180835d2e5168015d32f890ca1581', 
                    type = 'ACCESS_PROFILE', ),
timestamp='2017-07-11T18:45:37.098Z'
)

```
[[Back to top]](#) 

