# EntitlementV2Owner

# EntitlementV2Owner

The identity that owns the entitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The identity ID | [optional] 
**type** |  **Enum** [  'IDENTITY' ] | The type of object | [optional] 
**name** | **str** | The display name of the identity | [optional] 
\}

## Example

```python
from sailpoint.entitlements.models.entitlement_v2_owner import EntitlementV2Owner

entitlement_v2_owner = EntitlementV2Owner(
id='2c9180827ca885d7017ca8ce28a000eb',
type='IDENTITY',
name='john.doe'
)

```
[[Back to top]](#) 

