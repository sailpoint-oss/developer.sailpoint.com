---
id: beta-requested-item-status-requester-comment
title: RequestedItemStatusRequesterComment
pagination_label: RequestedItemStatusRequesterComment
sidebar_label: RequestedItemStatusRequesterComment
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RequestedItemStatusRequesterComment', 'BetaRequestedItemStatusRequesterComment'] 
slug: /tools/sdk/python/beta/models/requested-item-status-requester-comment
tags: ['SDK', 'Software Development Kit', 'RequestedItemStatusRequesterComment', 'BetaRequestedItemStatusRequesterComment']
---

# RequestedItemStatusRequesterComment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | Comment content. | [optional] 
**created** | **datetime** | Date and time comment was created. | [optional] 
**author** | [**CommentDto1Author**](comment-dto1-author) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.requested_item_status_requester_comment import RequestedItemStatusRequesterComment

requested_item_status_requester_comment = RequestedItemStatusRequesterComment(
comment='This is a comment.',
created='2017-07-11T18:45:37.098Z',
author=sailpoint.beta.models.comment_dto_1_author.CommentDto_1_author(
                    type = 'IDENTITY', 
                    id = '2c9180847e25f377017e2ae8cae4650b', 
                    name = 'john.doe', )
)

```
[[Back to top]](#) 

