---
id: completedapproval
title: Completedapproval
pagination_label: Completedapproval
sidebar_label: Completedapproval
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Completedapproval', 'Completedapproval'] 
slug: /tools/sdk/python/access-request-approvals/models/completedapproval
tags: ['SDK', 'Software Development Kit', 'Completedapproval', 'Completedapproval']
---

# Completedapproval


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The approval id. | [optional] 
**name** | **str** | The name of the approval. | [optional] 
**created** | **datetime** | When the approval was created. | [optional] 
**modified** | **datetime** | When the approval was modified last time. | [optional] 
**request_created** | **datetime** | When the access-request was created. | [optional] 
**request_type** | [**Accessrequesttype**](accessrequesttype) |  | [optional] 
**requester** | [**Accessitemrequester**](accessitemrequester) |  | [optional] 
**requested_for** | [**CompletedapprovalRequestedFor**](completedapproval-requested-for) |  | [optional] 
**reviewed_by** | [**Accessitemreviewedby**](accessitemreviewedby) |  | [optional] 
**owner** | [**Ownerdto**](ownerdto) |  | [optional] 
**requested_object** | [**Requestableobjectreference**](requestableobjectreference) |  | [optional] 
**requester_comment** | [**CompletedapprovalRequesterComment**](completedapproval-requester-comment) |  | [optional] 
**reviewer_comment** | [**CompletedapprovalReviewerComment**](completedapproval-reviewer-comment) |  | [optional] 
**previous_reviewers_comments** | [**[]Commentdto**](commentdto) | The history of the previous reviewers comments. | [optional] 
**forward_history** | [**[]Approvalforwardhistory**](approvalforwardhistory) | The history of approval forward action. | [optional] 
**comment_required_when_rejected** | **bool** | When true the rejector has to provide comments when rejecting | [optional] [default to False]
**state** | [**Completedapprovalstate**](completedapprovalstate) |  | [optional] 
**remove_date** | **datetime** | The date the role or access profile or entitlement is no longer assigned to the specified identity. | [optional] 
**remove_date_update_requested** | **bool** | If true, then the request was to change the remove date or sunset date. | [optional] [default to False]
**current_remove_date** | **datetime** | The remove date or sunset date that was assigned at the time of the request. | [optional] 
**start_date** | **datetime** | The date the role or access profile or entitlement is/will assigned to the specified identity. | [optional] 
**start_update_requested** | **bool** | If true, then the request is to change the start date or sunrise date. | [optional] [default to False]
**current_start_date** | **datetime** | The start date or sunrise date that was assigned at the time of the request. | [optional] 
**sod_violation_context** | [**Sodviolationcontextcheckcompleted**](sodviolationcontextcheckcompleted) |  | [optional] 
**pre_approval_trigger_result** | [**CompletedapprovalPreApprovalTriggerResult**](completedapproval-pre-approval-trigger-result) |  | [optional] 
**client_metadata** | **map[string]str** | Arbitrary key-value pairs provided during the request. | [optional] 
**requested_accounts** | [**[]Requestedaccountref**](requestedaccountref) | The accounts selected by the user for the access to be provisioned on, in case they have multiple accounts on one or more sources. | [optional] 
**privilege_level** | **str** | The privilege level of the requested access item, if applicable. | [optional] 
**max_permitted_access_duration** | [**PendingapprovalMaxPermittedAccessDuration**](pendingapproval-max-permitted-access-duration) |  | [optional] 
}

## Example

