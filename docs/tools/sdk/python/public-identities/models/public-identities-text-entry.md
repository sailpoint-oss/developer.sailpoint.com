# PublicIdentitiesTextEntry

# PublicIdentitiesTextEntry

A COMPOSITE query entry that contains a TEXT query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query_type** |  **Enum** [  'TEXT' ] | Entry type discriminator. Must be TEXT for text query entries. | [required]
**text_query** | [**PublicIdentitiesTextQuery**](public-identities-text-query) | Text query clause for this TEXT entry. | [required]
\}

## Example

```python
from sailpoint.public_identities.models.public_identities_text_entry import PublicIdentitiesTextEntry

public_identities_text_entry = PublicIdentitiesTextEntry(
query_type='TEXT',
text_query=sailpoint.public_identities.models.public_identities_text_query.Public Identities Text Query(
                    fields = ["name","email"], 
                    terms = ["Mara"], 
                    match_any = True, 
                    contains = True, 
                    strict = True, )
)

```
[[Back to top]](#) 

