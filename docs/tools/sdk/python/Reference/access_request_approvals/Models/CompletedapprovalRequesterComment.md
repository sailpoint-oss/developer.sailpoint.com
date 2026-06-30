---
id: completedapproval-requester-comment
title: CompletedapprovalRequesterComment
pagination_label: CompletedapprovalRequesterComment
sidebar_label: CompletedapprovalRequesterComment
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CompletedapprovalRequesterComment', 'CompletedapprovalRequesterComment'] 
slug: /tools/sdk/python/access-request-approvals/models/completedapproval-requester-comment
tags: ['SDK', 'Software Development Kit', 'CompletedapprovalRequesterComment', 'CompletedapprovalRequesterComment']
---

# CompletedapprovalRequesterComment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | Comment content. | [optional] 
**created** | **datetime** | Date and time comment was created. | [optional] 
**author** | [**CommentdtoAuthor**](commentdto-author) |  | [optional] 
}

## Example

```python
from sailpoint.access_request_approvals.models.completedapproval_requester_comment import CompletedapprovalRequesterComment

completedapproval_requester_comment = CompletedapprovalRequesterComment(
comment='This is a comment.',
created='2017-07-11T18:45:37.098Z',
author=sailpoint.access_request_approvals.models.commentdto_author.commentdto_author(
                    type = 'IDENTITY', 
                    id = '2c9180847e25f377017e2ae8cae4650b', 
                    name = 'john.doe', )
)

```
[[Back to top]](#) 

