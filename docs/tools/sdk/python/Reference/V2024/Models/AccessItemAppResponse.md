---
id: v2024-access-item-app-response
title: AccessItemAppResponse
pagination_label: AccessItemAppResponse
sidebar_label: AccessItemAppResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessItemAppResponse', 'V2024AccessItemAppResponse'] 
slug: /tools/sdk/python/v2024/models/access-item-app-response
tags: ['SDK', 'Software Development Kit', 'AccessItemAppResponse', 'V2024AccessItemAppResponse']
---

# AccessItemAppResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_type** | **str** | the access item type. entitlement in this case | [optional] 
**id** | **str** | the access item id | [optional] 
**display_name** | **str** | the access item display name | [optional] 
**source_name** | **str** | the associated source name if it exists | [optional] 
**app_role_id** | **str** | the app role id | [optional] 
}

## Example

```python
from sailpoint.v2024.models.access_item_app_response import AccessItemAppResponse

access_item_app_response = AccessItemAppResponse(
access_type='app',
id='2c918087763e69d901763e72e97f006f',
display_name='Display Name',
source_name='appName',
app_role_id='2c918087763e69d901763e72e97f006f'
)

```
[[Back to top]](#) 

