---
id: lifecyclestatedeleted
title: Lifecyclestatedeleted
pagination_label: Lifecyclestatedeleted
sidebar_label: Lifecyclestatedeleted
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Lifecyclestatedeleted', 'Lifecyclestatedeleted'] 
slug: /tools/sdk/python/lifecycle-states/models/lifecyclestatedeleted
tags: ['SDK', 'Software Development Kit', 'Lifecyclestatedeleted', 'Lifecyclestatedeleted']
---

# Lifecyclestatedeleted

Deleted lifecycle state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'LIFECYCLE_STATE',    'TASK_RESULT' ] | Deleted lifecycle state's DTO type. | [optional] 
**id** | **str** | Deleted lifecycle state ID. | [optional] 
**name** | **str** | Deleted lifecycle state's display name. | [optional] 
}

## Example

```python
from sailpoint.lifecycle_states.models.lifecyclestatedeleted import Lifecyclestatedeleted

lifecyclestatedeleted = Lifecyclestatedeleted(
type='LIFECYCLE_STATE',
id='12345',
name='Contractor Lifecycle'
)

```
[[Back to top]](#) 

