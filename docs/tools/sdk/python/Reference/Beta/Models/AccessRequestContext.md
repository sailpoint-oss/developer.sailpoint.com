---
id: beta-access-request-context
title: AccessRequestContext
pagination_label: AccessRequestContext
sidebar_label: AccessRequestContext
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessRequestContext', 'BetaAccessRequestContext'] 
slug: /tools/sdk/python/beta/models/access-request-context
tags: ['SDK', 'Software Development Kit', 'AccessRequestContext', 'BetaAccessRequestContext']
---

# AccessRequestContext


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context_attributes** | [**[]ContextAttributeDto**](context-attribute-dto) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.access_request_context import AccessRequestContext

access_request_context = AccessRequestContext(
context_attributes=[
                    sailpoint.beta.models.context_attribute_dto.Context Attribute Dto(
                        attribute = 'location', 
                        value = Austin, 
                        derived = False, )
                    ]
)

```
[[Back to top]](#) 

