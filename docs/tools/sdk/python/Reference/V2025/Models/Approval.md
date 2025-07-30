---
id: v2025-approval
title: Approval
pagination_label: Approval
sidebar_label: Approval
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Approval', 'V2025Approval'] 
slug: /tools/sdk/python/v2025/models/approval
tags: ['SDK', 'Software Development Kit', 'Approval', 'V2025Approval']
---

# Approval

Approval Object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The Approval ID | [optional] 
**tenant_id** | **str** | The Tenant ID of the Approval | [optional] 
**type** | **str** | The type of the approval, such as ENTITLEMENT_DESCRIPTIONS, CUSTOM_ACCESS_REQUEST_APPROVAL, GENERIC_APPROVAL | [optional] 
**approvers** | [**[]ApprovalIdentity**](approval-identity) | Object representation of an approver of an approval | [optional] 
**created_date** | **str** | Date the approval was created | [optional] 
**due_date** | **str** | Date the approval is due | [optional] 
**escalation_step** | **str** | Step in the escalation process. If set to 0, the approval is not escalated. If set to 1, the approval is escalated to the first approver in the escalation chain. | [optional] 
**serial_step** | **int** | The serial step of the approval in the approval chain. For example, serialStep 1 is the first approval to action in an approval request chain. Parallel approvals are set to 0. | [optional] 
**is_escalated** | **bool** | Whether or not the approval has been escalated. Will reset to false when the approval is actioned on. | [optional] [default to False]
**name** | [**[]ApprovalName**](approval-name) | The name of the approval for a given locale | [optional] 
**batch_request** | [**ApprovalBatch**](approval-batch) | The name of the approval for a given locale | [optional] 
**approval_config** | [**ApprovalConfig**](approval-config) | The configuration of the approval, such as the approval criteria and whether it is a parallel or serial approval | [optional] 
**description** | [**[]ApprovalDescription**](approval-description) | The description of the approval for a given locale | [optional] 
**medium** |  **Enum** [  'EMAIL',    'SLACK',    'TEAMS' ] | Signifies what medium to use when sending notifications (currently only email is utilized) | [optional] 
**priority** |  **Enum** [  'HIGH',    'MEDIUM',    'LOW' ] | The priority of the approval | [optional] 
**requester** | [**ApprovalIdentity**](approval-identity) | Object representation of the requester of the approval | [optional] 
**requestee** | [**ApprovalIdentity**](approval-identity) | Object representation of the requestee of the approval | [optional] 
**comments** | [**[]ApprovalComment1**](approval-comment1) | Object representation of a comment on the approval | [optional] 
**approved_by** | [**[]ApprovalIdentityRecord**](approval-identity-record) | Array of approvers who have approved the approval | [optional] 
**rejected_by** | [**[]ApprovalIdentityRecord**](approval-identity-record) | Array of approvers who have rejected the approval | [optional] 
**assigned_to** | [**[]ApprovalIdentity**](approval-identity) | Array of identities that the approval request is currently assigned to/waiting on. For parallel approvals, this is set to all approvers left to approve. | [optional] 
**completed_date** | **str** | Date the approval was completed | [optional] 
**approval_criteria** | [**ApprovalApprovalCriteria**](approval-approval-criteria) |  | [optional] 
**additional_attributes** | **str** | Json string representing additional attributes known about the object to be approved. | [optional] 
**reference_data** | [**[]ApprovalReference**](approval-reference) | Reference data related to the approval | [optional] 
**reassignment_history** | [**[]ApprovalReassignmentHistory**](approval-reassignment-history) | History of whom the approval request was assigned to | [optional] 
**static_attributes** | **map[string]object** | Field that can include any static additional info that may be needed by the service that the approval request originated from | [optional] 
**modified_date** | **datetime** | Date/time that the approval request was last updated | [optional] 
**requested_target** | [**[]ApprovalRequestedTarget**](approval-requested-target) | RequestedTarget used to specify the actual object or target the approval request is for | [optional] 
}

## Example

