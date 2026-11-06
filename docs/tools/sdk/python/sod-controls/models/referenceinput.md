# Referenceinput

# Referenceinput

Reference to an identity or governance group supplied on a request body.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Opaque identifier in the exact form required by the owning service (case, dashes, etc. must be preserved).  | [required]
**type** |  **Enum** [  'IDENTITY',    'GOVERNANCE_GROUP' ] | The type of object being referenced. | [required]
\}

## Example

```python
from sailpoint.sod_controls.models.referenceinput import Referenceinput

referenceinput = Referenceinput(
id='3e07886555ed43cfb83c85c58d2016e6',
type='IDENTITY'
)

```
[[Back to top]](#) 

