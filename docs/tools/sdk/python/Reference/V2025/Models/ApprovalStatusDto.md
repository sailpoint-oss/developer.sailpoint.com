---
id: v2025-approval-status-dto
title: ApprovalStatusDto
pagination_label: ApprovalStatusDto
sidebar_label: ApprovalStatusDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalStatusDto', 'V2025ApprovalStatusDto'] 
slug: /tools/sdk/python/v2025/models/approval-status-dto
tags: ['SDK', 'Software Development Kit', 'ApprovalStatusDto', 'V2025ApprovalStatusDto']
---

# ApprovalStatusDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**forwarded** | **bool** | True if the request for this item was forwarded from one owner to another. | [optional] [default to False]
**original_owner** | [**ApprovalStatusDtoOriginalOwner**](approval-status-dto-original-owner) |  | [optional] 
**current_owner** | [**ApprovalStatusDtoCurrentOwner**](approval-status-dto-current-owner) |  | [optional] 
**modified** | **datetime** | Time at which item was modified. | [optional] 
**status** | [**ManualWorkItemState**](manual-work-item-state) |  | [optional] 
**scheme** | [**ApprovalScheme**](approval-scheme) |  | [optional] 
**error_messages** | [**[]ErrorMessageDto**](error-message-dto) | If the request failed, includes any error messages that were generated. | [optional] 
**comment** | **str** | Comment, if any, provided by the approver. | [optional] 
**remove_date** | **datetime** | The date the role or access profile or entitlement is no longer assigned to the specified identity. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.approval_status_dto import ApprovalStatusDto

approval_status_dto = ApprovalStatusDto(
forwarded=False,
original_owner=sailpoint.v2025.models.approval_status_dto_original_owner.ApprovalStatusDto_originalOwner(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20642', 
                    name = 'Michael Michaels', ),
current_owner=,
modified='2019-08-23T18:52:57.398Z',
status='PENDING',
scheme='MANAGER',
error_messages=[
                    sailpoint.v2025.models.error_message_dto.ErrorMessageDto(
                        locale = 'en-US', 
                        locale_origin = 'DEFAULT', 
                        text = 'The request was syntactically correct but its content is semantically invalid.', )
                    ],
comment='I approve this request',
remove_date='2020-07-11T00:00Z'
)

```
[[Back to top]](#) 

