---
id: authuserslimresponse
title: Authuserslimresponse
pagination_label: Authuserslimresponse
sidebar_label: Authuserslimresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Authuserslimresponse', 'Authuserslimresponse'] 
slug: /tools/sdk/python/custom-user-levels/models/authuserslimresponse
tags: ['SDK', 'Software Development Kit', 'Authuserslimresponse', 'Authuserslimresponse']
---

# Authuserslimresponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identity ID. | [optional] 
**uid** | **str** | Identity unique identifier. | [optional] 
**alias** | **str** | Identity alias. | [optional] 
**display_name** | **str** | Identity name in display format. | [optional] 
}

## Example

```python
from sailpoint.custom_user_levels.models.authuserslimresponse import Authuserslimresponse

authuserslimresponse = Authuserslimresponse(
id='eea1c52bc51c4f7d95565f4f8d6c1e41',
uid='john.doe@testmail.identitysoon.com',
alias='john.doe',
display_name='John Doe'
)

```
[[Back to top]](#) 

