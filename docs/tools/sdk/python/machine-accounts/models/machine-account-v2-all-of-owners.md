# MachineAccountV2AllOfOwners

# MachineAccountV2AllOfOwners

The owners of the machine account: a primary owner plus secondary owners, which are either up to ten identities or one governance group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary** | [**BaseReferenceDto**](base-reference-dto) | The identity selected as the primary owner. | [optional] 
**secondary** | [**[]BaseReferenceDto**](base-reference-dto) | The secondary owners. Entries are either up to ten identities (type `IDENTITY`) or one governance group (type `GOVERNANCE_GROUP`), not both. | [optional] 
\}

## Example

```python
from sailpoint.machine_accounts.models.machine_account_v2_all_of_owners import MachineAccountV2AllOfOwners

machine_account_v2_all_of_owners = MachineAccountV2AllOfOwners(
primary=sailpoint.machine_accounts.models.base_reference_dto.Base Reference Dto(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'William Wilson', ),
secondary=[{"id":"2c9180858082150f0180893dbaf44202","type":"IDENTITY","name":"Jane Doe"}]
)

```
[[Back to top]](#) 

