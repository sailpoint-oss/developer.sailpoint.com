---
id: lifecyclestate-deleted
title: LifecyclestateDeleted
pagination_label: LifecyclestateDeleted
sidebar_label: LifecyclestateDeleted
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'LifecyclestateDeleted', 'LifecyclestateDeleted'] 
slug: /tools/sdk/python/v3/models/lifecyclestate-deleted
tags: ['SDK', 'Software Development Kit', 'LifecyclestateDeleted', 'LifecyclestateDeleted']
---

# LifecyclestateDeleted

Deleted lifecycle state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'LIFECYCLE_STATE' ] | Deleted lifecycle state's DTO type. | [optional] 
**id** | **str** | Deleted lifecycle state ID. | [optional] 
**name** | **str** | Deleted lifecycle state's display name. | [optional] 
}

## Example

```python
from sailpoint.v3.models.lifecyclestate_deleted import LifecyclestateDeleted

lifecyclestate_deleted = LifecyclestateDeleted(
type='LIFECYCLE_STATE',
id='12345',
name='Contractor Lifecycle'
)

```
[[Back to top]](#) 

