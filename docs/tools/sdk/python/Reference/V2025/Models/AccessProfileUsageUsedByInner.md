---
id: v2025-access-profile-usage-used-by-inner
title: AccessProfileUsageUsedByInner
pagination_label: AccessProfileUsageUsedByInner
sidebar_label: AccessProfileUsageUsedByInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessProfileUsageUsedByInner', 'V2025AccessProfileUsageUsedByInner'] 
slug: /tools/sdk/python/v2025/models/access-profile-usage-used-by-inner
tags: ['SDK', 'Software Development Kit', 'AccessProfileUsageUsedByInner', 'V2025AccessProfileUsageUsedByInner']
---

# AccessProfileUsageUsedByInner

Role using the access profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'ROLE' ] | DTO type of role using the access profile. | [optional] 
**id** | **str** | ID of role using the access profile. | [optional] 
**name** | **str** | Display name of role using the access profile. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.access_profile_usage_used_by_inner import AccessProfileUsageUsedByInner

access_profile_usage_used_by_inner = AccessProfileUsageUsedByInner(
type='ROLE',
id='2c8180857a9b3da0017aa03418480f9d',
name='Manager Role'
)

```
[[Back to top]](#) 

