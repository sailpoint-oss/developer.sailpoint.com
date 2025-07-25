---
id: v2024-bulk-tagged-object-response
title: BulkTaggedObjectResponse
pagination_label: BulkTaggedObjectResponse
sidebar_label: BulkTaggedObjectResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'BulkTaggedObjectResponse', 'V2024BulkTaggedObjectResponse'] 
slug: /tools/sdk/python/v2024/models/bulk-tagged-object-response
tags: ['SDK', 'Software Development Kit', 'BulkTaggedObjectResponse', 'V2024BulkTaggedObjectResponse']
---

# BulkTaggedObjectResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_refs** | [**[]TaggedObjectDto**](tagged-object-dto) |  | [optional] 
**tags** | **[]str** | Label to be applied to an Object | [optional] 
}

## Example

```python
from sailpoint.v2024.models.bulk_tagged_object_response import BulkTaggedObjectResponse

bulk_tagged_object_response = BulkTaggedObjectResponse(
object_refs=[
                    sailpoint.v2024.models.tagged_object_dto.Tagged Object Dto(
                        type = 'IDENTITY', 
                        id = '2c91808568c529c60168cca6f90c1313', 
                        name = 'William Wilson', )
                    ],
tags=[BU_FINANCE, PCI]
)

```
[[Back to top]](#) 

