# MachineAccountLinkedMachineIdentityAllOfUserEntitlements

# MachineAccountLinkedMachineIdentityAllOfUserEntitlements


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_id** | **str** | ID of the source the entitlement belongs to. | [optional] 
**entitlement_id** | **str** | ID of the entitlement. | [optional] 
**display_name** | **str** | The display name of the entitlement. | [optional] 
**source** | [**BaseReferenceDto**](base-reference-dto) | The source the entitlement belongs to. | [optional] 
\}

## Example

```python
from sailpoint.machine_accounts.models.machine_account_linked_machine_identity_all_of_user_entitlements import MachineAccountLinkedMachineIdentityAllOfUserEntitlements

machine_account_linked_machine_identity_all_of_user_entitlements = MachineAccountLinkedMachineIdentityAllOfUserEntitlements(
source_id='8d3e0094e99445de98eef6c75e25jc04',
entitlement_id='2c9180835d2e5168015d32f890ca1581',
display_name='Administrators',
source=sailpoint.machine_accounts.models.base_reference_dto.Base Reference Dto(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'William Wilson', )
)

```
[[Back to top]](#) 

