---
id: beta-comment-dto1-author
title: CommentDto1Author
pagination_label: CommentDto1Author
sidebar_label: CommentDto1Author
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CommentDto1Author', 'BetaCommentDto1Author'] 
slug: /tools/sdk/python/beta/models/comment-dto1-author
tags: ['SDK', 'Software Development Kit', 'CommentDto1Author', 'BetaCommentDto1Author']
---

# CommentDto1Author

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
from sailpoint.beta.models.comment_dto1_author import CommentDto1Author

comment_dto1_author = CommentDto1Author(
type='IDENTITY',
id='2c9180847e25f377017e2ae8cae4650b',
name='john.doe'
)

```
[[Back to top]](#) 

