---
id: requesteditemstatus-requester-comment
title: RequesteditemstatusRequesterComment
pagination_label: RequesteditemstatusRequesterComment
sidebar_label: RequesteditemstatusRequesterComment
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RequesteditemstatusRequesterComment', 'RequesteditemstatusRequesterComment'] 
slug: /tools/sdk/python/access-requests/models/requesteditemstatus-requester-comment
tags: ['SDK', 'Software Development Kit', 'RequesteditemstatusRequesterComment', 'RequesteditemstatusRequesterComment']
---

# RequesteditemstatusRequesterComment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | Comment content. | [optional] 
**created** | **datetime** | Date and time comment was created. | [optional] 
**author** | [**CommentdtoAuthor**](commentdto-author) |  | [optional] 
}

## Example

```python
from sailpoint.access_requests.models.requesteditemstatus_requester_comment import RequesteditemstatusRequesterComment

requesteditemstatus_requester_comment = RequesteditemstatusRequesterComment(
comment='This is a comment.',
created='2017-07-11T18:45:37.098Z',
author=sailpoint.access_requests.models.commentdto_author.commentdto_author(
                    type = 'IDENTITY', 
                    id = '2c9180847e25f377017e2ae8cae4650b', 
                    name = 'john.doe', )
)

```
[[Back to top]](#) 

