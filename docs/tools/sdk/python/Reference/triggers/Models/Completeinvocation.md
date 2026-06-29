---
id: completeinvocation
title: Completeinvocation
pagination_label: Completeinvocation
sidebar_label: Completeinvocation
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Completeinvocation', 'Completeinvocation'] 
slug: /tools/sdk/python/triggers/models/completeinvocation
tags: ['SDK', 'Software Development Kit', 'Completeinvocation', 'Completeinvocation']
---

# Completeinvocation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secret** | **str** | Unique invocation secret that was generated when the invocation was created. Required to authenticate to the endpoint. | [required]
**error** | **str** | The error message to indicate a failed invocation or error if any. | [optional] 
**output** | **object** | Trigger output to complete the invocation. Its schema is defined in the trigger definition. | [required]
}

## Example

```python
from sailpoint.triggers.models.completeinvocation import Completeinvocation

completeinvocation = Completeinvocation(
secret='0f11f2a4-7c94-4bf3-a2bd-742580fe3bde',
error='Access request is denied.',
output={"approved":false}
)

```
[[Back to top]](#) 

