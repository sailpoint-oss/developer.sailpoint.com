---
id: v2025-comment-dto
title: CommentDto
pagination_label: CommentDto
sidebar_label: CommentDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CommentDto', 'V2025CommentDto'] 
slug: /tools/sdk/python/v2025/models/comment-dto
tags: ['SDK', 'Software Development Kit', 'CommentDto', 'V2025CommentDto']
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
from sailpoint.v2025.models.comment_dto import CommentDto

comment_dto = CommentDto(
comment='This is a comment.',
created='2017-07-11T18:45:37.098Z',
author=sailpoint.v2025.models.comment_dto_author.CommentDto_author(
                    type = 'IDENTITY', 
                    id = '2c9180847e25f377017e2ae8cae4650b', 
                    name = 'john.doe', )
)

```
[[Back to top]](#) 

