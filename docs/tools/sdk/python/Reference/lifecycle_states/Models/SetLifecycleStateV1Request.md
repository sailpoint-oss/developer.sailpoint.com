---
id: set-lifecycle-state-v1-request
title: SetLifecycleStateV1Request
pagination_label: SetLifecycleStateV1Request
sidebar_label: SetLifecycleStateV1Request
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SetLifecycleStateV1Request', 'SetLifecycleStateV1Request'] 
slug: /tools/sdk/python/lifecycle-states/models/set-lifecycle-state-v1-request
tags: ['SDK', 'Software Development Kit', 'SetLifecycleStateV1Request', 'SetLifecycleStateV1Request']
---

# SetLifecycleStateV1Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lifecycle_state_id** | **str** | ID of the lifecycle state to set. | [optional] 
}

## Example

```python
from sailpoint.lifecycle_states.models.set_lifecycle_state_v1_request import SetLifecycleStateV1Request

set_lifecycle_state_v1_request = SetLifecycleStateV1Request(
lifecycle_state_id='2c9180877a86e408017a8c19fefe046c'
)

```
[[Back to top]](#) 

