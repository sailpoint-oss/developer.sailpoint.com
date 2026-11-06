# Reference

# Reference

Reference to an identity or governance group returned in a response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Opaque identifier in the exact form required by the owning service (case, dashes, etc. must be preserved).  | [required]
**type** | **str** | The type of object being referenced. | [required]
**name** | **str** | Human-readable name for the referenced identity or governance group when known. Omitted when unknown; null is allowed in the schema when clients send or receive explicit nulls.  | [optional] 
\}

## Example

```python
from sailpoint.sod_controls.models.reference import Reference

reference = Reference(
id='943a7c57da334d07ba2454bf7fcf144f',
type='IDENTITY',
name='John Doe'
)

```
[[Back to top]](#) 

