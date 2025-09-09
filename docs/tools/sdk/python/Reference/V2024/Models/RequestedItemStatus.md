---
id: v2024-requested-item-status
title: RequestedItemStatus
pagination_label: RequestedItemStatus
sidebar_label: RequestedItemStatus
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RequestedItemStatus', 'V2024RequestedItemStatus'] 
slug: /tools/sdk/python/v2024/models/requested-item-status
tags: ['SDK', 'Software Development Kit', 'RequestedItemStatus', 'V2024RequestedItemStatus']
---

# RequestedItemStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the access request. As of 2025, this is a new property. Older access requests might not have an ID. | [optional] 
**name** | **str** | Human-readable display name of the item being requested. | [optional] 
**type** |  **Enum** [  'ACCESS_PROFILE',    'ROLE',    'ENTITLEMENT' ] | Type of requested object. | [optional] 
**cancelled_request_details** | [**RequestedItemStatusCancelledRequestDetails**](requested-item-status-cancelled-request-details) |  | [optional] 
**error_messages** | [**[]List[ErrorMessageDto]**](error-message-dto) | List of list of localized error messages, if any, encountered during the approval/provisioning process. | [optional] 
**state** | [**RequestedItemStatusRequestState**](requested-item-status-request-state) |  | [optional] 
**approval_details** | [**[]ApprovalStatusDto**](approval-status-dto) | Approval details for each item. | [optional] 
**approval_ids** | **[]str** | List of approval IDs associated with the request. | [optional] 
**manual_work_item_details** | [**[]ManualWorkItemDetails**](manual-work-item-details) | Manual work items created for provisioning the item. | [optional] 
**account_activity_item_id** | **str** | Id of associated account activity item. | [optional] 
**request_type** | [**AccessRequestType**](access-request-type) |  | [optional] 
**modified** | **datetime** | When the request was last modified. | [optional] 
**created** | **datetime** | When the request was created. | [optional] 
**requester** | [**AccessItemRequester**](access-item-requester) |  | [optional] 
**requested_for** | [**RequestedItemStatusRequestedFor**](requested-item-status-requested-for) |  | [optional] 
**requester_comment** | [**RequestedItemStatusRequesterComment**](requested-item-status-requester-comment) |  | [optional] 
**sod_violation_context** | [**RequestedItemStatusSodViolationContext**](requested-item-status-sod-violation-context) |  | [optional] 
**provisioning_details** | [**RequestedItemStatusProvisioningDetails**](requested-item-status-provisioning-details) |  | [optional] 
**pre_approval_trigger_details** | [**RequestedItemStatusPreApprovalTriggerDetails**](requested-item-status-pre-approval-trigger-details) |  | [optional] 
**access_request_phases** | [**[]AccessRequestPhases**](access-request-phases) | A list of Phases that the Access Request has gone through in order, to help determine the status of the request. | [optional] 
**description** | **str** | Description associated to the requested object. | [optional] 
**remove_date** | **datetime** | When the role access is scheduled for removal. | [optional] 
**cancelable** | **bool** | True if the request can be canceled. | [optional] [default to False]
**access_request_id** | **str** | This is the account activity id. | [optional] 
**client_metadata** | **map[string]str** | Arbitrary key-value pairs, if any were included in the corresponding access request | [optional] 
**requested_accounts** | [**[]RequestedAccountRef**](requested-account-ref) | The accounts selected by the user for the access to be provisioned on, in case they have multiple accounts on one or more sources. | [optional] 
**privilege_level** | **str** | The privilege level of the requested access item, if applicable. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.requested_item_status import RequestedItemStatus

