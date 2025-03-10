---
id: v2024-connected-object
title: ConnectedObject
pagination_label: ConnectedObject
sidebar_label: ConnectedObject
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ConnectedObject', 'V2024ConnectedObject'] 
slug: /tools/sdk/python/v2024/models/connected-object
tags: ['SDK', 'Software Development Kit', 'ConnectedObject', 'V2024ConnectedObject']
---

# ConnectedObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**ConnectedObjectType**](connected-object-type) |  | [optional] 
**id** | **str** | ID of the object to which this reference applies | [optional] 
**name** | **str** | Human-readable name of Connected object | [optional] 
**description** | **str** | Description of the Connected object. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.connected_object import ConnectedObject

connected_object = ConnectedObject(
type=,
id='2c91808568c529c60168cca6f90c1313',
name='Employee-database-read-write',
description='Collection of entitlements to read/write the employee database.'
)

```
[[Back to top]](#) 

