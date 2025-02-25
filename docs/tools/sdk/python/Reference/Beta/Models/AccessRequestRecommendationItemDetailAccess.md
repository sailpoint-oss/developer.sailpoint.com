---
id: beta-access-request-recommendation-item-detail-access
title: AccessRequestRecommendationItemDetailAccess
pagination_label: AccessRequestRecommendationItemDetailAccess
sidebar_label: AccessRequestRecommendationItemDetailAccess
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessRequestRecommendationItemDetailAccess', 'BetaAccessRequestRecommendationItemDetailAccess'] 
slug: /tools/sdk/python/beta/models/access-request-recommendation-item-detail-access
tags: ['SDK', 'Software Development Kit', 'AccessRequestRecommendationItemDetailAccess', 'BetaAccessRequestRecommendationItemDetailAccess']
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
from sailpoint.beta.models.access_request_recommendation_item_detail_access import AccessRequestRecommendationItemDetailAccess

access_request_recommendation_item_detail_access = AccessRequestRecommendationItemDetailAccess(
id='2c9180835d2e5168015d32f890ca1581',
type='ACCESS_PROFILE',
name='Employee-database-read-write',
description='This item grants an employee read and write access to the database'
)

```
[[Back to top]](#) 

