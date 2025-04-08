---
id: v2025-query-result-filter
title: QueryResultFilter
pagination_label: QueryResultFilter
sidebar_label: QueryResultFilter
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'QueryResultFilter', 'V2025QueryResultFilter'] 
slug: /tools/sdk/python/v2025/models/query-result-filter
tags: ['SDK', 'Software Development Kit', 'QueryResultFilter', 'V2025QueryResultFilter']
---

# QueryResultFilter

Allows the query results to be filtered by specifying a list of fields to include and/or exclude from the result documents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**includes** | **[]str** | The list of field names to include in the result documents. | [optional] 
**excludes** | **[]str** | The list of field names to exclude from the result documents. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.query_result_filter import QueryResultFilter

query_result_filter = QueryResultFilter(
includes=[name, displayName],
excludes=[stacktrace]
)

```
[[Back to top]](#) 

