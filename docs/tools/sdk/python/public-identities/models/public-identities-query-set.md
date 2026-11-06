# PublicIdentitiesQuerySet

# PublicIdentitiesQuerySet

A set of COMPOSITE query entries combined with AND (matchAny false) or OR (matchAny true).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**match_any** | **bool** | When true, entries are OR'd; when false, entries are AND'd. | [required]
**entries** | [**[]PublicIdentitiesCompositeEntry**](public-identities-composite-entry) | One or more TEXT or nested COMPOSITE entries. | [required]
\}

## Example

```python
from sailpoint.public_identities.models.public_identities_query_set import PublicIdentitiesQuerySet

public_identities_query_set = PublicIdentitiesQuerySet(
match_any=False,
entries=[{"queryType":"TEXT","textQuery":{"fields":["attributes.identityState.exact"],"terms":["ACTIVE"],"matchAny":false,"contains":false,"strict":true}}]
)

```
[[Back to top]](#) 

