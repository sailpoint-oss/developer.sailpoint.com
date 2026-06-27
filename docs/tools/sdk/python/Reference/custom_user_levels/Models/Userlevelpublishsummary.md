---
id: userlevelpublishsummary
title: Userlevelpublishsummary
pagination_label: Userlevelpublishsummary
sidebar_label: Userlevelpublishsummary
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Userlevelpublishsummary', 'Userlevelpublishsummary'] 
slug: /tools/sdk/python/custom-user-levels/models/userlevelpublishsummary
tags: ['SDK', 'Software Development Kit', 'Userlevelpublishsummary', 'Userlevelpublishsummary']
---

# Userlevelpublishsummary

It represents a summary of a user level publish operation, including its metadata and status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_level_id** | **str** | The unique identifier of the UserLevel. | [optional] 
**publish** | **bool** | Indicates whether the API call triggered a publish operation. | [optional] [default to False]
**status** | **str** | The status of the UserLevel publish operation. | [optional] 
**modified** | **datetime** | The last modification timestamp of the UserLevel. | [optional] 
}

## Example

```python
from sailpoint.custom_user_levels.models.userlevelpublishsummary import Userlevelpublishsummary

userlevelpublishsummary = Userlevelpublishsummary(
user_level_id='6e110911-5984-491b-be74-2707980a46a7',
publish=True,
status='ACTIVE',
modified='2023-01-02T12:00Z'
)

```
[[Back to top]](#) 

