---
id: kbaquestion
title: Kbaquestion
pagination_label: Kbaquestion
sidebar_label: Kbaquestion
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Kbaquestion', 'Kbaquestion'] 
slug: /tools/sdk/python/mfa-configuration/models/kbaquestion
tags: ['SDK', 'Software Development Kit', 'Kbaquestion', 'Kbaquestion']
---

# Kbaquestion

KBA Configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | KBA Question Id | [required]
**text** | **str** | KBA Question description | [required]
**has_answer** | **bool** | Denotes whether the KBA question has an answer configured for any user in the tenant | [required]
**num_answers** | **int** | Denotes the number of KBA configurations for this question | [required]
}

## Example

```python
from sailpoint.mfa_configuration.models.kbaquestion import Kbaquestion

kbaquestion = Kbaquestion(
id='143cfd3b-c23f-426b-ae5f-d3db06fa5919',
text='[{"text":"Nouvelle question MFA -1 ?","locale":"fr"},{"text":"MFA new question -1 ?","locale":""}]',
has_answer=True,
num_answers=5
)

```
[[Back to top]](#) 

