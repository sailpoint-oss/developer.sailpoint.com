# ConvertEntitlementConnectionResponse

# ConvertEntitlementConnectionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_id** | **str** | The ID of the converted entitlement connection. | [required]
**type** |  **Enum** [  'JIT',    'STANDING' ] | The current assignment type of the entitlement connection, not the target type. | [required]
**state** | **str** | The current state of the entitlement connection. Conversion starts as PENDING. | [required]
\}

## Example

```python
from sailpoint.jit_activation_convert.models.convert_entitlement_connection_response import ConvertEntitlementConnectionResponse

convert_entitlement_connection_response = ConvertEntitlementConnectionResponse(
connection_id='757fb803-9024-5861-e510-83a56e4c5bd3',
type='JIT',
state='PENDING'
)

```
[[Back to top]](#) 

