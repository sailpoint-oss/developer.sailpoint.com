# RolePrivilegeLevel

# RolePrivilegeLevel

Privilege level of the role. The effective level is the highest effective privilege level among the entitlements assigned directly to the role and the entitlements included in the role's access profiles.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**effective** |  **Enum** [  'NONE',    'LOW',    'MEDIUM',    'HIGH',    'UNDETERMINED' ] | Effective privilege level of the role. **UNDETERMINED** means the privilege level could not be calculated for the role's entitlements. | [optional] 
\}

## Example

```python
from sailpoint.roles.models.role_privilege_level import RolePrivilegeLevel

role_privilege_level = RolePrivilegeLevel(
effective='HIGH'
)

```
[[Back to top]](#) 

