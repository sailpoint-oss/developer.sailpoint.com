---
id: v2025-account-request-info
title: AccountRequestInfo
pagination_label: AccountRequestInfo
sidebar_label: AccountRequestInfo
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountRequestInfo', 'V2025AccountRequestInfo'] 
slug: /tools/sdk/python/v2025/models/account-request-info
tags: ['SDK', 'Software Development Kit', 'AccountRequestInfo', 'V2025AccountRequestInfo']
---

# AccountRequestInfo

If an account activity item is associated with an access request, captures details of that request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requested_object_id** | **str** | Id of requested object | [optional] 
**requested_object_name** | **str** | Human-readable name of requested object | [optional] 
**requested_object_type** | [**RequestableObjectType**](requestable-object-type) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.account_request_info import AccountRequestInfo

account_request_info = AccountRequestInfo(
requested_object_id='2c91808563ef85690164001c31140c0c',
requested_object_name='Treasury Analyst',
requested_object_type='ACCESS_PROFILE'
)

```
[[Back to top]](#) 

