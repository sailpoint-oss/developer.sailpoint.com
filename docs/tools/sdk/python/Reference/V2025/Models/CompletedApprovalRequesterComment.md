---
id: v2025-completed-approval-requester-comment
title: CompletedApprovalRequesterComment
pagination_label: CompletedApprovalRequesterComment
sidebar_label: CompletedApprovalRequesterComment
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CompletedApprovalRequesterComment', 'V2025CompletedApprovalRequesterComment'] 
slug: /tools/sdk/python/v2025/models/completed-approval-requester-comment
tags: ['SDK', 'Software Development Kit', 'CompletedApprovalRequesterComment', 'V2025CompletedApprovalRequesterComment']
---

# CompletedApprovalRequesterComment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | Comment content. | [optional] 
**created** | **datetime** | Date and time comment was created. | [optional] 
**author** | [**CommentDtoAuthor**](comment-dto-author) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.completed_approval_requester_comment import CompletedApprovalRequesterComment

completed_approval_requester_comment = CompletedApprovalRequesterComment(
comment='This is a comment.',
created='2017-07-11T18:45:37.098Z',
author=sailpoint.v2025.models.comment_dto_author.CommentDto_author(
                    type = 'IDENTITY', 
                    id = '2c9180847e25f377017e2ae8cae4650b', 
                    name = 'john.doe', )
)

```
[[Back to top]](#) 

