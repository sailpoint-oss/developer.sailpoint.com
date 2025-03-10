---
id: comment-dto
title: CommentDto
pagination_label: CommentDto
sidebar_label: CommentDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CommentDto', 'CommentDto'] 
slug: /tools/sdk/python/v3/models/comment-dto
tags: ['SDK', 'Software Development Kit', 'CommentDto', 'CommentDto']
---

# CommentDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | Comment content. | [optional] 
**created** | **datetime** | Date and time comment was created. | [optional] 
**author** | [**CommentDtoAuthor**](comment-dto-author) |  | [optional] 
}

## Example

```python
from sailpoint.v3.models.comment_dto import CommentDto

comment_dto = CommentDto(
comment='This is a comment.',
created='2017-07-11T18:45:37.098Z',
author=sailpoint.v3.models.comment_dto_author.CommentDto_author(
                    type = 'IDENTITY', 
                    id = '2c9180847e25f377017e2ae8cae4650b', 
                    name = 'john.doe', )
)

```
[[Back to top]](#) 

