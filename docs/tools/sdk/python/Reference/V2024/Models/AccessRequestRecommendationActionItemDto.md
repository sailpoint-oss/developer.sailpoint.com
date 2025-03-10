---
id: v2024-access-request-recommendation-action-item-dto
title: AccessRequestRecommendationActionItemDto
pagination_label: AccessRequestRecommendationActionItemDto
sidebar_label: AccessRequestRecommendationActionItemDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessRequestRecommendationActionItemDto', 'V2024AccessRequestRecommendationActionItemDto'] 
slug: /tools/sdk/python/v2024/models/access-request-recommendation-action-item-dto
tags: ['SDK', 'Software Development Kit', 'AccessRequestRecommendationActionItemDto', 'V2024AccessRequestRecommendationActionItemDto']
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
from sailpoint.v2024.models.access_request_recommendation_action_item_dto import AccessRequestRecommendationActionItemDto

access_request_recommendation_action_item_dto = AccessRequestRecommendationActionItemDto(
identity_id='2c91808570313110017040b06f344ec9',
access=sailpoint.v2024.models.access_request_recommendation_item.AccessRequestRecommendationItem(
                    id = '2c9180835d2e5168015d32f890ca1581', 
                    type = 'ACCESS_PROFILE', )
)

```
[[Back to top]](#) 

