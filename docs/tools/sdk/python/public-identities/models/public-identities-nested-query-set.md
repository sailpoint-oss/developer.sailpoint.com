# PublicIdentitiesNestedQuerySet

# PublicIdentitiesNestedQuerySet

Query set nested inside a COMPOSITE entry. TEXT entries combined with AND (matchAny false) or OR (matchAny true).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**match_any** | **bool** | When true, entries are OR'd; when false, entries are AND'd. | [required]
**entries** | [**[]PublicIdentitiesTextEntry**](public-identities-text-entry) | One or more TEXT entries. | [required]
\}

## Example

```python
from sailpoint.public_identities.models.public_identities_nested_query_set import PublicIdentitiesNestedQuerySet

public_identities_nested_query_set = PublicIdentitiesNestedQuerySet(
match_any=True,
entries=[
                    sailpoint.public_identities.models.public_identities_text_entry.Public Identities Text Entry(
                        query_type = 'TEXT', 
                        text_query = null, )
                    ]
)

```
[[Back to top]](#) 