```python
from sailpoint.access_request_approvals.models.completedapproval import Completedapproval

completedapproval = Completedapproval(
id='id12345',
name='aName',
created='2017-07-11T18:45:37.098Z',
modified='2018-07-25T20:22:28.104Z',
request_created='2017-07-11T18:45:35.098Z',
request_type='GRANT_ACCESS',
requester=sailpoint.access_request_approvals.models.access_item_requester.Access Item Requester(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20648', 
                    name = 'William Wilson', ),
requested_for=sailpoint.access_request_approvals.models.completedapproval_requested_for.completedapproval_requestedFor(
                    type = 'IDENTITY', 
                    id = '2c9180835d191a86015d28455b4b232a', 
                    name = 'William Wilson', ),
reviewed_by=sailpoint.access_request_approvals.models.access_item_reviewed_by.Access Item Reviewed By(
                    type = 'IDENTITY', 
                    id = '2c3780a46faadee4016fb4e018c20652', 
                    name = 'Allen Albertson', ),
owner=sailpoint.access_request_approvals.models.owner_dto.Owner Dto(
                    type = 'IDENTITY', 
                    id = '2c9180a46faadee4016fb4e018c20639', 
                    name = 'Support', ),
requested_object=sailpoint.access_request_approvals.models.requestable_object_reference.Requestable Object Reference(
                    id = '2c9180835d2e5168015d32f890ca1581', 
                    name = 'Applied Research Access', 
                    description = 'Access to research information, lab results, and schematics', 
                    type = 'ROLE', ),
requester_comment=,
reviewer_comment=,
previous_reviewers_comments=[
                    sailpoint.access_request_approvals.models.comment_dto.Comment Dto(
                        comment = 'This is a comment.', 
                        created = '2017-07-11T18:45:37.098Z', 
                        author = sailpoint.access_request_approvals.models.commentdto_author.commentdto_author(
                            type = 'IDENTITY', 
                            id = '2c9180847e25f377017e2ae8cae4650b', 
                            name = 'john.doe', ), )
                    ],
forward_history=[
                    sailpoint.access_request_approvals.models.approval_forward_history.Approval Forward History(
                        old_approver_name = 'Frank Mir', 
                        new_approver_name = 'Al Volta', 
                        comment = 'Forwarding from Frank to Al', 
                        modified = '2019-08-23T18:52:57.398Z', 
                        forwarder_name = 'William Wilson', 
                        reassignment_type = 'AUTOMATIC_REASSIGNMENT', )
                    ],
comment_required_when_rejected=True,
state='APPROVED',
remove_date='2020-07-11T00:00Z',
remove_date_update_requested=True,
current_remove_date='2020-07-11T00:00Z',
start_date='2020-07-11T00:00Z',
start_update_requested=True,
current_start_date='2020-07-11T00:00Z',
sod_violation_context=sailpoint.access_request_approvals.models.sod_violation_context_check_completed.Sod Violation Context Check Completed(
                    state = 'SUCCESS', 
                    uuid = 'f73d16e9-a038-46c5-b217-1246e15fdbdd', 
                    violation_check_result = sailpoint.access_request_approvals.models.sod_violation_check_result.Sod Violation Check Result(
                        message = sailpoint.access_request_approvals.models.error_message_dto.Error Message Dto(
                            locale = 'en-US', 
                            locale_origin = 'DEFAULT', 
                            text = 'The request was syntactically correct but its content is semantically invalid.', ), 
                        client_metadata = {"requestedAppName":"test-app","requestedAppId":"2c91808f7892918f0178b78da4a305a1"}, 
                        violation_contexts = [
                            sailpoint.access_request_approvals.models.sod_violation_context.Sod Violation Context(
                                policy = sailpoint.access_request_approvals.models.sod_policy_dto.Sod Policy Dto(
                                    type = 'SOD_POLICY', 
                                    id = '0f11f2a4-7c94-4bf3-a2bd-742580fe3bde', 
                                    name = 'Business SOD Policy', ), 
                                conflicting_access_criteria = sailpoint.access_request_approvals.models.sodviolationcontext_conflicting_access_criteria.sodviolationcontext_conflictingAccessCriteria(
                                    left_criteria = sailpoint.access_request_approvals.models.sodviolationcontext_conflicting_access_criteria_left_criteria.sodviolationcontext_conflictingAccessCriteria_leftCriteria(
                                        criteria_list = [
                                            sailpoint.access_request_approvals.models.sod_exempt_criteria.Sod Exempt Criteria(
                                                existing = True, 
                                                type = 'IDENTITY', 
                                                id = '2c918085771e9d3301773b3cb66f6398', 
                                                name = 'My HR Entitlement', )
                                            ], ), 
                                    right_criteria = sailpoint.access_request_approvals.models.sodviolationcontext_conflicting_access_criteria_left_criteria.sodviolationcontext_conflictingAccessCriteria_leftCriteria(), ), )
                            ], 
                        violated_policies = [
                            sailpoint.access_request_approvals.models.sod_policy_dto.Sod Policy Dto(
                                id = '0f11f2a4-7c94-4bf3-a2bd-742580fe3bde', 
                                name = 'Business SOD Policy', )
                            ], ), ),
pre_approval_trigger_result=sailpoint.access_request_approvals.models.completedapproval_pre_approval_trigger_result.completedapproval_preApprovalTriggerResult(
                    comment = 'This request was autoapproved by our automated ETS subscriber', 
                    decision = 'APPROVED', 
                    reviewer = 'Automated AR Approval', 
                    date = '2022-06-07T19:18:40.748Z', ),
client_metadata={"requestedAppName":"test-app","requestedAppId":"2c91808f7892918f0178b78da4a305a1"},
requested_accounts=[
                    sailpoint.access_request_approvals.models.requested_account_ref.Requested Account Ref(
                        name = 'Glen.067da3248e914', 
                        type = 'IDENTITY', 
                        account_uuid = '{fab7119e-004f-4822-9c33-b8d570d6c6a6}', 
                        account_id = 'CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local', 
                        source_name = 'Multi Account AD source name', )
                    ],
privilege_level='High',
max_permitted_access_duration=sailpoint.access_request_approvals.models.pendingapproval_max_permitted_access_duration.pendingapproval_maxPermittedAccessDuration(
                    value = 5, 
                    time_unit = 'DAYS', )
)

```
[[Back to top]](#) 

