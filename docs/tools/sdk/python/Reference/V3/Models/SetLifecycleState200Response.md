---
id: set-lifecycle-state200-response
title: SetLifecycleState200Response
pagination_label: SetLifecycleState200Response
sidebar_label: SetLifecycleState200Response
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SetLifecycleState200Response', 'SetLifecycleState200Response'] 
slug: /tools/sdk/python/v3/models/set-lifecycle-state200-response
tags: ['SDK', 'Software Development Kit', 'SetLifecycleState200Response', 'SetLifecycleState200Response']
---

# SetLifecycleState200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_activity_id** | **str** | ID of the IdentityRequest object that is generated when the workflow launches. To follow the IdentityRequest, you can provide this ID with a [Get Account Activity request](https://developer.sailpoint.com/docs/api/v3/get-account-activity/). The response will contain relevant information about the IdentityRequest, such as its status. | [optional] 
}

## Example

```python
from sailpoint.v3.models.set_lifecycle_state200_response import SetLifecycleState200Response

set_lifecycle_state200_response = SetLifecycleState200Response(
account_activity_id='2c9180837ab5b716017ab7c6c9ef1e20'
)

```
[[Back to top]](#) 

