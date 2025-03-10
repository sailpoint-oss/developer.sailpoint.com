---
id: v2024-pending-approval
title: PendingApproval
pagination_label: PendingApproval
sidebar_label: PendingApproval
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'PendingApproval', 'V2024PendingApproval'] 
slug: /tools/sdk/python/v2024/models/pending-approval
tags: ['SDK', 'Software Development Kit', 'PendingApproval', 'V2024PendingApproval']
---

# PendingApproval


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The approval id. | [optional] 
**access_request_id** | **str** | This is the access request id. | [optional] 
**name** | **str** | The name of the approval. | [optional] 
**created** | **datetime** | When the approval was created. | [optional] 
**modified** | **datetime** | When the approval was modified last time. | [optional] 
**request_created** | **datetime** | When the access-request was created. | [optional] 
**request_type** | [**AccessRequestType**](access-request-type) |  | [optional] 
**requester** | [**AccessItemRequester**](access-item-requester) |  | [optional] 
**requested_for** | [**AccessItemRequestedFor**](access-item-requested-for) |  | [optional] 
**owner** | [**PendingApprovalOwner**](pending-approval-owner) |  | [optional] 
**requested_object** | [**RequestableObjectReference**](requestable-object-reference) |  | [optional] 
**requester_comment** | [**CommentDto**](comment-dto) |  | [optional] 
**previous_reviewers_comments** | [**[]CommentDto**](comment-dto) | The history of the previous reviewers comments. | [optional] 
**forward_history** | [**[]ApprovalForwardHistory**](approval-forward-history) | The history of approval forward action. | [optional] 
**comment_required_when_rejected** | **bool** | When true the rejector has to provide comments when rejecting | [optional] [default to False]
**action_in_process** | [**PendingApprovalAction**](pending-approval-action) |  | [optional] 
**remove_date** | **datetime** | The date the role or access profile or entitlement is no longer assigned to the specified identity. | [optional] 
**remove_date_update_requested** | **bool** | If true, then the request is to change the remove date or sunset date. | [optional] [default to False]
**current_remove_date** | **datetime** | The remove date or sunset date that was assigned at the time of the request. | [optional] 
**sod_violation_context** | [**SodViolationContextCheckCompleted**](sod-violation-context-check-completed) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.pending_approval import PendingApproval

pending_approval = PendingApproval(
id='id12345',
access_request_id='2b838de9db9babcfe646d4f274ad4238',
name='aName',
created='2017-07-11T18:45:37.098Z',
modified='2018-07-25T20:22:28.104Z',
request_created='2017-07-11T18:45:35.098Z',
request_type='GRANT_ACCESS',
requester=sailpoint.v2024.models.access_item_requester.AccessItemRequester(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20648', 
                    name = 'William Wilson', ),
requested_for=sailpoint.v2024.models.access_item_requested_for.AccessItemRequestedFor(
                    type = 'IDENTITY', 
                    id = '2c4180a46faadee4016fb4e018c20626', 
                    name = 'Robert Robinson', ),
owner=sailpoint.v2024.models.pending_approval_owner.PendingApproval_owner(
                    type = 'IDENTITY', 
                    id = '2c9180a46faadee4016fb4e018c20639', 
                    name = 'Support', ),
requested_object=sailpoint.v2024.models.requestable_object_reference.RequestableObjectReference(
                    id = '2c9180835d2e5168015d32f890ca1581', 
                    name = 'Applied Research Access', 
                    description = 'Access to research information, lab results, and schematics', 
                    type = 'ROLE', ),
requester_comment=sailpoint.v2024.models.comment_dto.CommentDto(
                    comment = 'This is a comment.', 
                    created = '2017-07-11T18:45:37.098Z', 
                    author = sailpoint.v2024.models.comment_dto_author.CommentDto_author(
                        type = 'IDENTITY', 
                        id = '2c9180847e25f377017e2ae8cae4650b', 
                        name = 'john.doe', ), ),
previous_reviewers_comments=[
                    sailpoint.v2024.models.comment_dto.CommentDto(
                        comment = 'This is a comment.', 
                        created = '2017-07-11T18:45:37.098Z', 
                        author = sailpoint.v2024.models.comment_dto_author.CommentDto_author(
                            type = 'IDENTITY', 
                            id = '2c9180847e25f377017e2ae8cae4650b', 
                            name = 'john.doe', ), )
                    ],
forward_history=[
                    sailpoint.v2024.models.approval_forward_history.ApprovalForwardHistory(
                        old_approver_name = 'Frank Mir', 
                        new_approver_name = 'Al Volta', 
                        comment = 'Forwarding from Frank to Al', 
                        modified = '2019-08-23T18:52:57.398Z', 
                        forwarder_name = 'William Wilson', 
                        reassignment_type = 'AUTOMATIC_REASSIGNMENT', )
                    ],
comment_required_when_rejected=True,
action_in_process='APPROVED',
remove_date='2020-07-11T00:00Z',
remove_date_update_requested=True,
current_remove_date='2020-07-11T00:00Z',
sod_violation_context=sailpoint.v2024.models.sod_violation_context_check_completed.SodViolationContextCheckCompleted(
                    state = 'SUCCESS', 
                    uuid = 'f73d16e9-a038-46c5-b217-1246e15fdbdd', 
                    violation_check_result = sailpoint.v2024.models.sod_violation_check_result.SodViolationCheckResult(
                        message = sailpoint.v2024.models.error_message_dto.ErrorMessageDto(
                            locale = 'en-US', 
                            locale_origin = 'DEFAULT', 
                            text = 'The request was syntactically correct but its content is semantically invalid.', ), 
                        client_metadata = {requestedAppName=test-app, requestedAppId=2c91808f7892918f0178b78da4a305a1}, 
                        violation_contexts = [
                            sailpoint.v2024.models.sod_violation_context.SodViolationContext(
                                policy = sailpoint.v2024.models.sod_policy_dto.SodPolicyDto(
                                    type = 'SOD_POLICY', 
                                    id = '0f11f2a4-7c94-4bf3-a2bd-742580fe3bde', 
                                    name = 'Business SOD Policy', ), 
                                conflicting_access_criteria = sailpoint.v2024.models.sod_violation_context_conflicting_access_criteria.SodViolationContext_conflictingAccessCriteria(
                                    left_criteria = sailpoint.v2024.models.sod_violation_context_conflicting_access_criteria_left_criteria.SodViolationContext_conflictingAccessCriteria_leftCriteria(
                                        criteria_list = [
                                            sailpoint.v2024.models.sod_exempt_criteria.SodExemptCriteria(
                                                existing = True, 
                                                type = 'IDENTITY', 
                                                id = '2c918085771e9d3301773b3cb66f6398', 
                                                name = 'My HR Entitlement', )
                                            ], ), 
                                    right_criteria = sailpoint.v2024.models.sod_violation_context_conflicting_access_criteria_left_criteria.SodViolationContext_conflictingAccessCriteria_leftCriteria(), ), )
                            ], 
                        violated_policies = [
                            sailpoint.v2024.models.sod_policy_dto.SodPolicyDto(
                                id = '0f11f2a4-7c94-4bf3-a2bd-742580fe3bde', 
                                name = 'Business SOD Policy', )
                            ], ), )
)

```
[[Back to top]](#) 

