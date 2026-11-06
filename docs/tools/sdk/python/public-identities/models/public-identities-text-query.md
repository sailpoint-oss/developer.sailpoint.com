# PublicIdentitiesTextQuery

# PublicIdentitiesTextQuery

Text query clause used inside a TEXT composite entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | **[]str** | Attribute keys to search. Base keys must match GET /public-identities/v2/visible-attributes (defaultAttributes + configuredAttributes). Optional \"attributes.\" prefix and/or \".exact\" suffix (e.g. email, attributes.email, email.exact, attributes.email.exact). | [required]
**terms** | [**[]PublicIdentitiesTextQueryTermsInner**](public-identities-text-query-terms-inner) | Search terms. Each value must be a non-blank string or a JSON boolean. | [required]
**match_any** | **bool** | When true, terms/fields are OR'd within this text query. Optional for normal search clauses. The mandatory ACTIVE identityState gate entry must set this to false. | [optional] [default to False]
**contains** | **bool** | When true, matches substrings. Optional for normal search clauses. The mandatory ACTIVE identityState gate entry must set this to false. | [optional] [default to False]
**strict** | **bool** | When true, applies strict matching. Optional for normal search clauses. The mandatory ACTIVE identityState gate entry must set this to true. | [optional] [default to False]
\}

## Example

```python
from sailpoint.public_identities.models.public_identities_text_query import PublicIdentitiesTextQuery

public_identities_text_query = PublicIdentitiesTextQuery(
fields=["name","email"],
terms=["Mara"],
match_any=True,
contains=True,
strict=True
)

```
[[Back to top]](#) 

