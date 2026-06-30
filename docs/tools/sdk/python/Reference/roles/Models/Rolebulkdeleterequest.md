---
id: rolebulkdeleterequest
title: Rolebulkdeleterequest
pagination_label: Rolebulkdeleterequest
sidebar_label: Rolebulkdeleterequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Rolebulkdeleterequest', 'Rolebulkdeleterequest'] 
slug: /tools/sdk/python/roles/models/rolebulkdeleterequest
tags: ['SDK', 'Software Development Kit', 'Rolebulkdeleterequest', 'Rolebulkdeleterequest']
---

# Rolebulkdeleterequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role_ids** | **[]str** | List of IDs of Roles to be deleted. | [required]
}

## Example

```python
from sailpoint.roles.models.rolebulkdeleterequest import Rolebulkdeleterequest

rolebulkdeleterequest = Rolebulkdeleterequest(
role_ids=["2c9180847812e0b1017817051919ecca","2c9180887812e0b201781e129f151816"]
)

```
[[Back to top]](#) 

