# RoleMiningPotentialRoleProvisionRequest

# RoleMiningPotentialRoleProvisionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role_name** | **str** | Name of the new role being created | [optional] 
**role_description** | **str** | Short description of the new role being created | [optional] 
**owner_id** | **str** | ID of the identity that will own this role | [optional] 
**include_identities** | **bool** | When true, create access requests for the identities associated with the potential role | [optional] [default to False]
**directly_assigned_entitlements** | **bool** | When true, assign entitlements directly to the role; otherwise, create access profiles containing the entitlements | [optional] [default to False]
\}

## Example

```python
from sailpoint.iai_role_mining.models.role_mining_potential_role_provision_request import RoleMiningPotentialRoleProvisionRequest

role_mining_potential_role_provision_request = RoleMiningPotentialRoleProvisionRequest(
role_name='Finance - Accounting',
role_description='General access for accounting department',
owner_id='2b568c65bc3c4c57a43bd97e3a8e41',
include_identities=True,
directly_assigned_entitlements=False
)

```
[[Back to top]](#) 

