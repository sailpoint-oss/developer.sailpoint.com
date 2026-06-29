---
id: accessprofileupdateitem
title: Accessprofileupdateitem
pagination_label: Accessprofileupdateitem
sidebar_label: Accessprofileupdateitem
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accessprofileupdateitem', 'Accessprofileupdateitem'] 
slug: /tools/sdk/python/access-profiles/models/accessprofileupdateitem
tags: ['SDK', 'Software Development Kit', 'Accessprofileupdateitem', 'Accessprofileupdateitem']
---

# Accessprofileupdateitem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identifier of Access Profile in bulk update request. | [required]
**requestable** | **bool** | Access Profile requestable or not. | [required]
**status** | **str** |  The HTTP response status code returned for an individual Access Profile that is requested for update during a bulk update operation.  > 201   - Access profile is updated successfully.  > 404   - Access profile not found.  | [required]
**description** | **str** | Human readable status description and containing additional context information about success or failures etc.  | [optional] 
}

## Example

```python
from sailpoint.access_profiles.models.accessprofileupdateitem import Accessprofileupdateitem

accessprofileupdateitem = Accessprofileupdateitem(
id='2c7180a46faadee4016fb4e018c20642',
requestable=False,
status='201',
description='
> Access profile is updated successfully.

> Referenced Access profile with Id "2c7180a46faadee4016fb4e018c20642" was not found.
'
)

```
[[Back to top]](#) 

