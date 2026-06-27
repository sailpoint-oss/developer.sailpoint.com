---
id: commentdto
title: Commentdto
pagination_label: Commentdto
sidebar_label: Commentdto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Commentdto', 'Commentdto'] 
slug: /tools/sdk/python/access-request-approvals/models/commentdto
tags: ['SDK', 'Software Development Kit', 'Commentdto', 'Commentdto']
---

# Commentdto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | Comment content. | [optional] 
**created** | **datetime** | Date and time comment was created. | [optional] 
**author** | [**CommentdtoAuthor**](commentdto-author) |  | [optional] 
}

## Example

```python
from sailpoint.access_request_approvals.models.commentdto import Commentdto

commentdto = Commentdto(
comment='This is a comment.',
created='2017-07-11T18:45:37.098Z',
author=sailpoint.access_request_approvals.models.commentdto_author.commentdto_author(
                    type = 'IDENTITY', 
                    id = '2c9180847e25f377017e2ae8cae4650b', 
                    name = 'john.doe', )
)

```
[[Back to top]](#) 

