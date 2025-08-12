---
id: v2025-tagged-object
title: TaggedObject
pagination_label: TaggedObject
sidebar_label: TaggedObject
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'TaggedObject', 'V2025TaggedObject'] 
slug: /tools/sdk/python/v2025/models/tagged-object
tags: ['SDK', 'Software Development Kit', 'TaggedObject', 'V2025TaggedObject']
---

# TaggedObject

Tagged object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_ref** | [**TaggedObjectDto**](tagged-object-dto) |  | [optional] 
**tags** | **[]str** | Labels to be applied to an Object | [optional] 
}

## Example

```python
from sailpoint.v2025.models.tagged_object import TaggedObject

tagged_object = TaggedObject(
object_ref=sailpoint.v2025.models.tagged_object_dto.Tagged Object Dto(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'William Wilson', ),
tags=[BU_FINANCE, PCI]
)

```
[[Back to top]](#) 

