---
id: accessprofilebulkdeleterequest
title: Accessprofilebulkdeleterequest
pagination_label: Accessprofilebulkdeleterequest
sidebar_label: Accessprofilebulkdeleterequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accessprofilebulkdeleterequest', 'Accessprofilebulkdeleterequest'] 
slug: /tools/sdk/python/access-profiles/models/accessprofilebulkdeleterequest
tags: ['SDK', 'Software Development Kit', 'Accessprofilebulkdeleterequest', 'Accessprofilebulkdeleterequest']
---

# Accessprofilebulkdeleterequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_profile_ids** | **[]str** | List of IDs of Access Profiles to be deleted. | [optional] 
**best_effort_only** | **bool** | If **true**, silently skip over any of the specified Access Profiles if they cannot be deleted because they are in use. If **false**, no deletions will be attempted if any of the Access Profiles are in use. | [optional] 
}

## Example

```python
from sailpoint.access_profiles.models.accessprofilebulkdeleterequest import Accessprofilebulkdeleterequest

accessprofilebulkdeleterequest = Accessprofilebulkdeleterequest(
access_profile_ids=["2c9180847812e0b1017817051919ecca","2c9180887812e0b201781e129f151816"],
best_effort_only=True
)

```
[[Back to top]](#) 

