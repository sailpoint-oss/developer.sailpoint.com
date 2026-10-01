# UserEntitlementV2

# UserEntitlementV2

A user entitlement associated to a machine identity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_id** | **str** | The source ID of the entitlement. | [optional] 
**entitlement_id** | **str** | The ID of the entitlement. | [optional] 
**display_name** | **str** | The display name of the entitlement. | [optional] 
**source** | [**UserEntitlementV2Source**](user-entitlement-v2-source) |  | [optional] 
\}

## Example

```python
from sailpoint.machine_identities.models.user_entitlement_v2 import UserEntitlementV2

user_entitlement_v2 = UserEntitlementV2(
source_id='5898b7c1-620c-49c6-cccc-cbf81eb4bddd',
entitlement_id='6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa',
display_name='Entitlement Name',
source=
)

```
[[Back to top]](#) 

