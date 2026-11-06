# TypedReference

# TypedReference

A typed reference to the object. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **DtoType** |  | [required]
**id** | **str** | The id of the object.  | [required]
\}

## Example

```python
from sailpoint.saved_search.models.typed_reference import TypedReference

typed_reference = TypedReference(
type='IDENTITY',
id='2c91808568c529c60168cca6f90c1313'
)

```
[[Back to top]](#) 

