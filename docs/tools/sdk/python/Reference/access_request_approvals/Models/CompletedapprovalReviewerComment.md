---
id: completedapproval-reviewer-comment
title: CompletedapprovalReviewerComment
pagination_label: CompletedapprovalReviewerComment
sidebar_label: CompletedapprovalReviewerComment
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CompletedapprovalReviewerComment', 'CompletedapprovalReviewerComment'] 
slug: /tools/sdk/python/access-request-approvals/models/completedapproval-reviewer-comment
tags: ['SDK', 'Software Development Kit', 'CompletedapprovalReviewerComment', 'CompletedapprovalReviewerComment']
---

# CompletedapprovalReviewerComment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | Comment content. | [optional] 
**created** | **datetime** | Date and time comment was created. | [optional] 
**author** | [**CommentdtoAuthor**](commentdto-author) |  | [optional] 
}

## Example

```python
from sailpoint.access_request_approvals.models.completedapproval_reviewer_comment import CompletedapprovalReviewerComment

completedapproval_reviewer_comment = CompletedapprovalReviewerComment(
comment='This is a comment.',
created='2017-07-11T18:45:37.098Z',
author=sailpoint.access_request_approvals.models.commentdto_author.commentdto_author(
                    type = 'IDENTITY', 
                    id = '2c9180847e25f377017e2ae8cae4650b', 
                    name = 'john.doe', )
)

```
[[Back to top]](#) 

