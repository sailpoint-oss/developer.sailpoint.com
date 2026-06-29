---
id: commentdto-author
title: CommentdtoAuthor
pagination_label: CommentdtoAuthor
sidebar_label: CommentdtoAuthor
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CommentdtoAuthor', 'CommentdtoAuthor'] 
slug: /tools/sdk/python/access-request-approvals/models/commentdto-author
tags: ['SDK', 'Software Development Kit', 'CommentdtoAuthor', 'CommentdtoAuthor']
---

# CommentdtoAuthor

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
from sailpoint.access_request_approvals.models.commentdto_author import CommentdtoAuthor

commentdto_author = CommentdtoAuthor(
type='IDENTITY',
id='2c9180847e25f377017e2ae8cae4650b',
name='john.doe'
)

```
[[Back to top]](#) 

