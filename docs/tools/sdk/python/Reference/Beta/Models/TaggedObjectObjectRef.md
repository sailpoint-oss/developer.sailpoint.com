---
id: beta-tagged-object-object-ref
title: TaggedObjectObjectRef
pagination_label: TaggedObjectObjectRef
sidebar_label: TaggedObjectObjectRef
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'TaggedObjectObjectRef', 'BetaTaggedObjectObjectRef'] 
slug: /tools/sdk/python/beta/models/tagged-object-object-ref
tags: ['SDK', 'Software Development Kit', 'TaggedObjectObjectRef', 'BetaTaggedObjectObjectRef']
---

# TaggedObjectObjectRef


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'ACCESS_PROFILE',    'APPLICATION',    'CAMPAIGN',    'ENTITLEMENT',    'IDENTITY',    'ROLE',    'SOD_POLICY',    'SOURCE' ] | DTO type | [optional] 
**id** | **str** | ID of the object to which this reference applies | [optional] 
**name** | **str** | Human-readable display name of the object to which this reference applies | [optional] 
}

## Example

```python
from sailpoint.beta.models.tagged_object_object_ref import TaggedObjectObjectRef

tagged_object_object_ref = TaggedObjectObjectRef(
type='IDENTITY',
id='2c91808568c529c60168cca6f90c1313',
name='William Wilson'
)

```
[[Back to top]](#) 

