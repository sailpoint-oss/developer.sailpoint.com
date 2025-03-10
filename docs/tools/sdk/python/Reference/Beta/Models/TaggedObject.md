---
id: beta-tagged-object
title: TaggedObject
pagination_label: TaggedObject
sidebar_label: TaggedObject
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'TaggedObject', 'BetaTaggedObject'] 
slug: /tools/sdk/python/beta/models/tagged-object
tags: ['SDK', 'Software Development Kit', 'TaggedObject', 'BetaTaggedObject']
---

# TaggedObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_ref** | [**TaggedObjectObjectRef**](tagged-object-object-ref) |  | [optional] 
**tags** | **[]str** | Labels to be applied to an Object | [optional] 
}

## Example

```python
from sailpoint.beta.models.tagged_object import TaggedObject

tagged_object = TaggedObject(
object_ref=sailpoint.beta.models.tagged_object_object_ref.TaggedObject_objectRef(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'William Wilson', ),
tags=[BU_FINANCE, PCI]
)

```
[[Back to top]](#) 

