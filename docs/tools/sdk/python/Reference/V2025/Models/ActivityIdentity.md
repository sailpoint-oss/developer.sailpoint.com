---
id: v2025-activity-identity
title: ActivityIdentity
pagination_label: ActivityIdentity
sidebar_label: ActivityIdentity
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ActivityIdentity', 'V2025ActivityIdentity'] 
slug: /tools/sdk/python/v2025/models/activity-identity
tags: ['SDK', 'Software Development Kit', 'ActivityIdentity', 'V2025ActivityIdentity']
---

# ActivityIdentity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the referenced object. | [optional] 
**name** | **str** | The human readable name of the referenced object. | [optional] 
**type** | **str** | Type of object | [optional] 
}

## Example

```python
from sailpoint.v2025.models.activity_identity import ActivityIdentity

activity_identity = ActivityIdentity(
id='2c91808568c529c60168cca6f90c1313',
name='John Doe',
type='Identity'
)

```
[[Back to top]](#) 

