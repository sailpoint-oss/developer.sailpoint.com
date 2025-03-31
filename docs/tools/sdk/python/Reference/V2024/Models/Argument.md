---
id: v2024-argument
title: Argument
pagination_label: Argument
sidebar_label: Argument
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Argument', 'V2024Argument'] 
slug: /tools/sdk/python/v2024/models/argument
tags: ['SDK', 'Software Development Kit', 'Argument', 'V2024Argument']
---

# Argument


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | the name of the argument | [required]
**description** | **str** | the description of the argument | [optional] 
**type** | **str** | the programmatic type of the argument | [optional] 
}

## Example

```python
from sailpoint.v2024.models.argument import Argument

argument = Argument(
name='firstName',
description='the first name of the identity',
type='String'
)

```
[[Back to top]](#) 

