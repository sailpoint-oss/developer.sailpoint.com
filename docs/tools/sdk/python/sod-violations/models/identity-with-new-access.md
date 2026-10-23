# IdentityWithNewAccess

# IdentityWithNewAccess

An identity with a set of access to be added

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_id** | **str** | Identity id to be checked. | [required]
**access_refs** | [**[]IdentityWithNewAccessAccessRefsInner**](identity-with-new-access-access-refs-inner) | The list of access items to consider for possible violations in a preventive check. Supported types are ENTITLEMENT, ACCESS_PROFILE, and ROLE. | [required]
\}

## Example

```python
from sailpoint.sod_violations.models.identity_with_new_access import IdentityWithNewAccess

identity_with_new_access = IdentityWithNewAccess(
identity_id='2c91808568c529c60168cca6f90c1313',
access_refs=[{"type":"ENTITLEMENT","id":"2c918087682f9a86016839c050861ab1"},{"type":"ACCESS_PROFILE","id":"2c918087682f9a86016839c0509c1ab2"},{"type":"ROLE","id":"2c918087682f9a86016839c050a01ab3"}]
)

```
[[Back to top]](#) 

