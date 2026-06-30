---
id: bulkremovetaggedobject
title: Bulkremovetaggedobject
pagination_label: Bulkremovetaggedobject
sidebar_label: Bulkremovetaggedobject
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Bulkremovetaggedobject', 'Bulkremovetaggedobject'] 
slug: /tools/sdk/python/tagged-objects/models/bulkremovetaggedobject
tags: ['SDK', 'Software Development Kit', 'Bulkremovetaggedobject', 'Bulkremovetaggedobject']
---

# Bulkremovetaggedobject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_refs** | [**[]Taggedobjectdto**](taggedobjectdto) |  | [optional] 
**tags** | **[]str** | Label to be applied to an Object | [optional] 
}

## Example

```python
from sailpoint.tagged_objects.models.bulkremovetaggedobject import Bulkremovetaggedobject

bulkremovetaggedobject = Bulkremovetaggedobject(
object_refs=[
                    sailpoint.tagged_objects.models.tagged_object_dto.Tagged Object Dto(
                        type = 'IDENTITY', 
                        id = '2c91808568c529c60168cca6f90c1313', 
                        name = 'William Wilson', )
                    ],
tags=["BU_FINANCE","PCI"]
)

```
[[Back to top]](#) 

