# MachineIdentityOwnersV2

# MachineIdentityOwnersV2

Owner configuration for a machine identity. A single primary (human IDENTITY) owner plus additional owners that are either up to ten human (IDENTITY) references or exactly one GOVERNANCE_GROUP reference - not both.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary** | [**MachineIdentityOwnersV2Primary**](machine-identity-owners-v2-primary) |  | [optional] 
**secondary** | [**[]BaseReferenceDto**](base-reference-dto) | Additional owners. Entries are either up to ten human (IDENTITY) references or exactly one GOVERNANCE_GROUP reference - not both. Governance-group owners appear here with type GOVERNANCE_GROUP. | [optional] 
\}

## Example

```python
from sailpoint.machine_identities.models.machine_identity_owners_v2 import MachineIdentityOwnersV2

machine_identity_owners_v2 = MachineIdentityOwnersV2(
primary=,
secondary=[{"id":"2c9180858082150f0180893dbaf44202","name":"Jane Doe","type":"IDENTITY"}]
)

```
[[Back to top]](#) 

