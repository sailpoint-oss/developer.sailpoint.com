# AccountSourceReference

# AccountSourceReference

Details about the account source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the source. | [required]
**name** | **str** | The name of the source. | [required]
**alias** | **str** | The alias of the source. | [required]
**owner** | [**AccountSourceReferenceOwner**](account-source-reference-owner) |  | [required]
**governance_group** | [**AccountSourceReferenceGovernanceGroup**](account-source-reference-governance-group) |  | [required]
\}

## Example

```python
from sailpoint.triggers.models.account_source_reference import AccountSourceReference

account_source_reference = AccountSourceReference(
id='2c918082814e693601816e09471b29b6',
name='Active Directory',
alias='AD',
owner=sailpoint.triggers.models.account_source_reference_owner.AccountSourceReference_owner(
                    id = 'owner-123', 
                    name = 'owner-name', ),
governance_group=sailpoint.triggers.models.account_source_reference_governance_group.AccountSourceReference_governanceGroup(
                    id = 'group-456', 
                    name = 'governance-group-name', )
)

```
[[Back to top]](#) 

