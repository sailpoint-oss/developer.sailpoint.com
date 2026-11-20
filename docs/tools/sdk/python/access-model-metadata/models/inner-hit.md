# InnerHit

# InnerHit

Inner Hit query object that will cause the specified nested type to be returned as the result matching the supplied query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | **str** | The search query using the Elasticsearch [Query String Query](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/query-dsl-query-string-query.html#query-string) syntax from the Query DSL extended by SailPoint to support Nested queries. | [required]
**type** | **str** | The nested type to use in the inner hits query.  The nested type [Nested Type](https://www.elastic.co/guide/en/elasticsearch/reference/current/nested.html) refers to a document \"nested\" within another document. For example, an identity can have nested documents for access, accounts, and apps. | [required]
\}

## Example

```python
from sailpoint.access_model_metadata.models.inner_hit import InnerHit

inner_hit = InnerHit(
query='source.name:\"Active Directory\"',
type='access'
)

```
[[Back to top]](#) 

