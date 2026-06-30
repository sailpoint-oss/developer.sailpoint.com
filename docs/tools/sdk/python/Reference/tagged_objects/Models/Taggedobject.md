---
id: taggedobject
title: Taggedobject
pagination_label: Taggedobject
sidebar_label: Taggedobject
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Taggedobject', 'Taggedobject'] 
slug: /tools/sdk/python/tagged-objects/models/taggedobject
tags: ['SDK', 'Software Development Kit', 'Taggedobject', 'Taggedobject']
---

# Taggedobject

Tagged object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_ref** | [**Taggedobjectdto**](taggedobjectdto) |  | [optional] 
**tags** | **[]str** | Labels to be applied to an Object | [optional] 
}

## Example

```python
from sailpoint.tagged_objects.models.taggedobject import Taggedobject

taggedobject = Taggedobject(
object_ref=sailpoint.tagged_objects.models.tagged_object_dto.Tagged Object Dto(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'William Wilson', ),
tags=["BU_FINANCE","PCI"]
)

```
[[Back to top]](#) 

