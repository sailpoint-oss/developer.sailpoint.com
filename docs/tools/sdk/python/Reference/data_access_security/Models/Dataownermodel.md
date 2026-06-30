---
id: dataownermodel
title: Dataownermodel
pagination_label: Dataownermodel
sidebar_label: Dataownermodel
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Dataownermodel', 'Dataownermodel'] 
slug: /tools/sdk/python/data-access-security/models/dataownermodel
tags: ['SDK', 'Software Development Kit', 'Dataownermodel', 'Dataownermodel']
---

# Dataownermodel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_id** | **str** | The unique identifier (UUID) of the identity assigned as the owner of the resource. | [optional] 
**resource_id** | **int** | The unique identifier of the resource owned by the identity. | [optional] 
**full_path** | **str** | The full path to the resource within the system or application. | [optional] 
}

## Example

```python
from sailpoint.data_access_security.models.dataownermodel import Dataownermodel

dataownermodel = Dataownermodel(
identity_id='c1a2b3d4-e5f6-7890-abcd-1234567890ab',
resource_id=1001,
full_path='/departments/finance/shared'
)

```
[[Back to top]](#) 

