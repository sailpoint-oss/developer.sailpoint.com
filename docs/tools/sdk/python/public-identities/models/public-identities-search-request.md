# PublicIdentitiesSearchRequest

# PublicIdentitiesSearchRequest

COMPOSITE search request for public identities. Root querySet must use matchAny false (AND). The first entries item must be the ACTIVE identityState TEXT gate; identityState may not appear elsewhere in the query tree.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query_type** |  **Enum** [  'COMPOSITE' ] | Search query type. Must be COMPOSITE. | [required]
**indices** | **[]str** | Search indices. Must be exactly [\"identities\"]. | [required]
**include_nested** | **bool** | Must be false for public identities search. | [required]
**sort** | **[]str** | Optional attribute keys to sort by. Base keys must match those returned by GET /public-identities/v2/visible-attributes (defaultAttributes + configuredAttributes). Optional \"attributes.\" prefix and/or \".exact\" suffix. | [optional] 
**query_set** | [**PublicIdentitiesSearchRequestQuerySet**](public-identities-search-request-query-set) |  | [required]
\}

## Example

```python
from sailpoint.public_identities.models.public_identities_search_request import PublicIdentitiesSearchRequest

public_identities_search_request = PublicIdentitiesSearchRequest(
query_type='COMPOSITE',
indices=["identities"],
include_nested=False,
sort=["name"],
query_set=
)

```
[[Back to top]](#) 

