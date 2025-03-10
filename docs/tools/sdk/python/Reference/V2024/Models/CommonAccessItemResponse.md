---
id: v2024-common-access-item-response
title: CommonAccessItemResponse
pagination_label: CommonAccessItemResponse
sidebar_label: CommonAccessItemResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CommonAccessItemResponse', 'V2024CommonAccessItemResponse'] 
slug: /tools/sdk/python/v2024/models/common-access-item-response
tags: ['SDK', 'Software Development Kit', 'CommonAccessItemResponse', 'V2024CommonAccessItemResponse']
---

# CommonAccessItemResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Common Access Item ID | [optional] 
**access** | [**CommonAccessItemAccess**](common-access-item-access) |  | [optional] 
**status** | [**CommonAccessItemState**](common-access-item-state) |  | [optional] 
**last_updated** | **str** |  | [optional] 
**reviewed_by_user** | **bool** |  | [optional] 
**last_reviewed** | **str** |  | [optional] 
**created_by_user** | **str** |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.common_access_item_response import CommonAccessItemResponse

common_access_item_response = CommonAccessItemResponse(
id='',
access=sailpoint.v2024.models.common_access_item_access.CommonAccessItemAccess(
                    id = '', 
                    type = 'ACCESS_PROFILE', 
                    name = '', 
                    description = '', 
                    owner_name = '', 
                    owner_id = '', ),
status='CONFIRMED',
last_updated='',
reviewed_by_user=True,
last_reviewed='',
created_by_user=''
)

```
[[Back to top]](#) 

