---
id: approval
title: Approval
pagination_label: Approval
sidebar_label: Approval
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Approval', 'Approval'] 
slug: /tools/sdk/python/v3/models/approval
tags: ['SDK', 'Software Development Kit', 'Approval', 'Approval']
---

# Approval


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments** | [**[]ApprovalComment**](approval-comment) |  | [optional] 
**modified** | **datetime** | A date-time in ISO-8601 format | [optional] 
**owner** | [**ActivityIdentity**](activity-identity) |  | [optional] 
**result** | **str** | The result of the approval | [optional] 
**attribute_request** | [**AttributeRequest**](attribute-request) |  | [optional] 
**source** | [**AccountSource**](account-source) |  | [optional] 
}

## Example

```python
from sailpoint.v3.models.approval import Approval

approval = Approval(
comments=[
                    sailpoint.v3.models.approval_comment.ApprovalComment(
                        comment = 'This request was autoapproved by our automated ETS subscriber.', 
                        commenter = 'Automated AR Approval', 
                        date = '2018-06-25T20:22:28.104Z', )
                    ],
modified='2018-06-25T20:22:28.104Z',
owner=,
result='Finished',
attribute_request=sailpoint.v3.models.attribute_request.AttributeRequest(
                    name = 'groups', 
                    op = 'Add', 
                    value = null, ),
source=
)

```
[[Back to top]](#) 

