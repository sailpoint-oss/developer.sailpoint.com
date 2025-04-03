---
id: v2025-workgroup-connection-dto-object
title: WorkgroupConnectionDtoObject
pagination_label: WorkgroupConnectionDtoObject
sidebar_label: WorkgroupConnectionDtoObject
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'WorkgroupConnectionDtoObject', 'V2025WorkgroupConnectionDtoObject'] 
slug: /tools/sdk/python/v2025/models/workgroup-connection-dto-object
tags: ['SDK', 'Software Development Kit', 'WorkgroupConnectionDtoObject', 'V2025WorkgroupConnectionDtoObject']
---

# WorkgroupConnectionDtoObject


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
from sailpoint.v2025.models.workgroup_connection_dto_object import WorkgroupConnectionDtoObject

workgroup_connection_dto_object = WorkgroupConnectionDtoObject(
type=,
id='2c91808568c529c60168cca6f90c1313',
name='Employee-database-read-write',
description='Collection of entitlements to read/write the employee database.'
)

```
[[Back to top]](#) 

