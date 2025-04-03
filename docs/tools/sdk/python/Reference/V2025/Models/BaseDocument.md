---
id: v2025-base-document
title: BaseDocument
pagination_label: BaseDocument
sidebar_label: BaseDocument
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'BaseDocument', 'V2025BaseDocument'] 
slug: /tools/sdk/python/v2025/models/base-document
tags: ['SDK', 'Software Development Kit', 'BaseDocument', 'V2025BaseDocument']
---

# BaseDocument


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the referenced object. | [required]
**name** | **str** | The human readable name of the referenced object. | [required]
}

## Example

```python
from sailpoint.v2025.models.base_document import BaseDocument

base_document = BaseDocument(
id='2c91808375d8e80a0175e1f88a575222',
name='john.doe'
)

```
[[Back to top]](#) 

