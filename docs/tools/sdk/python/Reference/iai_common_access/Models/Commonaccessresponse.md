---
id: commonaccessresponse
title: Commonaccessresponse
pagination_label: Commonaccessresponse
sidebar_label: Commonaccessresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Commonaccessresponse', 'Commonaccessresponse'] 
slug: /tools/sdk/python/iai-common-access/models/commonaccessresponse
tags: ['SDK', 'Software Development Kit', 'Commonaccessresponse', 'Commonaccessresponse']
---

# Commonaccessresponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique ID of the common access item | [optional] 
**access** | [**Commonaccessitemaccess**](commonaccessitemaccess) |  | [optional] 
**status** | **str** | CONFIRMED or DENIED | [optional] 
**common_access_type** | **str** |  | [optional] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**reviewed_by_user** | **bool** | true if user has confirmed or denied status | [optional] 
**last_reviewed** | **datetime** |  | [optional] [readonly] 
**created_by_user** | **bool** |  | [optional] [default to False]
}

## Example

```python
from sailpoint.iai_common_access.models.commonaccessresponse import Commonaccessresponse

commonaccessresponse = Commonaccessresponse(
id='555ab47a-0d32-4813-906f-adf3567de6a4',
access=sailpoint.iai_common_access.models.common_access_item_access.Common Access Item Access(
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

