---
id: v2024-approval
title: Approval
pagination_label: Approval
sidebar_label: Approval
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Approval', 'V2024Approval'] 
slug: /tools/sdk/python/v2024/models/approval
tags: ['SDK', 'Software Development Kit', 'Approval', 'V2024Approval']
---

# Approval

Approval Object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approval_id** | **str** | The Approval ID | [optional] 
**approvers** | [**[]ApprovalIdentity**](approval-identity) | Object representation of an approver of an approval | [optional] 
**created_date** | **str** | Date the approval was created | [optional] 
**type** | **str** | Type of approval | [optional] 
**name** | [**[]ApprovalName**](approval-name) | The name of the approval for a given locale | [optional] 
**batch_request** | [**ApprovalBatch**](approval-batch) | The name of the approval for a given locale | [optional] 
**description** | [**[]ApprovalDescription**](approval-description) | The description of the approval for a given locale | [optional] 
**priority** |  **Enum** [  'HIGH',    'MEDIUM',    'LOW' ] | The priority of the approval | [optional] 
**requester** | [**ApprovalIdentity**](approval-identity) | Object representation of the requester of the approval | [optional] 
**comments** | [**[]ApprovalComment1**](approval-comment1) | Object representation of a comment on the approval | [optional] 
**approved_by** | [**[]ApprovalIdentity**](approval-identity) | Array of approvers who have approved the approval | [optional] 
**rejected_by** | [**[]ApprovalIdentity**](approval-identity) | Array of approvers who have rejected the approval | [optional] 
**completed_date** | **str** | Date the approval was completed | [optional] 
**approval_criteria** |  **Enum** [  'SINGLE',    'DOUBLE',    'TRIPLE',    'QUARTER',    'HALF',    'ALL' ] | Criteria that needs to be met for an approval to be marked as approved | [optional] 
**status** |  **Enum** [  'PENDING',    'APPROVED',    'REJECTED' ] | The current status of the approval | [optional] 
**additional_attributes** | **str** | Json string representing additional attributes known about the object to be approved. | [optional] 
**reference_data** | [**[]ApprovalReference**](approval-reference) | Reference data related to the approval | [optional] 
}

## Example

```python
from sailpoint.v2024.models.approval import Approval

approval = Approval(
approval_id='38453251-6be2-5f8f-df93-5ce19e295837',
approvers=[
                    sailpoint.v2024.models.approval_identity.Approval Identity(
                        id = '85d173e7d57e496569df763231d6deb6a', 
                        type = 'IDENTITY', 
                        name = 'John Doe', )
                    ],
created_date='2023-04-12T23:20:50.52Z',
type='ENTITLEMENT_DESCRIPTIONS',
name=[
                    sailpoint.v2024.models.approval_name.Approval Name(
                        value = 'Audit DB Access', 
                        locale = 'en_US', )
                    ],
batch_request={batchId=38453251-6be2-5f8f-df93-5ce19e295837, batchSize=100},
description=[
                    sailpoint.v2024.models.approval_description.Approval Description(
                        value = 'This access allows viewing and editing of workflow resource', 
                        locale = 'en_US', )
                    ],
priority='HIGH',
requester={id=85d173e7d57e496569df763231d6deb6a, type=IDENTITY, name=John Doe},
comments=[
                    sailpoint.v2024.models.approval_comment.Approval Comment(
                        author = sailpoint.v2024.models.approval_identity.Approval Identity(
                            id = '85d173e7d57e496569df763231d6deb6a', 
                            type = 'IDENTITY', 
                            name = 'John Doe', ), 
                        comment = 'Looks good', 
                        created_date = '2023-04-12T23:20:50.52Z', )
                    ],
approved_by=[
                    sailpoint.v2024.models.approval_identity.Approval Identity(
                        id = '85d173e7d57e496569df763231d6deb6a', 
                        type = 'IDENTITY', 
                        name = 'John Doe', )
                    ],
rejected_by=[
                    sailpoint.v2024.models.approval_identity.Approval Identity(
                        id = '85d173e7d57e496569df763231d6deb6a', 
                        type = 'IDENTITY', 
                        name = 'John Doe', )
                    ],
completed_date='2023-04-12T23:20:50.52Z',
approval_criteria='SINGLE',
status='PENDING',
additional_attributes='{ "llm_description": "generated description" }',
reference_data=[
                    sailpoint.v2024.models.approval_reference.Approval Reference(
                        id = '64012350-8fd9-4f6c-a170-1fe123683899', 
                        type = 'AccessRequestId', )
                    ]
)

```
[[Back to top]](#) 

