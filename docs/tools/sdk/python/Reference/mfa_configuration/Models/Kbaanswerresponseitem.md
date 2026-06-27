---
id: kbaanswerresponseitem
title: Kbaanswerresponseitem
pagination_label: Kbaanswerresponseitem
sidebar_label: Kbaanswerresponseitem
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Kbaanswerresponseitem', 'Kbaanswerresponseitem'] 
slug: /tools/sdk/python/mfa-configuration/models/kbaanswerresponseitem
tags: ['SDK', 'Software Development Kit', 'Kbaanswerresponseitem', 'Kbaanswerresponseitem']
---

# Kbaanswerresponseitem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Question Id | [required]
**question** | **str** | Question description | [required]
**has_answer** | **bool** | Denotes whether the KBA question has an answer configured for the current user | [required]
}

## Example

```python
from sailpoint.mfa_configuration.models.kbaanswerresponseitem import Kbaanswerresponseitem

kbaanswerresponseitem = Kbaanswerresponseitem(
id='c54fee53-2d63-4fc5-9259-3e93b9994135',
question='[{"text":"Nouvelle question MFA -1 ?","locale":"fr"},{"text":"MFA new question -1 ?","locale":""}]',
has_answer=True
)

```
[[Back to top]](#) 

