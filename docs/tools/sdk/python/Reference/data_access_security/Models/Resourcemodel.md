---
id: resourcemodel
title: Resourcemodel
pagination_label: Resourcemodel
sidebar_label: Resourcemodel
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Resourcemodel', 'Resourcemodel'] 
slug: /tools/sdk/python/data-access-security/models/resourcemodel
tags: ['SDK', 'Software Development Kit', 'Resourcemodel', 'Resourcemodel']
---

# Resourcemodel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The unique identifier for the resource. | [optional] 
**name** | **str** | The display name or label for the resource. | [optional] 
**full_path** | **str** | The full path to the resource within the system or application. | [optional] 
**application_id** | **int** | The unique identifier of the application to which this resource belongs. | [optional] 
**type** | [**Businessservicetype**](businessservicetype) |  | [optional] 
**owners** | **[]str** | A list of UUIDs representing the owners of the resource. | [optional] 
}

## Example

```python
from sailpoint.data_access_security.models.resourcemodel import Resourcemodel

resourcemodel = Resourcemodel(
id=1001,
name='Finance Shared Folder',
full_path='/departments/finance/shared',
application_id=2001,
type=6,
owners=["c1a2b3d4-e5f6-7890-abcd-1234567890ab","d4e5f6a7-b8c9-0123-4567-89abcdef0123"]
)

```
[[Back to top]](#) 

