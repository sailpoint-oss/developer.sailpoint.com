# TaggedObject

# TaggedObject

Tagged object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_ref** | [**TaggedObjectDto**](tagged-object-dto) |  | [optional] 
**tags** | **[]str** | Labels to be applied to an Object | [optional] 
\}

## Example

```python
from sailpoint.tagged_objects.models.tagged_object import TaggedObject

tagged_object = TaggedObject(
object_ref=sailpoint.tagged_objects.models.tagged_object_dto.Tagged Object Dto(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'William Wilson', ),
tags=["BU_FINANCE","PCI"]
)

```
[[Back to top]](#) 

