# IdentityWithNewAccessAccessRefsInner

# IdentityWithNewAccessAccessRefsInner

Reference to an access item that may contribute to an SOD violation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'ENTITLEMENT',    'ACCESS_PROFILE',    'ROLE' ] | Access item DTO type. | [optional] 
**id** | **str** | Access item ID. | [optional] 
\}

## Example

```python
from sailpoint.sod_violations.models.identity_with_new_access_access_refs_inner import IdentityWithNewAccessAccessRefsInner

identity_with_new_access_access_refs_inner = IdentityWithNewAccessAccessRefsInner(
type='ENTITLEMENT',
id='2c91809773dee32014e13e122092014e'
)

```
[[Back to top]](#) 

