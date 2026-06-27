---
id: accessrequestadminitemstatus
title: Accessrequestadminitemstatus
pagination_label: Accessrequestadminitemstatus
sidebar_label: Accessrequestadminitemstatus
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accessrequestadminitemstatus', 'Accessrequestadminitemstatus'] 
slug: /tools/sdk/python/access-requests/models/accessrequestadminitemstatus
tags: ['SDK', 'Software Development Kit', 'Accessrequestadminitemstatus', 'Accessrequestadminitemstatus']
---

# Accessrequestadminitemstatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the access request. This is a new property as of 2025. Older access requests may not have an ID. | [optional] 
**name** | **str** | Human-readable display name of the item being requested. | [optional] 
**type** |  **Enum** [  'ACCESS_PROFILE',    'ROLE',    'ENTITLEMENT' ] | Type of requested object. | [optional] 
**cancelled_request_details** | [**RequesteditemstatusCancelledRequestDetails**](requesteditemstatus-cancelled-request-details) |  | [optional] 
**error_messages** | [**[]List[Errormessagedto]**](list-errormessagedto) | List of localized error messages, if any, encountered during the approval/provisioning process. | [optional] 
**state** | [**Requesteditemstatusrequeststate**](requesteditemstatusrequeststate) |  | [optional] 
**approval_details** | [**[]Approvalstatusdto**](approvalstatusdto) | Approval details for each item. | [optional] 
**manual_work_item_details** | [**[]Manualworkitemdetails**](manualworkitemdetails) | Manual work items created for provisioning the item. | [optional] 
**account_activity_item_id** | **str** | Id of associated account activity item. | [optional] 
**request_type** | [**Accessrequesttype**](accessrequesttype) |  | [optional] 
**modified** | **datetime** | When the request was last modified. | [optional] 
**created** | **datetime** | When the request was created. | [optional] 
**requester** | [**Accessitemrequester**](accessitemrequester) |  | [optional] 
**requested_for** | [**RequesteditemstatusRequestedFor**](requesteditemstatus-requested-for) |  | [optional] 
**requester_comment** | [**RequesteditemstatusRequesterComment**](requesteditemstatus-requester-comment) |  | [optional] 
**sod_violation_context** | [**RequesteditemstatusSodViolationContext**](requesteditemstatus-sod-violation-context) |  | [optional] 
**provisioning_details** | [**RequesteditemstatusProvisioningDetails**](requesteditemstatus-provisioning-details) |  | [optional] 
**pre_approval_trigger_details** | [**RequesteditemstatusPreApprovalTriggerDetails**](requesteditemstatus-pre-approval-trigger-details) |  | [optional] 
**access_request_phases** | [**[]Accessrequestphases**](accessrequestphases) | A list of Phases that the Access Request has gone through in order, to help determine the status of the request. | [optional] 
**description** | **str** | Description associated to the requested object. | [optional] 
**start_date** | **datetime** | When the role access is scheduled for provisioning. | [optional] 
**remove_date** | **datetime** | When the role access is scheduled for removal. | [optional] 
**cancelable** | **bool** | True if the request can be canceled. | [optional] [default to False]
**reauthorization_required** | **bool** | True if re-auth is required. | [optional] [default to False]
**access_request_id** | **str** | This is the account activity id. | [optional] 
**client_metadata** | **map[string]str** | Arbitrary key-value pairs, if any were included in the corresponding access request | [optional] 
}

## Example

```python
from sailpoint.access_requests.models.accessrequestadminitemstatus import Accessrequestadminitemstatus

accessrequestadminitemstatus = Accessrequestadminitemstatus(
id='2c9180926cbfbddd016cbfc7c3b10010',
name='AccessProfile1',
type='ACCESS_PROFILE',
cancelled_request_details=,
error_messages=[
                    {"locale":"en-US","localeOrigin":"DEFAULT","text":"Error Message"}
                    ],
state='EXECUTING',
approval_details=[
                    sailpoint.access_requests.models.approval_status_dto.Approval Status Dto(
                        forwarded = False, 
                        original_owner = sailpoint.access_requests.models.approvalstatusdto_original_owner.approvalstatusdto_originalOwner(
                            type = 'IDENTITY', 
                            id = '2c7180a46faadee4016fb4e018c20642', 
                            name = 'Michael Michaels', ), 
                        current_owner = null, 
                        modified = '2019-08-23T18:52:57.398Z', 
                        status = 'PENDING', 
                        scheme = 'MANAGER', 
                        error_messages = [
                            sailpoint.access_requests.models.error_message_dto.Error Message Dto(
                                locale = 'en-US', 
                                locale_origin = 'DEFAULT', 
                                text = 'The request was syntactically correct but its content is semantically invalid.', )
                            ], 
                        comment = 'I approve this request', 
                        remove_date = '2020-07-11T00:00Z', )
                    ],
manual_work_item_details=[
                    sailpoint.access_requests.models.manual_work_item_details.Manual Work Item Details(
                        forwarded = True, 
                        original_owner = sailpoint.access_requests.models.manualworkitemdetails_original_owner.manualworkitemdetails_originalOwner(
                            type = 'IDENTITY', 
                            id = '2c7180a46faadee4016fb4e018c20642', 
                            name = 'Michael Michaels', ), 
                        current_owner = sailpoint.access_requests.models.manualworkitemdetails_current_owner.manualworkitemdetails_currentOwner(
                            type = 'IDENTITY', 
                            id = '2c3780a46faadee4016fb4e018c20652', 
                            name = 'Allen Albertson', ), 
                        modified = '2019-08-23T18:52:57.398Z', 
                        status = 'PENDING', 
                        forward_history = [
                            sailpoint.access_requests.models.approval_forward_history.Approval Forward History(
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
requester=sailpoint.access_requests.models.access_item_requester.Access Item Requester(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20648', 
                    name = 'William Wilson', ),
requested_for=sailpoint.access_requests.models.requesteditemstatus_requested_for.requesteditemstatus_requestedFor(
                    type = 'IDENTITY', 
                    id = '2c9180835d191a86015d28455b4b232a', 
                    name = 'William Wilson', ),
requester_comment=,
sod_violation_context=,
provisioning_details=,
pre_approval_trigger_details=,
access_request_phases=[
                    sailpoint.access_requests.models.access_request_phases.Access Request Phases(
                        started = '2020-07-11T00:00Z', 
                        finished = '2020-07-12T00:00Z', 
                        name = 'APPROVAL_PHASE', 
                        state = 'COMPLETED', 
                        result = 'SUCCESSFUL', 
                        phase_reference = 'approvalDetails', )
                    ],
description='This is the Engineering role that engineers are granted.',
start_date='2019-10-21T00:00Z',
remove_date='2019-10-23T00:00Z',
cancelable=True,
reauthorization_required=True,
access_request_id='2b838de9-db9b-abcf-e646-d4f274ad4238',
client_metadata={"key1":"value1","key2":"value2"}
)

```
[[Back to top]](#) 

