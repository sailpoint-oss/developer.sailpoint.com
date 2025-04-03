---
id: v2025-text-query
title: TextQuery
pagination_label: TextQuery
sidebar_label: TextQuery
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'TextQuery', 'V2025TextQuery'] 
slug: /tools/sdk/python/v2025/models/text-query
tags: ['SDK', 'Software Development Kit', 'TextQuery', 'V2025TextQuery']
---

# TextQuery

Query parameters used to construct an Elasticsearch text query object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**terms** | **[]str** | Words or characters that specify a particular thing to be searched for. | [required]
**fields** | **[]str** | The fields to be searched. | [required]
**match_any** | **bool** | Indicates that at least one of the terms must be found in the specified fields;  otherwise, all terms must be found. | [optional] [default to False]
**contains** | **bool** | Indicates that the terms can be located anywhere in the specified fields;  otherwise, the fields must begin with the terms. | [optional] [default to False]
}

## Example

```python
from sailpoint.v2025.models.text_query import TextQuery

text_query = TextQuery(
terms=[The quick brown fox, 3141592, 7],
fields=[displayName, employeeNumber, roleCount],
match_any=False,
contains=True
)

```
[[Back to top]](#) 

