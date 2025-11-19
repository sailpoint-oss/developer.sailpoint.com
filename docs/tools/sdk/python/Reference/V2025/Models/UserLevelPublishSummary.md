---
id: v2025-user-level-publish-summary
title: UserLevelPublishSummary
pagination_label: UserLevelPublishSummary
sidebar_label: UserLevelPublishSummary
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'UserLevelPublishSummary', 'V2025UserLevelPublishSummary'] 
slug: /tools/sdk/python/v2025/models/user-level-publish-summary
tags: ['SDK', 'Software Development Kit', 'UserLevelPublishSummary', 'V2025UserLevelPublishSummary']
---

# UserLevelPublishSummary

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
from sailpoint.v2025.models.user_level_publish_summary import UserLevelPublishSummary

user_level_publish_summary = UserLevelPublishSummary(
user_level_id='6e110911-5984-491b-be74-2707980a46a7',
publish=True,
status='ACTIVE',
modified='2023-01-02T12:00Z'
)

```
[[Back to top]](#) 

