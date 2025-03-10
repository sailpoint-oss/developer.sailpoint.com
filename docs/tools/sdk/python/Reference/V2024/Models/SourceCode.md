---
id: v2024-source-code
title: SourceCode
pagination_label: SourceCode
sidebar_label: SourceCode
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SourceCode', 'V2024SourceCode'] 
slug: /tools/sdk/python/v2024/models/source-code
tags: ['SDK', 'Software Development Kit', 'SourceCode', 'V2024SourceCode']
---

# SourceCode

SourceCode

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **str** | the version of the code | [required]
**script** | **str** | The code | [required]
}

## Example

```python
from sailpoint.v2024.models.source_code import SourceCode

source_code = SourceCode(
version='1.0',
script='return "Mr. " + firstName;'
)

```
[[Back to top]](#) 

