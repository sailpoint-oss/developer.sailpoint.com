---
id: v2024-approval-status-dto1
title: ApprovalStatusDto1
pagination_label: ApprovalStatusDto1
sidebar_label: ApprovalStatusDto1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalStatusDto1', 'V2024ApprovalStatusDto1'] 
slug: /tools/sdk/python/v2024/models/approval-status-dto1
tags: ['SDK', 'Software Development Kit', 'ApprovalStatusDto1', 'V2024ApprovalStatusDto1']
---

# ApprovalStatusDto1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**forwarded** | **bool** | True if the request for this item was forwarded from one owner to another. | [optional] [default to False]
**original_owner** | [**ApprovalStatusDtoOriginalOwner**](approval-status-dto-original-owner) |  | [optional] 
**current_owner** | [**ApprovalStatusDtoCurrentOwner**](approval-status-dto-current-owner) |  | [optional] 
**modified** | **datetime** | Time at which item was modified. | [optional] 
**status** | [**ManualWorkItemState**](manual-work-item-state) |  | [optional] 
**scheme** | [**ApprovalScheme**](approval-scheme) |  | [optional] 
**error_messages** | [**[]ErrorMessageDto1**](error-message-dto1) | If the request failed, includes any error messages that were generated. | [optional] 
**comment** | **str** | Comment, if any, provided by the approver. | [optional] 
**remove_date** | **datetime** | The date the role or access profile or entitlement is no longer assigned to the specified identity. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.approval_status_dto1 import ApprovalStatusDto1

approval_status_dto1 = ApprovalStatusDto1(
forwarded=False,
original_owner=sailpoint.v2024.models.approval_status_dto_original_owner.ApprovalStatusDto_originalOwner(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20642', 
                    name = 'Michael Michaels', ),
current_owner=,
modified='2019-08-23T18:52:57.398Z',
status='PENDING',
scheme='MANAGER',
error_messages=[
                    sailpoint.v2024.models.error_message_dto_1.ErrorMessageDto_1(
                        locale = 'en-US', 
                        locale_origin = 'DEFAULT', 
                        text = 'The request was syntactically correct but its content is semantically invalid.', )
                    ],
comment='I approve this request',
remove_date='2020-07-11T00:00Z'
)

```
[[Back to top]](#) 

