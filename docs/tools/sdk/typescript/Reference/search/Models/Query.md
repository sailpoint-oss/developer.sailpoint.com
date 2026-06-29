---
id: v1-query-v1
title: QueryV1
pagination_label: QueryV1
sidebar_label: QueryV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'QueryV1', 'v1QueryV1']
slug: /tools/sdk/typescript/search/models/query-v1
tags: ['SDK', 'Software Development Kit', 'QueryV1', 'v1QueryV1']
---

# QueryV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | **(optional)** `string` | The query using the Elasticsearch [Query String Query](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/query-dsl-query-string-query.html#query-string) syntax from the Query DSL extended by SailPoint to support Nested queries. | [default to undefined]
**fields** | **(optional)** `string` | The fields the query will be applied to.  Fields provide you with a simple way to add additional fields to search, without making the query too complicated.  For example, you can use the fields to specify that you want your query of \"a*\" to be applied to \"name\", \"firstName\", and the \"source.name\".  The response will include all results matching the \"a*\" query found in those three fields.  A field\'s availability depends on the indices being searched.  For example, if you are searching \"identities\", you can apply your search to the \"firstName\" field, but you couldn\'t use \"firstName\" with a search on \"access profiles\".  Refer to the response schema for the respective lists of available fields.  | [default to undefined]
**timeZone** | **(optional)** `string` | The time zone to be applied to any range query related to dates. | [default to undefined]
**innerHit** | **(optional)** `InnerhitV1` |  | [default to undefined]

