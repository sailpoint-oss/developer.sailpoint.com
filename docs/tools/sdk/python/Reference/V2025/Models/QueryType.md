---
id: v2025-query-type
title: QueryType
pagination_label: QueryType
sidebar_label: QueryType
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'QueryType', 'V2025QueryType'] 
slug: /tools/sdk/python/v2025/models/query-type
tags: ['SDK', 'Software Development Kit', 'QueryType', 'V2025QueryType']
---

# QueryType

The type of query to use.  By default, the `SAILPOINT` query type is used, which requires the `query` object to be defined in the request body. To use the `queryDsl` or `typeAheadQuery` objects in the request, you must set the type to `DSL` or `TYPEAHEAD` accordingly. Additional values may be added in the future without notice.

## Enum

* `DSL` (value: `'DSL'`)

* `SAILPOINT` (value: `'SAILPOINT'`)

* `TEXT` (value: `'TEXT'`)

* `TYPEAHEAD` (value: `'TYPEAHEAD'`)

[[Back to top]](#) 

