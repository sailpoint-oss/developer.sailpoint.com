---
id: beta-comment-dto-author
title: CommentDtoAuthor
pagination_label: CommentDtoAuthor
sidebar_label: CommentDtoAuthor
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CommentDtoAuthor', 'BetaCommentDtoAuthor'] 
slug: /tools/sdk/python/beta/models/comment-dto-author
tags: ['SDK', 'Software Development Kit', 'CommentDtoAuthor', 'BetaCommentDtoAuthor']
---

# CommentDtoAuthor


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | DTO type of the commenting identity. | [optional] 
**id** | **str** | ID of the commenting identity. | [optional] 
**name** | **str** | Display name of the commenting identity. | [optional] 
}

## Example

```python
from sailpoint.beta.models.comment_dto_author import CommentDtoAuthor

comment_dto_author = CommentDtoAuthor(
type='IDENTITY',
id='2c91808568c529c60168cca6f90c1313',
name='Adam Kennedy'
)

```
[[Back to top]](#) 

