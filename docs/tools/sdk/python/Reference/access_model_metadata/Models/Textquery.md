---
id: textquery
title: Textquery
pagination_label: Textquery
sidebar_label: Textquery
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Textquery', 'Textquery'] 
slug: /tools/sdk/python/access-model-metadata/models/textquery
tags: ['SDK', 'Software Development Kit', 'Textquery', 'Textquery']
---

# Textquery

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
from sailpoint.access_model_metadata.models.textquery import Textquery

textquery = Textquery(
terms=["The quick brown fox","3141592","7"],
fields=["displayName","employeeNumber","roleCount"],
match_any=False,
contains=True
)

```
[[Back to top]](#) 

