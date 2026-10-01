# RoleMembershipIdentity

# RoleMembershipIdentity

A reference to an Identity in an IDENTITY_LIST role membership criteria.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **DtoType** |  | [optional] 
**id** | **str** | Identity id | [optional] 
**name** | **str** | Human-readable display name of the Identity. | [optional] 
**alias_name** | **str** | User name of the Identity | [optional] 
\}

## Example

```python
from sailpoint.roles.models.role_membership_identity import RoleMembershipIdentity

role_membership_identity = RoleMembershipIdentity(
type='IDENTITY',
id='2c9180a46faadee4016fb4e018c20639',
name='Thomas Edison',
alias_name='t.edison'
)

```
[[Back to top]](#) 

