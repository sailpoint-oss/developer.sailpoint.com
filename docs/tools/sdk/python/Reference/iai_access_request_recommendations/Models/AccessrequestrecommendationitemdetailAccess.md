---
id: accessrequestrecommendationitemdetail-access
title: AccessrequestrecommendationitemdetailAccess
pagination_label: AccessrequestrecommendationitemdetailAccess
sidebar_label: AccessrequestrecommendationitemdetailAccess
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessrequestrecommendationitemdetailAccess', 'AccessrequestrecommendationitemdetailAccess'] 
slug: /tools/sdk/python/iai-access-request-recommendations/models/accessrequestrecommendationitemdetail-access
tags: ['SDK', 'Software Development Kit', 'AccessrequestrecommendationitemdetailAccess', 'AccessrequestrecommendationitemdetailAccess']
---

# AccessrequestrecommendationitemdetailAccess


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of access item being recommended. | [optional] 
**type** | [**Accessrequestrecommendationitemtype**](accessrequestrecommendationitemtype) |  | [optional] 
**name** | **str** | Name of the access item | [optional] 
**description** | **str** | Description of the access item | [optional] 
}

## Example

```python
from sailpoint.iai_access_request_recommendations.models.accessrequestrecommendationitemdetail_access import AccessrequestrecommendationitemdetailAccess

accessrequestrecommendationitemdetail_access = AccessrequestrecommendationitemdetailAccess(
id='2c9180835d2e5168015d32f890ca1581',
type='ACCESS_PROFILE',
name='Employee-database-read-write',
description='This item grants an employee read and write access to the database'
)

```
[[Back to top]](#) 

