---
id: queryresultfilter
title: Queryresultfilter
pagination_label: Queryresultfilter
sidebar_label: Queryresultfilter
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Queryresultfilter', 'Queryresultfilter'] 
slug: /tools/sdk/python/access-model-metadata/models/queryresultfilter
tags: ['SDK', 'Software Development Kit', 'Queryresultfilter', 'Queryresultfilter']
---

# Queryresultfilter

Allows the query results to be filtered by specifying a list of fields to include and/or exclude from the result documents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**includes** | **[]str** | The list of field names to include in the result documents. | [optional] 
**excludes** | **[]str** | The list of field names to exclude from the result documents. | [optional] 
}

## Example

```python
from sailpoint.access_model_metadata.models.queryresultfilter import Queryresultfilter

queryresultfilter = Queryresultfilter(
includes=["name","displayName"],
excludes=["stacktrace"]
)

```
[[Back to top]](#) 

