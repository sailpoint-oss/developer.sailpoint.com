---
id: basecommondto
title: Basecommondto
pagination_label: Basecommondto
sidebar_label: Basecommondto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Basecommondto', 'Basecommondto'] 
slug: /tools/sdk/python/accounts/models/basecommondto
tags: ['SDK', 'Software Development Kit', 'Basecommondto', 'Basecommondto']
---

# Basecommondto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | System-generated unique ID of the Object | [optional] [readonly] 
**name** | **str** | Name of the Object | [required]
**created** | **datetime** | Creation date of the Object | [optional] [readonly] 
**modified** | **datetime** | Last modification date of the Object | [optional] [readonly] 
}

## Example

```python
from sailpoint.accounts.models.basecommondto import Basecommondto

basecommondto = Basecommondto(
id='id12345',
name='aName',
created='2015-05-28T14:07:17Z',
modified='2015-05-28T14:07:17Z'
)

```
[[Back to top]](#) 