requested_item_status = RequestedItemStatus(
id='2c9180926cbfbddd016cbfc7c3b10010',
name='AccessProfile1',
type='ACCESS_PROFILE',
cancelled_request_details=,
error_messages=[
                    {locale=en-US, localeOrigin=DEFAULT, text=Error Message}
                    ],
state='EXECUTING',
approval_details=[
                    sailpoint.v2024.models.approval_status_dto.Approval Status Dto(
                        forwarded = False, 
                        original_owner = sailpoint.v2024.models.approval_status_dto_original_owner.ApprovalStatusDto_originalOwner(
                            type = 'IDENTITY', 
                            id = '2c7180a46faadee4016fb4e018c20642', 
                            name = 'Michael Michaels', ), 
                        current_owner = null, 
                        modified = '2019-08-23T18:52:57.398Z', 
                        status = 'PENDING', 
                        scheme = 'MANAGER', 
                        error_messages = [
                            sailpoint.v2024.models.error_message_dto.Error Message Dto(
                                locale = 'en-US', 
                                locale_origin = 'DEFAULT', 
                                text = 'The request was syntactically correct but its content is semantically invalid.', )
                            ], 
                        comment = 'I approve this request', 
                        remove_date = '2020-07-11T00:00Z', )
                    ],
approval_ids=[85f0cf482dd44327b593624c07906c21, fa57e1bfa36f41ee85e33ee59fcbeac5],
manual_work_item_details=[
                    sailpoint.v2024.models.manual_work_item_details.Manual Work Item Details(
                        forwarded = True, 
                        original_owner = sailpoint.v2024.models.manual_work_item_details_original_owner.ManualWorkItemDetails_originalOwner(
                            type = 'IDENTITY', 
                            id = '2c7180a46faadee4016fb4e018c20642', 
                            name = 'Michael Michaels', ), 
                        current_owner = sailpoint.v2024.models.manual_work_item_details_current_owner.ManualWorkItemDetails_currentOwner(
                            type = 'IDENTITY', 
                            id = '2c3780a46faadee4016fb4e018c20652', 
                            name = 'Allen Albertson', ), 
                        modified = '2019-08-23T18:52:57.398Z', 
                        status = 'PENDING', 
                        forward_history = [
                            sailpoint.v2024.models.approval_forward_history.Approval Forward History(
                                old_approver_name = 'Frank Mir', 
                                new_approver_name = 'Al Volta', 
                                comment = 'Forwarding from Frank to Al', 
                                modified = '2019-08-23T18:52:57.398Z', 
                                forwarder_name = 'William Wilson', 
                                reassignment_type = 'AUTOMATIC_REASSIGNMENT', )
                            ], )
                    ],
account_activity_item_id='2c9180926cbfbddd016cbfc7c3b10010',
request_type='GRANT_ACCESS',
modified='2019-08-23T18:52:59.162Z',
created='2019-08-23T18:40:35.772Z',
requester=sailpoint.v2024.models.access_item_requester.Access Item Requester(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20648', 
                    name = 'William Wilson', ),
requested_for=sailpoint.v2024.models.requested_item_status_requested_for.RequestedItemStatus_requestedFor(
                    type = 'IDENTITY', 
                    id = '2c9180835d191a86015d28455b4b232a', 
                    name = 'William Wilson', ),
requester_comment=,
sod_violation_context=,
provisioning_details=,
pre_approval_trigger_details=,
access_request_phases=[
                    sailpoint.v2024.models.access_request_phases.Access Request Phases(
                        started = '2020-07-11T00:00Z', 
                        finished = '2020-07-12T00:00Z', 
                        name = 'APPROVAL_PHASE', 
                        state = 'COMPLETED', 
                        result = 'SUCCESSFUL', 
                        phase_reference = 'approvalDetails', )
                    ],
description='This is the Engineering role that engineers are granted.',
remove_date='2019-10-23T00:00Z',
cancelable=True,
access_request_id='2b838de9-db9b-abcf-e646-d4f274ad4238',
client_metadata={key1=value1, key2=value2},
requested_accounts=[
                    sailpoint.v2024.models.requested_account_ref.Requested Account Ref(
                        name = 'Glen.067da3248e914', 
                        type = 'IDENTITY', 
                        account_uuid = '{fab7119e-004f-4822-9c33-b8d570d6c6a6}', 
                        account_id = 'CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local', 
                        source_name = 'Multi Account AD source name', )
                    ],
privilege_level='High'
)

```
[[Back to top]](#) 

