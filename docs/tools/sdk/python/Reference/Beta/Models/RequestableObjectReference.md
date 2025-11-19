---
id: beta-requestable-object-reference
title: RequestableObjectReference
pagination_label: RequestableObjectReference
sidebar_label: RequestableObjectReference
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RequestableObjectReference', 'BetaRequestableObjectReference'] 
slug: /tools/sdk/python/beta/models/requestable-object-reference
tags: ['SDK', 'Software Development Kit', 'RequestableObjectReference', 'BetaRequestableObjectReference']
---

# RequestableObjectReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Id of the object. | [optional] 
**name** | **str** | Name of the object. | [optional] 
**description** | **str** | Description of the object. | [optional] 
**type** |  **Enum** [  'ACCESS_PROFILE',    'ROLE',    'ENTITLEMENT' ] | Type of the object. | [optional] 
}

## Example

```python
from sailpoint.beta.models.requestable_object_reference import RequestableObjectReference

requestable_object_reference = RequestableObjectReference(
id='2c938083633d259901633d25c68c00fa',
name='Object Name',
description='Object Description',
type='ROLE'
)

```
[[Back to top]](#) 

