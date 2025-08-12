---
id: v2025-access-request-context
title: AccessRequestContext
pagination_label: AccessRequestContext
sidebar_label: AccessRequestContext
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessRequestContext', 'V2025AccessRequestContext'] 
slug: /tools/sdk/python/v2025/models/access-request-context
tags: ['SDK', 'Software Development Kit', 'AccessRequestContext', 'V2025AccessRequestContext']
---

# AccessRequestContext


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context_attributes** | [**[]ContextAttributeDto**](context-attribute-dto) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.access_request_context import AccessRequestContext

access_request_context = AccessRequestContext(
context_attributes=[
                    sailpoint.v2025.models.context_attribute_dto.Context Attribute Dto(
                        attribute = 'location', 
                        value = Austin, 
                        derived = False, )
                    ]
)

```
[[Back to top]](#) 

