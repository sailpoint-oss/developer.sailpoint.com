---
id: v2024-comment-dto-author
title: CommentDtoAuthor
pagination_label: CommentDtoAuthor
sidebar_label: CommentDtoAuthor
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CommentDtoAuthor', 'V2024CommentDtoAuthor'] 
slug: /tools/sdk/python/v2024/models/comment-dto-author
tags: ['SDK', 'Software Development Kit', 'CommentDtoAuthor', 'V2024CommentDtoAuthor']
---

# CommentDtoAuthor

Author of the comment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | The type of object | [optional] 
**id** | **str** | The unique ID of the object | [optional] 
**name** | **str** | The display name of the object | [optional] 
}

## Example

```python
from sailpoint.v2024.models.comment_dto_author import CommentDtoAuthor

comment_dto_author = CommentDtoAuthor(
type='IDENTITY',
id='2c9180847e25f377017e2ae8cae4650b',
name='john.doe'
)

```
[[Back to top]](#) 

