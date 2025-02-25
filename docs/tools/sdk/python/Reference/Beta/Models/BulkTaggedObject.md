---
id: beta-bulk-tagged-object
title: BulkTaggedObject
pagination_label: BulkTaggedObject
sidebar_label: BulkTaggedObject
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'BulkTaggedObject', 'BetaBulkTaggedObject'] 
slug: /tools/sdk/python/beta/models/bulk-tagged-object
tags: ['SDK', 'Software Development Kit', 'BulkTaggedObject', 'BetaBulkTaggedObject']
---

# BulkTaggedObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_refs** | [**[]TaggedObjectDto**](tagged-object-dto) |  | [optional] 
**tags** | **[]str** | Label to be applied to object. | [optional] 
**operation** |  **Enum** [  'APPEND',    'MERGE' ] | If APPEND, tags are appended to the list of tags for the object. A 400 error is returned if this would add duplicate tags to the object.  If MERGE, tags are merged with the existing tags. Duplicate tags are silently ignored. | [optional] [default to 'APPEND']
}

## Example

```python
from sailpoint.beta.models.bulk_tagged_object import BulkTaggedObject

bulk_tagged_object = BulkTaggedObject(
object_refs=[
                    sailpoint.beta.models.tagged_object_dto.TaggedObjectDto(
                        type = 'IDENTITY', 
                        id = '2c91808568c529c60168cca6f90c1313', 
                        name = 'William Wilson', )
                    ],
tags=[BU_FINANCE, PCI],
operation='APPEND'
)

```
[[Back to top]](#) 

