---
id: column
title: Column
pagination_label: Column
sidebar_label: Column
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Column', 'Column'] 
slug: /tools/sdk/python/v3/models/column
tags: ['SDK', 'Software Development Kit', 'Column', 'Column']
---

# Column


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_field** | **str** | The name of the field.  | [required]
**header** | **str** | The value of the header.  | [optional] 
}

## Example

```python
from sailpoint.v3.models.column import Column

column = Column(
var_field='email',
header='Work Email'
)

```
[[Back to top]](#) 

