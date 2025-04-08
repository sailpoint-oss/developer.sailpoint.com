---
id: query
title: Query
pagination_label: Query
sidebar_label: Query
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Query', 'Query'] 
slug: /tools/sdk/python/v3/models/query
tags: ['SDK', 'Software Development Kit', 'Query', 'Query']
---

# Query

Query parameters used to construct an Elasticsearch query object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | **str** | The query using the Elasticsearch [Query String Query](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/query-dsl-query-string-query.html#query-string) syntax from the Query DSL extended by SailPoint to support Nested queries. | [optional] 
**fields** | **str** | The fields the query will be applied to.  Fields provide you with a simple way to add additional fields to search, without making the query too complicated.  For example, you can use the fields to specify that you want your query of \"a*\" to be applied to \"name\", \"firstName\", and the \"source.name\".  The response will include all results matching the \"a*\" query found in those three fields.  A field's availability depends on the indices being searched.  For example, if you are searching \"identities\", you can apply your search to the \"firstName\" field, but you couldn't use \"firstName\" with a search on \"access profiles\".  Refer to the response schema for the respective lists of available fields.  | [optional] 
**time_zone** | **str** | The time zone to be applied to any range query related to dates. | [optional] 
**inner_hit** | [**InnerHit**](inner-hit) |  | [optional] 
}

## Example

```python
from sailpoint.v3.models.query import Query

query = Query(
query='name:a*',
fields='[firstName,lastName,email]',
time_zone='America/Chicago',
inner_hit=sailpoint.v3.models.inner_hit.InnerHit(
                    query = 'source.name:\"Active Directory\"', 
                    type = 'access', )
)

```
[[Back to top]](#) 

