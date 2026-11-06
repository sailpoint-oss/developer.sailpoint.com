# PublicIdentityVisibleAttributes

# PublicIdentityVisibleAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DefaultAttributes** | [**[]PublicIdentityAttributeConfig**](public-identity-attribute-config) | Always-available public-identity field keys for search and sort. Fixed platform list. `key` is the search field name; `name` is the display label. | [required]
**ConfiguredAttributes** | [**[]PublicIdentityAttributeConfig**](public-identity-attribute-config) | Tenant-configured public attributes from public-identities config (same source as public-identities-config). These keys are also allowed in search/sort and appear under `attributes` on search results. | [required]

## Examples

- Prepare the resource
```powershell
$PublicIdentityVisibleAttributes = Initialize-PublicIdentityVisibleAttributes  -DefaultAttributes [{"key":"id","name":"id"},{"key":"email","name":"email"},{"key":"manager.displayName","name":"manager name"}] `
 -ConfiguredAttributes [{"key":"displayName","name":"Display Name"},{"key":"lastSyncDate","name":"Last Sync Date"}]
```

- Convert the resource to JSON
```powershell
$PublicIdentityVisibleAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