```python
from sailpoint.v2025.models.approval import Approval

approval = Approval(
id='38453251-6be2-5f8f-df93-5ce19e295837',
tenant_id='38453251-6be2-5f8f-df93-5ce19e295837',
type='ENTITLEMENT_DESCRIPTIONS',
approvers=[
                    sailpoint.v2025.models.approval_identity.Approval Identity(
                        email = 'mail@mail.com', 
                        identity_id = '17e633e7d57e481569df76323169deb6a', 
                        members = [
                            sailpoint.v2025.models.approval_identity_members_inner.ApprovalIdentity_members_inner(
                                email = 'mail@mail.com', 
                                id = '17e633e7d57e481569df76323169deb6a', 
                                name = 'Bob Neil', 
                                type = 'IDENTITY', )
                            ], 
                        name = 'Jim Bob', 
                        owner_of = [
                            sailpoint.v2025.models.approval_identity_owner_of_inner.ApprovalIdentity_ownerOf_inner(
                                id = 'string', 
                                name = 'Access Request App', 
                                type = 'APPLICATION', )
                            ], 
                        serial_order = 0, 
                        type = 'IDENTITY', )
                    ],
created_date='2023-04-12T23:20:50.52Z',
due_date='2024-05-12T23:10:50.11Z',
escalation_step='0',
serial_step=0,
is_escalated=True,
name=[
                    sailpoint.v2025.models.approval_name.Approval Name(
                        value = 'Audit DB Access', 
                        locale = 'en_US', )
                    ],
batch_request={batchId=38453251-6be2-5f8f-df93-5ce19e295837, batchSize=100},
approval_config=sailpoint.v2025.models.approval_config.ApprovalConfig(
                    tenant_id = 'd3c10266-1a31-4acc-b01e-44a3d1c56615', 
                    id = '5804e7d6-e04b-400f-9fb8-dff894419a2f', 
                    scope = 'APPROVAL_REQUEST', 
                    reminder_config = sailpoint.v2025.models.approval_config_reminder_config.ApprovalConfig_reminderConfig(
                        enabled = False, 
                        days_until_first_reminder = 0, 
                        reminder_cron_schedule = '1 1 1 1 1', 
                        max_reminders = 5, ), 
                    escalation_config = sailpoint.v2025.models.approval_config_escalation_config.ApprovalConfig_escalationConfig(
                        enabled = True, 
                        days_until_first_escalation = 2, 
                        escalation_cron_schedule = '*/5 * * * *', 
                        escalation_chain = [
                            sailpoint.v2025.models.approval_config_escalation_config_escalation_chain_inner.ApprovalConfig_escalationConfig_escalationChain_inner(
                                chain_id = 'ef85d1a8-41ef-433a-8153-0b1f59e7b26a', 
                                tier = 1, 
                                identity_id = 'fdfda352157d4cc79bb749953131b457', 
                                identity_type = 'IDENTITY', )
                            ], ), 
                    timeout_config = sailpoint.v2025.models.approval_config_timeout_config.ApprovalConfig_timeoutConfig(
                        enabled = True, 
                        days_until_timeout = 2, 
                        timeout_result = 'EXPIRED', ), 
                    cron_timezone = sailpoint.v2025.models.approval_config_cron_timezone.ApprovalConfig_cronTimezone(
                        location = 'America/New_York', 
                        offset = '', ), 
                    serial_chain = [
                        sailpoint.v2025.models.approval_config_serial_chain_inner.ApprovalConfig_serialChain_inner(
                            chain_id = '23dc206e-2a9e-4f98-93db-8d6e342cca18', 
                            tier = 1, 
                            identity_id = '2c9180858090ea8801809a0465e829da', 
                            identity_type = 'IDENTITY', )
                        ], 
                    requires_comment = 'ALL', 
                    fallback_approver = sailpoint.v2025.models.approval_identity.Approval Identity(
                        email = 'mail@mail.com', 
                        identity_id = '17e633e7d57e481569df76323169deb6a', 
                        members = [
                            sailpoint.v2025.models.approval_identity_members_inner.ApprovalIdentity_members_inner(
                                email = 'mail@mail.com', 
                                id = '17e633e7d57e481569df76323169deb6a', 
                                name = 'Bob Neil', 
                                type = 'IDENTITY', )
                            ], 
                        name = 'Jim Bob', 
                        owner_of = [
                            sailpoint.v2025.models.approval_identity_owner_of_inner.ApprovalIdentity_ownerOf_inner(
                                id = 'string', 
                                name = 'Access Request App', 
                                type = 'APPLICATION', )
                            ], 
                        serial_order = 0, 
                        type = 'IDENTITY', ), 
                    auto_approve = 'false', ),
description=[
                    sailpoint.v2025.models.approval_description.Approval Description(
                        value = 'This access allows viewing and editing of workflow resource', 
                        locale = 'en_US', )
                    ],
medium='EMAIL',
priority='HIGH',
requester=sailpoint.v2025.models.approval_identity.Approval Identity(
                    email = 'mail@mail.com', 
                    identity_id = '17e633e7d57e481569df76323169deb6a', 
                    members = [
                        sailpoint.v2025.models.approval_identity_members_inner.ApprovalIdentity_members_inner(
                            email = 'mail@mail.com', 
                            id = '17e633e7d57e481569df76323169deb6a', 
                            name = 'Bob Neil', 
                            type = 'IDENTITY', )
                        ], 
                    name = 'Jim Bob', 
                    owner_of = [
                        sailpoint.v2025.models.approval_identity_owner_of_inner.ApprovalIdentity_ownerOf_inner(
                            id = 'string', 
                            name = 'Access Request App', 
                            type = 'APPLICATION', )
                        ], 
                    serial_order = 0, 
                    type = 'IDENTITY', ),
requestee=sailpoint.v2025.models.approval_identity.Approval Identity(
                    email = 'mail@mail.com', 
                    identity_id = '17e633e7d57e481569df76323169deb6a', 
                    members = [
                        sailpoint.v2025.models.approval_identity_members_inner.ApprovalIdentity_members_inner(
                            email = 'mail@mail.com', 
                            id = '17e633e7d57e481569df76323169deb6a', 
                            name = 'Bob Neil', 
                            type = 'IDENTITY', )
                        ], 
                    name = 'Jim Bob', 
                    owner_of = [
                        sailpoint.v2025.models.approval_identity_owner_of_inner.ApprovalIdentity_ownerOf_inner(
                            id = 'string', 
                            name = 'Access Request App', 
                            type = 'APPLICATION', )
                        ], 
                    serial_order = 0, 
                    type = 'IDENTITY', ),
comments=[
                    sailpoint.v2025.models.approval_comment.Approval Comment(
                        author = sailpoint.v2025.models.approval_identity.Approval Identity(
                            email = 'mail@mail.com', 
                            identity_id = '17e633e7d57e481569df76323169deb6a', 
                            members = [
                                sailpoint.v2025.models.approval_identity_members_inner.ApprovalIdentity_members_inner(
                                    email = 'mail@mail.com', 
                                    id = '17e633e7d57e481569df76323169deb6a', 
                                    name = 'Bob Neil', 
                                    type = 'IDENTITY', )
                                ], 
                            name = 'Jim Bob', 
                            owner_of = [
                                sailpoint.v2025.models.approval_identity_owner_of_inner.ApprovalIdentity_ownerOf_inner(
                                    id = 'string', 
                                    name = 'Access Request App', 
                                    type = 'APPLICATION', )
                                ], 
                            serial_order = 0, 
                            type = 'IDENTITY', ), 
                        comment = 'Looks good', 
                        created_date = '2023-04-12T23:20:50.52Z', 
                        comment_id = '38453251-6be2-5f8f-df93-5ce19e295837', )
                    ],
approved_by=[
                    sailpoint.v2025.models.approval_identity_record.ApprovalIdentityRecord(
                        identity_id = '17e633e7d57e481569df76323169deb6a', 
                        type = 'IDENTITY', 
                        name = 'Jim Bob', 
                        actioned_as = [
                            sailpoint.v2025.models.approval_reference.Approval Reference(
                                id = '64012350-8fd9-4f6c-a170-1fe123683899', 
                                type = 'AccessRequestId', 
                                name = 'Access Request', 
                                email = 'user@example.com', 
                                serial_order = 0, )
                            ], 
                        members = [
                            sailpoint.v2025.models.approval_reference.Approval Reference(
                                id = '64012350-8fd9-4f6c-a170-1fe123683899', 
                                type = 'AccessRequestId', 
                                name = 'Access Request', 
                                email = 'user@example.com', 
                                serial_order = 0, )
                            ], 
                        decision_date = '2023-04-12T23:20:50.520Z', 
                        email = 'user@example.com', )
                    ],
rejected_by=[
                    sailpoint.v2025.models.approval_identity_record.ApprovalIdentityRecord(
                        identity_id = '17e633e7d57e481569df76323169deb6a', 
                        type = 'IDENTITY', 
                        name = 'Jim Bob', 
                        actioned_as = [
                            sailpoint.v2025.models.approval_reference.Approval Reference(
                                id = '64012350-8fd9-4f6c-a170-1fe123683899', 
                                type = 'AccessRequestId', 
                                name = 'Access Request', 
                                email = 'user@example.com', 
                                serial_order = 0, )
                            ], 
                        members = [
                            sailpoint.v2025.models.approval_reference.Approval Reference(
                                id = '64012350-8fd9-4f6c-a170-1fe123683899', 
                                type = 'AccessRequestId', 
                                name = 'Access Request', 
                                email = 'user@example.com', 
                                serial_order = 0, )
                            ], 
                        decision_date = '2023-04-12T23:20:50.520Z', 
                        email = 'user@example.com', )
                    ],
assigned_to=[
                    sailpoint.v2025.models.approval_identity.Approval Identity(
                        email = 'mail@mail.com', 
                        identity_id = '17e633e7d57e481569df76323169deb6a', 
                        members = [
                            sailpoint.v2025.models.approval_identity_members_inner.ApprovalIdentity_members_inner(
                                email = 'mail@mail.com', 
                                id = '17e633e7d57e481569df76323169deb6a', 
                                name = 'Bob Neil', 
                                type = 'IDENTITY', )
                            ], 
                        name = 'Jim Bob', 
                        owner_of = [
                            sailpoint.v2025.models.approval_identity_owner_of_inner.ApprovalIdentity_ownerOf_inner(
                                id = 'string', 
                                name = 'Access Request App', 
                                type = 'APPLICATION', )
                            ], 
                        serial_order = 0, 
                        type = 'IDENTITY', )
                    ],
completed_date='2023-04-12T23:20:50.52Z',
approval_criteria=sailpoint.v2025.models.approval_approval_criteria.Approval_approvalCriteria(
                    type = 'SERIAL', 
                    approval = sailpoint.v2025.models.approval_approval_criteria_approval.Approval_approvalCriteria_approval(
                        calculation_type = 'COUNT', 
                        value = 70, ), 
                    rejection = sailpoint.v2025.models.approval_approval_criteria_rejection.Approval_approvalCriteria_rejection(
                        calculation_type = 'COUNT', 
                        value = 30, ), ),
additional_attributes='{ "llm_description": "generated description" }',
reference_data=[
                    sailpoint.v2025.models.approval_reference.Approval Reference(
                        id = '64012350-8fd9-4f6c-a170-1fe123683899', 
                        type = 'AccessRequestId', 
                        name = 'Access Request', 
                        email = 'user@example.com', 
                        serial_order = 0, )
                    ],
reassignment_history=[
                    sailpoint.v2025.models.approval_reassignment_history.ApprovalReassignmentHistory(
                        comment_id = 'f47ac10b-58cc-4372-a567-0e02b2c3d479', 
                        reassigned_from = sailpoint.v2025.models.approval_identity.Approval Identity(
                            email = 'mail@mail.com', 
                            identity_id = '17e633e7d57e481569df76323169deb6a', 
                            members = [
                                sailpoint.v2025.models.approval_identity_members_inner.ApprovalIdentity_members_inner(
                                    email = 'mail@mail.com', 
                                    id = '17e633e7d57e481569df76323169deb6a', 
                                    name = 'Bob Neil', 
                                    type = 'IDENTITY', )
                                ], 
                            name = 'Jim Bob', 
                            owner_of = [
                                sailpoint.v2025.models.approval_identity_owner_of_inner.ApprovalIdentity_ownerOf_inner(
                                    id = 'string', 
                                    name = 'Access Request App', 
                                    type = 'APPLICATION', )
                                ], 
                            serial_order = 0, 
                            type = 'IDENTITY', ), 
                        reassigned_to = sailpoint.v2025.models.approval_identity.Approval Identity(
                            email = 'mail@mail.com', 
                            identity_id = '17e633e7d57e481569df76323169deb6a', 
                            name = 'Jim Bob', 
                            serial_order = 0, 
                            type = 'IDENTITY', ), 
                        reassigner = , 
                        reassignment_date = '2023-10-01T12:34:56.789Z', 
                        reassignment_type = 'ESCALATION', )
                    ],
static_attributes={serviceName=ApprovalService, requestType=AccessRequest, metadata={environment=production, region=us-east-1}},
modified_date='2023-10-01T12:34:56.789Z',
requested_target=[
                    sailpoint.v2025.models.approval_requested_target.ApprovalRequestedTarget(
                        forced_auth_signature = 'string', 
                        id = 'string', 
                        name = 'string', 
                        reauth_required = True, 
                        removal_date = '2025-07-07T18:10:13.687Z', 
                        request_type = 'string', 
                        target_type = 'string', )
                    ]
)

```
[[Back to top]](#) 

