# SodPolicySecondaryOwnerRefsInner

# SodPolicySecondaryOwnerRefsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY',    'GOVERNANCE_GROUP' ] | Secondary Owner Type | [optional] 
**id** | **str** | Secondary Owner ID | [optional] 
**name** | **str** | Secondary Owner Name | [optional] 
\}

## Example

```python
from sailpoint.sod_policies.models.sod_policy_secondary_owner_refs_inner import SodPolicySecondaryOwnerRefsInner

sod_policy_secondary_owner_refs_inner = SodPolicySecondaryOwnerRefsInner(
type='IDENTITY',
id='2c9180a46faadee4016fb4e018c20639',
name='Support'
)

```
[[Back to top]](#) 

