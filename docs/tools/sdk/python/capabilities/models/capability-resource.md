# CapabilityResource

# CapabilityResource

The source resource a capability is derived from.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The source resource identifier. | [optional] 
**type** | **str** | The type of the source resource. | [optional] 
**name** | **str** | The display name of the source resource. | [optional] 
**features** | **[]str** | The set of features supported by the source resource. | [optional] 
\}

## Example

```python
from sailpoint.capabilities.models.capability_resource import CapabilityResource

capability_resource = CapabilityResource(
id='8886e5e3-63d0-462f-a195-d98da885b8dc',
type='mcp-server',
name='ticketing-mcp',
features=["PROVISIONING"]
)

```
[[Back to top]](#) 

