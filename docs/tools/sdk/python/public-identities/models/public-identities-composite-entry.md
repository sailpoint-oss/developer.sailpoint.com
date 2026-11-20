# PublicIdentitiesCompositeEntry

# PublicIdentitiesCompositeEntry

A querySet entry that is either a TEXT clause or a nested COMPOSITE querySet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query_type** |  **Enum** [  'COMPOSITE' ] | Entry type discriminator. Must be COMPOSITE for nested query sets. | [required]
**text_query** | [**PublicIdentitiesTextQuery**](public-identities-text-query) | Text query clause for this TEXT entry. | [required]
**query_set** | [**PublicIdentitiesNestedQuerySet**](public-identities-nested-query-set) | Nested query set for this COMPOSITE entry. | [required]
\}

## Example

```python
from sailpoint.public_identities.models.public_identities_composite_entry import PublicIdentitiesCompositeEntry

public_identities_composite_entry = PublicIdentitiesCompositeEntry(
query_type='COMPOSITE',
text_query=sailpoint.public_identities.models.public_identities_text_query.Public Identities Text Query(
                    fields = ["name","email"], 
                    terms = ["Mara"], 
                    match_any = True, 
                    contains = True, 
                    strict = True, ),
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

