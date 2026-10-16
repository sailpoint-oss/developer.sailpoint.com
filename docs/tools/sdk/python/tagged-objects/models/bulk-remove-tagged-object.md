# BulkRemoveTaggedObject

# BulkRemoveTaggedObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_refs** | [**[]TaggedObjectDto**](tagged-object-dto) |  | [optional] 
**tags** | **[]str** | Label to be applied to an Object | [optional] 
\}

## Example

```python
from sailpoint.tagged_objects.models.bulk_remove_tagged_object import BulkRemoveTaggedObject

bulk_remove_tagged_object = BulkRemoveTaggedObject(
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

