---
id: v2024-identity-lifecycle-state
title: IdentityLifecycleState
pagination_label: IdentityLifecycleState
sidebar_label: IdentityLifecycleState
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityLifecycleState', 'V2024IdentityLifecycleState'] 
slug: /tools/sdk/python/v2024/models/identity-lifecycle-state
tags: ['SDK', 'Software Development Kit', 'IdentityLifecycleState', 'V2024IdentityLifecycleState']
---

# IdentityLifecycleState


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state_name** | **str** | The name of the lifecycle state | [required]
**manually_updated** | **bool** | Whether the lifecycle state has been manually or automatically set | [required]
}

## Example

```python
from sailpoint.v2024.models.identity_lifecycle_state import IdentityLifecycleState

identity_lifecycle_state = IdentityLifecycleState(
state_name='active',
manually_updated=True
)

```
[[Back to top]](#) 

