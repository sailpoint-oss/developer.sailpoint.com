# PublicIdentitiesTextQuery

# PublicIdentitiesTextQuery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Fields** | **[]String** | Attribute keys to search. Base keys must match GET /public-identities/v2/visible-attributes (defaultAttributes + configuredAttributes). Optional ""attributes."" prefix and/or "".exact"" suffix (e.g. email, attributes.email, email.exact, attributes.email.exact). | [required]
**Terms** | [**[]PublicIdentitiesTextQueryTermsInner**](public-identities-text-query-terms-inner) | Search terms. Each value must be a non-blank string or a JSON boolean. | [required]
**MatchAny** | **Boolean** | When true, terms/fields are OR'd within this text query. Optional for normal search clauses. The mandatory ACTIVE identityState gate entry must set this to false. | [optional] [default to $false]
**Contains** | **Boolean** | When true, matches substrings. Optional for normal search clauses. The mandatory ACTIVE identityState gate entry must set this to false. | [optional] [default to $false]
**Strict** | **Boolean** | When true, applies strict matching. Optional for normal search clauses. The mandatory ACTIVE identityState gate entry must set this to true. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$PublicIdentitiesTextQuery = Initialize-PublicIdentitiesTextQuery  -Fields ["name","email"] `
 -Terms ["Mara"] `
 -MatchAny true `
 -Contains true `
 -Strict true
```

- Convert the resource to JSON
```powershell
$PublicIdentitiesTextQuery | ConvertTo-JSON
```


[[Back to top]](#) 

