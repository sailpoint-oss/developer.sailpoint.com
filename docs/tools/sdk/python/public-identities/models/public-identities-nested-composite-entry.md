# PublicIdentitiesNestedCompositeEntry

# PublicIdentitiesNestedCompositeEntry

A COMPOSITE query entry that nests another querySet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query_type** |  **Enum** [  'COMPOSITE' ] | Entry type discriminator. Must be COMPOSITE for nested query sets. | [required]
**query_set** | [**PublicIdentitiesNestedQuerySet**](public-identities-nested-query-set) | Nested query set for this COMPOSITE entry. | [required]
\}

## Example

```python
from sailpoint.public_identities.models.public_identities_nested_composite_entry import PublicIdentitiesNestedCompositeEntry

public_identities_nested_composite_entry = PublicIdentitiesNestedCompositeEntry(
query_type='COMPOSITE',
query_set=sailpoint.public_identities.models.public_identities_nested_query_set.Public Identities Nested Query Set(
                    match_any = True, 
                    entries = [
                        sailpoint.public_identities.models.public_identities_text_entry.Public Identities Text Entry(
                            query_type = 'TEXT', 
                            text_query = null, )
                        ], )
)

```
[[Back to top]](#) 

