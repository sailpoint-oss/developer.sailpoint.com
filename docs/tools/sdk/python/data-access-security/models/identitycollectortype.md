# Identitycollectortype

# Identitycollectortype

A public identity collector type and the ISC `connectorName` values the UI should use when querying `GET /v3/sources` for sources that can back that type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Identity collector type display name. Matches the `type` values returned by list and used by create/update metadata. Base types only (for example `Box`, not `Box SaaS`). | [required]
**isc_connector_names** | **[]str** | Exact ISC `connectorName` values to use in `GET /v3/sources` filters (`connectorName eq \"...\"`). These are not always equal to `type` (for example Google Drive maps to `G Suite` and `Google Workspace SaaS`). | [required]
\}

## Example

```python
from sailpoint.data_access_security.models.identitycollectortype import Identitycollectortype

identitycollectortype = Identitycollectortype(
type='Google Drive',
isc_connector_names=["G Suite","Google Workspace SaaS"]
)

```
[[Back to top]](#) 

