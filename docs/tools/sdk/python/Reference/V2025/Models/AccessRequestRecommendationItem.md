---
id: v2025-access-request-recommendation-item
title: AccessRequestRecommendationItem
pagination_label: AccessRequestRecommendationItem
sidebar_label: AccessRequestRecommendationItem
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessRequestRecommendationItem', 'V2025AccessRequestRecommendationItem'] 
slug: /tools/sdk/python/v2025/models/access-request-recommendation-item
tags: ['SDK', 'Software Development Kit', 'AccessRequestRecommendationItem', 'V2025AccessRequestRecommendationItem']
---

# AccessRequestRecommendationItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of access item being recommended. | [optional] 
**type** | [**AccessRequestRecommendationItemType**](access-request-recommendation-item-type) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.access_request_recommendation_item import AccessRequestRecommendationItem

access_request_recommendation_item = AccessRequestRecommendationItem(
id='2c9180835d2e5168015d32f890ca1581',
type='ACCESS_PROFILE'
)

```
[[Back to top]](#) 

