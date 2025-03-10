---
id: v2024-access-profile-bulk-delete-request
title: AccessProfileBulkDeleteRequest
pagination_label: AccessProfileBulkDeleteRequest
sidebar_label: AccessProfileBulkDeleteRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessProfileBulkDeleteRequest', 'V2024AccessProfileBulkDeleteRequest'] 
slug: /tools/sdk/python/v2024/models/access-profile-bulk-delete-request
tags: ['SDK', 'Software Development Kit', 'AccessProfileBulkDeleteRequest', 'V2024AccessProfileBulkDeleteRequest']
---

# AccessProfileBulkDeleteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_profile_ids** | **[]str** | List of IDs of Access Profiles to be deleted. | [optional] 
**best_effort_only** | **bool** | If **true**, silently skip over any of the specified Access Profiles if they cannot be deleted because they are in use. If **false**, no deletions will be attempted if any of the Access Profiles are in use. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.access_profile_bulk_delete_request import AccessProfileBulkDeleteRequest

access_profile_bulk_delete_request = AccessProfileBulkDeleteRequest(
access_profile_ids=[2c9180847812e0b1017817051919ecca, 2c9180887812e0b201781e129f151816],
best_effort_only=True
)

```
[[Back to top]](#) 

