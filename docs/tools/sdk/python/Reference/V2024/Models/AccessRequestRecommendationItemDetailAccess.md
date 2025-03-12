---
id: v2024-access-request-recommendation-item-detail-access
title: AccessRequestRecommendationItemDetailAccess
pagination_label: AccessRequestRecommendationItemDetailAccess
sidebar_label: AccessRequestRecommendationItemDetailAccess
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessRequestRecommendationItemDetailAccess', 'V2024AccessRequestRecommendationItemDetailAccess'] 
slug: /tools/sdk/python/v2024/models/access-request-recommendation-item-detail-access
tags: ['SDK', 'Software Development Kit', 'AccessRequestRecommendationItemDetailAccess', 'V2024AccessRequestRecommendationItemDetailAccess']
---

# AccessRequestRecommendationItemDetailAccess


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of access item being recommended. | [optional] 
**type** | [**AccessRequestRecommendationItemType**](access-request-recommendation-item-type) |  | [optional] 
**name** | **str** | Name of the access item | [optional] 
**description** | **str** | Description of the access item | [optional] 
}

## Example

```python
from sailpoint.v2024.models.access_request_recommendation_item_detail_access import AccessRequestRecommendationItemDetailAccess

access_request_recommendation_item_detail_access = AccessRequestRecommendationItemDetailAccess(
id='2c9180835d2e5168015d32f890ca1581',
type='ACCESS_PROFILE',
name='Employee-database-read-write',
description='This item grants an employee read and write access to the database'
)

```
[[Back to top]](#) 

