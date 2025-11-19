---
id: v2024-comment
title: Comment
pagination_label: Comment
sidebar_label: Comment
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Comment', 'V2024Comment'] 
slug: /tools/sdk/python/v2024/models/comment
tags: ['SDK', 'Software Development Kit', 'Comment', 'V2024Comment']
---

# Comment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commenter_id** | **str** | Id of the identity making the comment | [optional] 
**commenter_name** | **str** | Human-readable display name of the identity making the comment | [optional] 
**body** | **str** | Content of the comment | [optional] 
**var_date** | **datetime** | Date and time comment was made | [optional] 
}

## Example

```python
from sailpoint.v2024.models.comment import Comment

comment = Comment(
commenter_id='2c918084660f45d6016617daa9210584',
commenter_name='Adam Kennedy',
body='Et quam massa maximus vivamus nisi ut urna tincidunt metus elementum erat.',
var_date='2017-07-11T18:45:37.098Z'
)

```
[[Back to top]](#) 

