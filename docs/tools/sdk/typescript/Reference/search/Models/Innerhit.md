---
id: v1-innerhit-v1
title: InnerhitV1
pagination_label: InnerhitV1
sidebar_label: InnerhitV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'InnerhitV1', 'v1InnerhitV1']
slug: /tools/sdk/typescript/search/models/innerhit-v1
tags: ['SDK', 'Software Development Kit', 'InnerhitV1', 'v1InnerhitV1']
---

# InnerhitV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | `string` | The search query using the Elasticsearch [Query String Query](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/query-dsl-query-string-query.html#query-string) syntax from the Query DSL extended by SailPoint to support Nested queries. | [default to undefined]
**type** | `string` | The nested type to use in the inner hits query.  The nested type [Nested Type](https://www.elastic.co/guide/en/elasticsearch/reference/current/nested.html) refers to a document \"nested\" within another document. For example, an identity can have nested documents for access, accounts, and apps. | [default to undefined]

