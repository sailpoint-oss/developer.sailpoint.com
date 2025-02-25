---
id: beta-comment-dto
title: CommentDto
pagination_label: CommentDto
sidebar_label: CommentDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CommentDto', 'BetaCommentDto'] 
slug: /tools/sdk/python/beta/models/comment-dto
tags: ['SDK', 'Software Development Kit', 'CommentDto', 'BetaCommentDto']
---

# CommentDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | Comment content. | [optional] 
**author** | [**CommentDtoAuthor**](comment-dto-author) |  | [optional] 
**created** | **datetime** | Date and time comment was created. | [optional] 
}

## Example

```python
from sailpoint.beta.models.comment_dto import CommentDto

comment_dto = CommentDto(
comment='This is a comment.',
author=sailpoint.beta.models.comment_dto_author.CommentDto_author(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'Adam Kennedy', ),
created='2017-07-11T18:45:37.098Z'
)

```
[[Back to top]](#) 

