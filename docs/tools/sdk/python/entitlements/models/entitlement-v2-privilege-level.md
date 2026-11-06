# EntitlementV2PrivilegeLevel

# EntitlementV2PrivilegeLevel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direct** |  **Enum** [  'HIGH',    'LOW',    'MEDIUM',    'NONE' ] | Direct privilege level assigned to the entitlement | [optional] 
**set_by** | **str** | User or process that set the privilege level | [optional] 
**set_by_type** |  **Enum** [  'OVERRIDE',    'CUSTOM_CRITERIA',    'CONNECTOR_CRITERIA',    'SINGLE_LEVEL_CRITERIA' ] | Method by which the privilege level was set | [optional] 
**inherited** |  **Enum** [  'HIGH',    'LOW',    'MEDIUM',    'NONE' ] | Inherited privilege level on the entitlement, if any | [optional] 
**effective** |  **Enum** [  'HIGH',    'LOW',    'MEDIUM',    'NONE' ] | Effective privilege level assigned to the entitlement | [optional] 
\}

## Example

```python
from sailpoint.entitlements.models.entitlement_v2_privilege_level import EntitlementV2PrivilegeLevel

entitlement_v2_privilege_level = EntitlementV2PrivilegeLevel(
direct='HIGH',
set_by='SAILPOINT_MIGRATION',
set_by_type='OVERRIDE',
inherited='HIGH',
effective='HIGH'
)

```
[[Back to top]](#) 

