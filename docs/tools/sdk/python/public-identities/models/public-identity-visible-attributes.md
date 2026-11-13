# PublicIdentityVisibleAttributes

# PublicIdentityVisibleAttributes

Default and configured identity attribute keys with display names exposed by the public identities API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_attributes** | [**[]PublicIdentityAttributeConfig**](public-identity-attribute-config) | Always-available public-identity field keys for search and sort. Fixed platform list. `key` is the search field name; `name` is the display label. | [required]
**configured_attributes** | [**[]PublicIdentityAttributeConfig**](public-identity-attribute-config) | Tenant-configured public attributes from public-identities config (same source as public-identities-config). These keys are also allowed in search/sort and appear under `attributes` on search results. | [required]
\}

## Example

```python
from sailpoint.public_identities.models.public_identity_visible_attributes import PublicIdentityVisibleAttributes

public_identity_visible_attributes = PublicIdentityVisibleAttributes(
default_attributes=[{"key":"id","name":"id"},{"key":"email","name":"email"},{"key":"manager.displayName","name":"manager name"}],
configured_attributes=[{"key":"displayName","name":"Display Name"},{"key":"lastSyncDate","name":"Last Sync Date"}]
)

```
[[Back to top]](#) 

