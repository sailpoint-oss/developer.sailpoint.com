---
id: v2024-base-document
title: BaseDocument
pagination_label: BaseDocument
sidebar_label: BaseDocument
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'BaseDocument', 'V2024BaseDocument'] 
slug: /tools/sdk/python/v2024/models/base-document
tags: ['SDK', 'Software Development Kit', 'BaseDocument', 'V2024BaseDocument']
---

# BaseDocument


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [required]
**name** | **str** |  | [required]
**type** | [**DocumentType**](document-type) |  | [required]
}

## Example

```python
from sailpoint.v2024.models.base_document import BaseDocument

base_document = BaseDocument(
id='2c91808375d8e80a0175e1f88a575222',
name='john.doe',
type='identity'
)

```
[[Back to top]](#) 

