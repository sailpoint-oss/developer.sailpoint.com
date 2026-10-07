# RequestedItemStatusRequesterComment

# RequestedItemStatusRequesterComment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | Comment content. | [optional] 
**created** | **datetime** | Date and time comment was created. | [optional] 
**author** | [**CommentDtoAuthor**](comment-dto-author) |  | [optional] 
\}

## Example

```python
from sailpoint.access_requests.models.requested_item_status_requester_comment import RequestedItemStatusRequesterComment

requested_item_status_requester_comment = RequestedItemStatusRequesterComment(
comment='This is a comment.',
created='2017-07-11T18:45:37.098Z',
author=sailpoint.access_requests.models.comment_dto_author.CommentDto_author(
                    type = 'IDENTITY', 
                    id = '2c9180847e25f377017e2ae8cae4650b', 
                    name = 'john.doe', )
)

```
[[Back to top]](#) 

