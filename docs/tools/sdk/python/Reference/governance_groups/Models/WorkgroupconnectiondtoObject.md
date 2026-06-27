---
id: workgroupconnectiondto-object
title: WorkgroupconnectiondtoObject
pagination_label: WorkgroupconnectiondtoObject
sidebar_label: WorkgroupconnectiondtoObject
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'WorkgroupconnectiondtoObject', 'WorkgroupconnectiondtoObject'] 
slug: /tools/sdk/python/governance-groups/models/workgroupconnectiondto-object
tags: ['SDK', 'Software Development Kit', 'WorkgroupconnectiondtoObject', 'WorkgroupconnectiondtoObject']
---

# WorkgroupconnectiondtoObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**Connectedobjecttype**](connectedobjecttype) |  | [optional] 
**id** | **str** | ID of the object to which this reference applies | [optional] 
**name** | **str** | Human-readable name of Connected object | [optional] 
**description** | **str** | Description of the Connected object. | [optional] 
}

## Example

```python
from sailpoint.governance_groups.models.workgroupconnectiondto_object import WorkgroupconnectiondtoObject

workgroupconnectiondto_object = WorkgroupconnectiondtoObject(
type=,
id='2c91808568c529c60168cca6f90c1313',
name='Employee-database-read-write',
description='Collection of entitlements to read/write the employee database.'
)

```
[[Back to top]](#) 

