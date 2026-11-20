# MachineAccountLinkedMachineIdentityAllOfOwners

# MachineAccountLinkedMachineIdentityAllOfOwners

The owners of the machine identity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary_identity** | [**BaseReferenceDto**](base-reference-dto) | The identity selected as the primary owner. | [optional] 
**secondary_identities** | [**[]BaseReferenceDto**](base-reference-dto) | The identities selected as secondary owners. | [optional] 
\}

## Example

```python
from sailpoint.machine_accounts.models.machine_account_linked_machine_identity_all_of_owners import MachineAccountLinkedMachineIdentityAllOfOwners

machine_account_linked_machine_identity_all_of_owners = MachineAccountLinkedMachineIdentityAllOfOwners(
primary_identity=sailpoint.machine_accounts.models.base_reference_dto.Base Reference Dto(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'William Wilson', ),
secondary_identities=[{"id":"2c9180858082150f0180893dbaf44202","type":"IDENTITY","name":"Jane Doe"}]
)

```
[[Back to top]](#) 

