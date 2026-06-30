---
id: accessrequestcontext
title: Accessrequestcontext
pagination_label: Accessrequestcontext
sidebar_label: Accessrequestcontext
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accessrequestcontext', 'Accessrequestcontext'] 
slug: /tools/sdk/python/identities/models/accessrequestcontext
tags: ['SDK', 'Software Development Kit', 'Accessrequestcontext', 'Accessrequestcontext']
---

# Accessrequestcontext


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context_attributes** | [**[]Contextattributedto**](contextattributedto) |  | [optional] 
}

## Example

```python
from sailpoint.identities.models.accessrequestcontext import Accessrequestcontext

accessrequestcontext = Accessrequestcontext(
context_attributes=[
                    sailpoint.identities.models.context_attribute_dto.Context Attribute Dto(
                        attribute = 'location', 
                        value = Austin, 
                        derived = False, )
                    ]
)

```
[[Back to top]](#) 

