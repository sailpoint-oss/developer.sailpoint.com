# CredentialOwners

# CredentialOwners

Owner configuration for a credential. A single primary (human IDENTITY) owner plus additional owners that are either up to ten human (IDENTITY) references or exactly one GOVERNANCE_GROUP reference - not both.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary** | [**CredentialOwnersPrimary**](credential-owners-primary) |  | [optional] 
**secondary** | [**[]BaseReferenceDto**](base-reference-dto) | Additional owners. Entries are either up to ten human (IDENTITY) references or exactly one GOVERNANCE_GROUP reference - not both. Governance-group owners appear here with type GOVERNANCE_GROUP. | [optional] 
\}

## Example

```python
from sailpoint.credentials.models.credential_owners import CredentialOwners

credential_owners = CredentialOwners(
primary=,
secondary=[{"id":"2c9180858082150f0180893dbaf44202","name":"Jane Doe","type":"IDENTITY"}]
)

```
[[Back to top]](#) 

