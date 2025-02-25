---
id: v2024-approval1
title: Approval1
pagination_label: Approval1
sidebar_label: Approval1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Approval1', 'V2024Approval1'] 
slug: /tools/sdk/python/v2024/models/approval1
tags: ['SDK', 'Software Development Kit', 'Approval1', 'V2024Approval1']
---

# Approval1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments** | [**[]ApprovalComment2**](approval-comment2) |  | [optional] 
**created** | **datetime** | A date-time in ISO-8601 format | [optional] 
**modified** | **datetime** | A date-time in ISO-8601 format | [optional] 
**owner** | [**AccountSource**](account-source) |  | [optional] 
**result** | **str** | The result of the approval | [optional] 
**type** | **str** |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.approval1 import Approval1

approval1 = Approval1(
comments=[
                    sailpoint.v2024.models.approval_comment_2.ApprovalComment_2(
                        comment = 'This request was autoapproved by our automated ETS subscriber.', 
                        commenter = 'Automated AR Approval', 
                        date = '2018-06-25T20:22:28.104Z', )
                    ],
created='2018-06-25T20:22:28.104Z',
modified='2018-06-25T20:22:28.104Z',
owner=,
result='Finished',
type=''
)

```
[[Back to top]](#) 

