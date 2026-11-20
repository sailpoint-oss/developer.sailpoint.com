# PublicIdentityVisibleAttributes

# PublicIdentityVisibleAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**defaultAttributes** | `Array<PublicIdentityAttributeConfig>` | Always-available public-identity field keys for search and sort. Fixed platform list. `key` is the search field name; `name` is the display label. | [default to undefined]
**configuredAttributes** | `Array<PublicIdentityAttributeConfig>` | Tenant-configured public attributes from public-identities config (same source as public-identities-config). These keys are also allowed in search/sort and appear under `attributes` on search results. | [default to undefined]

