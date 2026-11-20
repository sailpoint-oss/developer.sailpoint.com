# AccessProfilePrivilegeLevel

# AccessProfilePrivilegeLevel

Effective privilege level calculated for the access profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**effective** |  **Enum** [  'NONE',    'LOW',    'MEDIUM',    'HIGH',    'UNDETERMINED' ] | Effective privilege level of the access profile, derived from the highest privilege level of the entitlements it contains. `UNDETERMINED` indicates the level could not be calculated. | [optional] 
\}

## Example

```python
from sailpoint.access_profiles.models.access_profile_privilege_level import AccessProfilePrivilegeLevel

access_profile_privilege_level = AccessProfilePrivilegeLevel(
effective='MEDIUM'
)

```
[[Back to top]](#) 

