# MachineIdentityUserEntitlementResponse

# MachineIdentityUserEntitlementResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | System-generated unique ID of the Object | [optional] 
**machine_identity_id** | **str** | System-generated unique ID of the Machine Identity | [optional] 
**source** | [**MachineIdentityUserEntitlementResponseSource**](machine-identity-user-entitlement-response-source) |  | [optional] 
**entitlement** | [**MachineIdentityUserEntitlementResponseEntitlement**](machine-identity-user-entitlement-response-entitlement) |  | [optional] 
**created** | **datetime** | Creation date of the Object | [optional] [readonly] 
\}

## Example

```python
from sailpoint.machine_identities.models.machine_identity_user_entitlement_response import MachineIdentityUserEntitlementResponse

machine_identity_user_entitlement_response = MachineIdentityUserEntitlementResponse(
id='8886e5e3-63d0-462f-a195-d98da885b8dc',
machine_identity_id='8886e5e3-63d0-462f-a195-d98da885b8dc',
source=sailpoint.machine_identities.models.machine_identity_user_entitlement_response_source.MachineIdentityUserEntitlementResponse_source(),
entitlement=sailpoint.machine_identities.models.machine_identity_user_entitlement_response_entitlement.MachineIdentityUserEntitlementResponse_entitlement(),
created='2015-05-28T14:07:17Z'
)

```
[[Back to top]](#) 

