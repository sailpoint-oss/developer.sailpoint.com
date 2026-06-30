---
id: bulkaddtaggedobject
title: Bulkaddtaggedobject
pagination_label: Bulkaddtaggedobject
sidebar_label: Bulkaddtaggedobject
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Bulkaddtaggedobject', 'Bulkaddtaggedobject'] 
slug: /tools/sdk/python/tagged-objects/models/bulkaddtaggedobject
tags: ['SDK', 'Software Development Kit', 'Bulkaddtaggedobject', 'Bulkaddtaggedobject']
---

# Bulkaddtaggedobject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_refs** | [**[]Taggedobjectdto**](taggedobjectdto) |  | [optional] 
**tags** | **[]str** | Label to be applied to an Object | [optional] 
**operation** |  **Enum** [  'APPEND',    'MERGE' ] | If APPEND, tags are appended to the list of tags for the object. A 400 error is returned if this would add duplicate tags to the object.  If MERGE, tags are merged with the existing tags. Duplicate tags are silently ignored. | [optional] [default to 'APPEND']
}

## Example

```python
from sailpoint.tagged_objects.models.bulkaddtaggedobject import Bulkaddtaggedobject

bulkaddtaggedobject = Bulkaddtaggedobject(
object_refs=[
                    sailpoint.tagged_objects.models.tagged_object_dto.Tagged Object Dto(
                        type = 'IDENTITY', 
                        id = '2c91808568c529c60168cca6f90c1313', 
                        name = 'William Wilson', )
                    ],
tags=["BU_FINANCE","PCI"],
operation='APPEND'
)

```
[[Back to top]](#) 

