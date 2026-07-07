---
id: set-lifecycle-state-v1200-response
title: SetLifecycleStateV1200Response
pagination_label: SetLifecycleStateV1200Response
sidebar_label: SetLifecycleStateV1200Response
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SetLifecycleStateV1200Response', 'SetLifecycleStateV1200Response'] 
slug: /tools/sdk/python/lifecycle-states/models/set-lifecycle-state-v1200-response
tags: ['SDK', 'Software Development Kit', 'SetLifecycleStateV1200Response', 'SetLifecycleStateV1200Response']
---

# SetLifecycleStateV1200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_activity_id** | **str** | ID of the IdentityRequest object that is generated when the workflow launches. To follow the IdentityRequest, you can provide this ID with a [Get Account Activity request](https://developer.sailpoint.com/docs/api/v3/get-account-activity/). The response will contain relevant information about the IdentityRequest, such as its status. | [optional] 
}

## Example

```python
from sailpoint.lifecycle_states.models.set_lifecycle_state_v1200_response import SetLifecycleStateV1200Response

set_lifecycle_state_v1200_response = SetLifecycleStateV1200Response(
account_activity_id='2c9180837ab5b716017ab7c6c9ef1e20'
)

```
[[Back to top]](#) 

