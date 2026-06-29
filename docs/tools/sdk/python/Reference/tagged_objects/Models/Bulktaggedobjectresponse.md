---
id: bulktaggedobjectresponse
title: Bulktaggedobjectresponse
pagination_label: Bulktaggedobjectresponse
sidebar_label: Bulktaggedobjectresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Bulktaggedobjectresponse', 'Bulktaggedobjectresponse'] 
slug: /tools/sdk/python/tagged-objects/models/bulktaggedobjectresponse
tags: ['SDK', 'Software Development Kit', 'Bulktaggedobjectresponse', 'Bulktaggedobjectresponse']
---

# Bulktaggedobjectresponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_refs** | [**[]Taggedobjectdto**](taggedobjectdto) |  | [optional] 
**tags** | **[]str** | Label to be applied to an Object | [optional] 
}

## Example

```python
from sailpoint.tagged_objects.models.bulktaggedobjectresponse import Bulktaggedobjectresponse

bulktaggedobjectresponse = Bulktaggedobjectresponse(
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

