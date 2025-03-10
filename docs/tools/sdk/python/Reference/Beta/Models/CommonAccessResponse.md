---
id: beta-common-access-response
title: CommonAccessResponse
pagination_label: CommonAccessResponse
sidebar_label: CommonAccessResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CommonAccessResponse', 'BetaCommonAccessResponse'] 
slug: /tools/sdk/python/beta/models/common-access-response
tags: ['SDK', 'Software Development Kit', 'CommonAccessResponse', 'BetaCommonAccessResponse']
---

# CommonAccessResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique ID of the common access item | [optional] 
**access** | [**CommonAccessItemAccess**](common-access-item-access) |  | [optional] 
**status** | **str** | CONFIRMED or DENIED | [optional] 
**common_access_type** | **str** |  | [optional] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**reviewed_by_user** | **bool** | true if user has confirmed or denied status | [optional] 
**last_reviewed** | **datetime** |  | [optional] [readonly] 
**created_by_user** | **bool** |  | [optional] [default to False]
}

## Example

```python
from sailpoint.beta.models.common_access_response import CommonAccessResponse

common_access_response = CommonAccessResponse(
id='555ab47a-0d32-4813-906f-adf3567de6a4',
access=sailpoint.beta.models.common_access_item_access.CommonAccessItemAccess(
                    id = '', 
                    type = 'ACCESS_PROFILE', 
                    name = '', 
                    description = '', 
                    owner_name = '', 
                    owner_id = '', ),
status='',
common_access_type='UNSET',
last_updated=datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
reviewed_by_user=True,
last_reviewed=datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
created_by_user=False
)

```
[[Back to top]](#) 

