---
id: v2024-bulk-add-tagged-object
title: BulkAddTaggedObject
pagination_label: BulkAddTaggedObject
sidebar_label: BulkAddTaggedObject
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'BulkAddTaggedObject', 'V2024BulkAddTaggedObject'] 
slug: /tools/sdk/python/v2024/models/bulk-add-tagged-object
tags: ['SDK', 'Software Development Kit', 'BulkAddTaggedObject', 'V2024BulkAddTaggedObject']
---

# BulkAddTaggedObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_refs** | [**[]TaggedObjectDto**](tagged-object-dto) |  | [optional] 
**tags** | **[]str** | Label to be applied to an Object | [optional] 
**operation** |  **Enum** [  'APPEND',    'MERGE' ] | If APPEND, tags are appended to the list of tags for the object. A 400 error is returned if this would add duplicate tags to the object.  If MERGE, tags are merged with the existing tags. Duplicate tags are silently ignored. | [optional] [default to 'APPEND']
}

## Example

```python
from sailpoint.v2024.models.bulk_add_tagged_object import BulkAddTaggedObject

bulk_add_tagged_object = BulkAddTaggedObject(
object_refs=[
                    sailpoint.v2024.models.tagged_object_dto.Tagged Object Dto(
                        type = 'IDENTITY', 
                        id = '2c91808568c529c60168cca6f90c1313', 
                        name = 'William Wilson', )
                    ],
tags=[BU_FINANCE, PCI],
operation='APPEND'
)

```
[[Back to top]](#) 

