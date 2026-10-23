# PublicIdentitiesSearchRequestQuerySet

# PublicIdentitiesSearchRequestQuerySet


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**match_any** | **bool** | When true, entries are OR'd; when false, entries are AND'd. | [required]
**entries** | [**[]PublicIdentitiesCompositeEntry**](public-identities-composite-entry) | One or more TEXT or nested COMPOSITE entries. | [required]
\}

## Example

```python
from sailpoint.public_identities.models.public_identities_search_request_query_set import PublicIdentitiesSearchRequestQuerySet

public_identities_search_request_query_set = PublicIdentitiesSearchRequestQuerySet(
match_any=False,
entries=[{queryType=TEXT, textQuery={fields=[attributes.identityState.exact], terms=[ACTIVE], matchAny=false, contains=false, strict=true}}]
)

```
[[Back to top]](#) 

