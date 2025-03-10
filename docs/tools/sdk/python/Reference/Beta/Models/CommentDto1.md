---
id: beta-comment-dto1
title: CommentDto1
pagination_label: CommentDto1
sidebar_label: CommentDto1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CommentDto1', 'BetaCommentDto1'] 
slug: /tools/sdk/python/beta/models/comment-dto1
tags: ['SDK', 'Software Development Kit', 'CommentDto1', 'BetaCommentDto1']
---

# CommentDto1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | Comment content. | [optional] 
**created** | **datetime** | Date and time comment was created. | [optional] 
**author** | [**CommentDto1Author**](comment-dto1-author) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.comment_dto1 import CommentDto1

comment_dto1 = CommentDto1(
comment='This is a comment.',
created='2017-07-11T18:45:37.098Z',
author=sailpoint.beta.models.comment_dto_1_author.CommentDto_1_author(
                    type = 'IDENTITY', 
                    id = '2c9180847e25f377017e2ae8cae4650b', 
                    name = 'john.doe', )
)

```
[[Back to top]](#) 

