---
id: accessprofileusage-used-by-inner
title: AccessprofileusageUsedByInner
pagination_label: AccessprofileusageUsedByInner
sidebar_label: AccessprofileusageUsedByInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessprofileusageUsedByInner', 'AccessprofileusageUsedByInner'] 
slug: /tools/sdk/python/access-profiles/models/accessprofileusage-used-by-inner
tags: ['SDK', 'Software Development Kit', 'AccessprofileusageUsedByInner', 'AccessprofileusageUsedByInner']
---

# AccessprofileusageUsedByInner

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
from sailpoint.access_profiles.models.accessprofileusage_used_by_inner import AccessprofileusageUsedByInner

accessprofileusage_used_by_inner = AccessprofileusageUsedByInner(
type='ROLE',
id='2c8180857a9b3da0017aa03418480f9d',
name='Manager Role'
)

```
[[Back to top]](#) 

