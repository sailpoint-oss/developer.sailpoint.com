# IdentityV2PrivilegeLevel

# IdentityV2PrivilegeLevel

Effective privilege level of the identity. This object is null when the IDNARC_ENABLE_IDENTITY_EFFECTIVE_PRIVILEGE feature flag is disabled. When the flag is enabled, an identity with no privilege level is returned with effective set to NONE.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**effective** |  **Enum** [  'HIGH',    'MEDIUM',    'LOW',    'NONE' ] | The effective privilege level of the identity. Returned values are uppercase. Filter and sort comparisons are case-insensitive. An identity with no privilege level is NONE. | [optional] 
\}

## Example

```python
from sailpoint.identities.models.identity_v2_privilege_level import IdentityV2PrivilegeLevel

identity_v2_privilege_level = IdentityV2PrivilegeLevel(
effective='HIGH'
)

```
[[Back to top]](#) 

