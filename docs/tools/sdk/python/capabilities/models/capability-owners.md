# CapabilityOwners

# CapabilityOwners

Owner configuration for a capability. A single primary (human IDENTITY) owner plus additional owners that are either up to ten human (IDENTITY) references or exactly one GOVERNANCE_GROUP reference - not both.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary** | [**CapabilityOwnersPrimary**](capability-owners-primary) |  | [optional] 
**secondary** | [**[]BaseReferenceDto**](base-reference-dto) | Additional owners. Entries are either up to ten human (IDENTITY) references or exactly one GOVERNANCE_GROUP reference - not both. Governance-group owners appear here with type GOVERNANCE_GROUP. | [optional] 
\}

## Example

```python
from sailpoint.capabilities.models.capability_owners import CapabilityOwners

capability_owners = CapabilityOwners(
primary=,
secondary=[{"id":"2c9180858082150f0180893dbaf44202","name":"Jane Doe","type":"IDENTITY"}]
)

```
[[Back to top]](#) 

