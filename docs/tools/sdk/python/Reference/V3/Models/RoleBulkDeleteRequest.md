---
id: role-bulk-delete-request
title: RoleBulkDeleteRequest
pagination_label: RoleBulkDeleteRequest
sidebar_label: RoleBulkDeleteRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleBulkDeleteRequest', 'RoleBulkDeleteRequest'] 
slug: /tools/sdk/python/v3/models/role-bulk-delete-request
tags: ['SDK', 'Software Development Kit', 'RoleBulkDeleteRequest', 'RoleBulkDeleteRequest']
---

# RoleBulkDeleteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role_ids** | **[]str** | List of IDs of Roles to be deleted. | [required]
}

## Example

```python
from sailpoint.v3.models.role_bulk_delete_request import RoleBulkDeleteRequest

role_bulk_delete_request = RoleBulkDeleteRequest(
role_ids=[2c9180847812e0b1017817051919ecca, 2c9180887812e0b201781e129f151816]
)

```
[[Back to top]](#) 

