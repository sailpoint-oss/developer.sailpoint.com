---
id: approval2
title: Approval2
pagination_label: Approval2
sidebar_label: Approval2
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Approval2', 'Approval2'] 
slug: /tools/sdk/python/approvals/models/approval2
tags: ['SDK', 'Software Development Kit', 'Approval2', 'Approval2']
---

# Approval2

Approval Object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The Approval ID | [optional] 
**tenant_id** | **str** | The Tenant ID of the Approval | [optional] 
**type** | **str** | The type of the approval, such as ENTITLEMENT_DESCRIPTIONS, CUSTOM_ACCESS_REQUEST_APPROVAL, GENERIC_APPROVAL | [optional] 
**approvers** | [**[]Approvalidentity**](approvalidentity) | Object representation of an approver of an approval | [optional] 
**created_date** | **str** | Date the approval was created | [optional] 
**due_date** | **str** | Date the approval is due | [optional] 
**escalation_step** | **str** | Step in the escalation process. If set to 0, the approval is not escalated. If set to 1, the approval is escalated to the first approver in the escalation chain. | [optional] 
**serial_step** | **int** | The serial step of the approval in the approval chain. For example, serialStep 1 is the first approval to action in an approval request chain. Parallel approvals are set to 0. | [optional] 
**is_escalated** | **bool** | Whether or not the approval has been escalated. Will reset to false when the approval is actioned on. | [optional] [default to False]
**name** | [**[]Approvalname**](approvalname) | The name of the approval for a given locale | [optional] 
**batch_request** | [**Approvalbatch**](approvalbatch) |  | [optional] 
**approval_config** | [**Approvalconfig**](approvalconfig) |  | [optional] 
**description** | [**[]Approvaldescription**](approvaldescription) | The description of the approval for a given locale | [optional] 
**medium** |  **Enum** [  'EMAIL',    'SLACK',    'TEAMS' ] | Signifies what medium to use when sending notifications (currently only email is utilized) | [optional] 
**priority** |  **Enum** [  'HIGH',    'MEDIUM',    'LOW' ] | The priority of the approval | [optional] 
**requester** | [**Approvalidentity**](approvalidentity) |  | [optional] 
**requestee** | [**Approvalidentity**](approvalidentity) |  | [optional] 
**comments** | [**[]Approvalcomment3**](approvalcomment3) | Object representation of a comment on the approval | [optional] 
**approved_by** | [**[]Approvalidentityrecord**](approvalidentityrecord) | Array of approvers who have approved the approval | [optional] 
**rejected_by** | [**[]Approvalidentityrecord**](approvalidentityrecord) | Array of approvers who have rejected the approval | [optional] 
**assigned_to** | [**[]Approvalidentity**](approvalidentity) | Array of identities that the approval request is currently assigned to/waiting on. For parallel approvals, this is set to all approvers left to approve. | [optional] 
**completed_date** | **str** | Date the approval was completed | [optional] 
**approval_criteria** | [**Approval2ApprovalCriteria**](approval2-approval-criteria) |  | [optional] 
**additional_attributes** | **str** | Json string representing additional attributes known about the object to be approved. | [optional] 
**reference_data** | [**[]Approvalreference**](approvalreference) | Reference data related to the approval | [optional] 
**reassignment_history** | [**[]Approvalreassignmenthistory**](approvalreassignmenthistory) | History of whom the approval request was assigned to | [optional] 
**static_attributes** | **map[string]object** | Field that can include any static additional info that may be needed by the service that the approval request originated from | [optional] 
**modified_date** | **datetime** | Date/time that the approval request was last updated | [optional] 
**requested_target** | [**[]Approvalrequestedtarget**](approvalrequestedtarget) | RequestedTarget used to specify the actual object or target the approval request is for | [optional] 
}

## Example

```python
from sailpoint.approvals.models.approval2 import Approval2

approval2 = Approval2(
id='38453251-6be2-5f8f-df93-5ce19e295837',
tenant_id='38453251-6be2-5f8f-df93-5ce19e295837',
type='ENTITLEMENT_DESCRIPTIONS',
approvers=[
                    sailpoint.approvals.models.approval_identity.Approval Identity(
                        email = 'mail@mail.com', 
                        identity_id = '17e633e7d57e481569df76323169deb6a', 
                        members = [
                            sailpoint.approvals.models.approvalidentity_members_inner.approvalidentity_members_inner(
                                email = 'mail@mail.com', 
                                id = '17e633e7d57e481569df76323169deb6a', 
                                name = 'Bob Neil', 
                                type = 'IDENTITY', )
                            ], 
                        name = 'Jim Bob', 
                        owner_of = [
                            sailpoint.approvals.models.approvalidentity_owner_of_inner.approvalidentity_ownerOf_inner(
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
                    sailpoint.approvals.models.approval_name.Approval Name(
                        value = 'Audit DB Access', 
                        locale = 'en_US', )
                    ],
batch_request=sailpoint.approvals.models.approval_batch.Approval Batch(
                    batch_id = '38453251-6be2-5f8f-df93-5ce19e295837', 
                    batch_size = 100, ),
approval_config=sailpoint.approvals.models.approvalconfig.approvalconfig(
                    reminder_config = sailpoint.approvals.models.approvalconfig_reminder_config.approvalconfig_reminderConfig(
                        enabled = False, 
                        days_until_first_reminder = 0, 
                        reminder_cron_schedule = '1 1 1 1 1', 
                        max_reminders = 5, ), 
                    escalation_config = sailpoint.approvals.models.approvalconfig_escalation_config.approvalconfig_escalationConfig(
                        enabled = True, 
                        days_until_first_escalation = 2, 
                        escalation_cron_schedule = '*/5 * * * *', 
                        escalation_chain = [
                            sailpoint.approvals.models.approvalconfig_escalation_config_escalation_chain_inner.approvalconfig_escalationConfig_escalationChain_inner(
                                tier = 1, 
                                identity_id = 'fdfda352157d4cc79bb749953131b457', 
                                identity_type = 'IDENTITY', )
                            ], ), 
                    timeout_config = sailpoint.approvals.models.approvalconfig_timeout_config.approvalconfig_timeoutConfig(
                        enabled = True, 
                        days_until_timeout = 2, 
                        timeout_result = 'EXPIRED', ), 
                    cron_timezone = sailpoint.approvals.models.approvalconfig_cron_timezone.approvalconfig_cronTimezone(
                        location = 'America/New_York', 
                        offset = '', ), 
                    serial_chain = [
                        sailpoint.approvals.models.approvalconfig_serial_chain_inner.approvalconfig_serialChain_inner(
                            tier = 1, 
                            identity_id = '2c9180858090ea8801809a0465e829da', 
                            identity_type = 'IDENTITY', )
                        ], 
                    requires_comment = 'ALL', 
                    fallback_approver = sailpoint.approvals.models.approvalconfig_fallback_approver.approvalconfig_fallbackApprover(
                        identity_id = 'fdfda352157d4cc79bb749953131b457', 
                        type = 'MANAGER_OF', ), 
                    machine_identity_manager_assignment = 'MANAGER_OF_REQUESTER', 
                    circumvent_approval_process = False, 
                    auto_approve = 'OFF', ),
description=[
                    sailpoint.approvals.models.approval_description.Approval Description(
                        value = 'This access allows viewing and editing of workflow resource', 
                        locale = 'en_US', )
                    ],
medium='EMAIL',
priority='HIGH',
requester=sailpoint.approvals.models.approval_identity.Approval Identity(
                    email = 'mail@mail.com', 
                    identity_id = '17e633e7d57e481569df76323169deb6a', 
                    members = [
                        sailpoint.approvals.models.approvalidentity_members_inner.approvalidentity_members_inner(
                            email = 'mail@mail.com', 
                            id = '17e633e7d57e481569df76323169deb6a', 
                            name = 'Bob Neil', 
                            type = 'IDENTITY', )
                        ], 
                    name = 'Jim Bob', 
                    owner_of = [
                        sailpoint.approvals.models.approvalidentity_owner_of_inner.approvalidentity_ownerOf_inner(
                            id = 'string', 
                            name = 'Access Request App', 
                            type = 'APPLICATION', )
                        ], 
                    serial_order = 0, 
                    type = 'IDENTITY', ),
requestee=sailpoint.approvals.models.approval_identity.Approval Identity(
                    email = 'mail@mail.com', 
                    identity_id = '17e633e7d57e481569df76323169deb6a', 
                    members = [
                        sailpoint.approvals.models.approvalidentity_members_inner.approvalidentity_members_inner(
                            email = 'mail@mail.com', 
                            id = '17e633e7d57e481569df76323169deb6a', 
                            name = 'Bob Neil', 
                            type = 'IDENTITY', )
                        ], 
                    name = 'Jim Bob', 
                    owner_of = [
                        sailpoint.approvals.models.approvalidentity_owner_of_inner.approvalidentity_ownerOf_inner(
                            id = 'string', 
                            name = 'Access Request App', 
                            type = 'APPLICATION', )
                        ], 
                    serial_order = 0, 
                    type = 'IDENTITY', ),
comments=[
                    sailpoint.approvals.models.approval_comment.Approval Comment(
                        author = sailpoint.approvals.models.approval_identity.Approval Identity(
                            email = 'mail@mail.com', 
                            identity_id = '17e633e7d57e481569df76323169deb6a', 
                            members = [
                                sailpoint.approvals.models.approvalidentity_members_inner.approvalidentity_members_inner(
                                    email = 'mail@mail.com', 
                                    id = '17e633e7d57e481569df76323169deb6a', 
                                    name = 'Bob Neil', 
                                    type = 'IDENTITY', )
                                ], 
                            name = 'Jim Bob', 
                            owner_of = [
                                sailpoint.approvals.models.approvalidentity_owner_of_inner.approvalidentity_ownerOf_inner(
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
                    sailpoint.approvals.models.approvalidentityrecord.approvalidentityrecord(
                        identity_id = '17e633e7d57e481569df76323169deb6a', 
                        type = 'IDENTITY', 
                        name = 'Jim Bob', 
                        actioned_as = [
                            sailpoint.approvals.models.approval_reference.Approval Reference(
                                id = '64012350-8fd9-4f6c-a170-1fe123683899', 
                                type = 'AccessRequestId', 
                                name = 'Access Request', 
                                email = 'user@example.com', 
                                serial_order = 0, )
                            ], 
                        members = [
                            sailpoint.approvals.models.approval_reference.Approval Reference(
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
                    sailpoint.approvals.models.approvalidentityrecord.approvalidentityrecord(
                        identity_id = '17e633e7d57e481569df76323169deb6a', 
                        type = 'IDENTITY', 
                        name = 'Jim Bob', 
                        actioned_as = [
                            sailpoint.approvals.models.approval_reference.Approval Reference(
                                id = '64012350-8fd9-4f6c-a170-1fe123683899', 
                                type = 'AccessRequestId', 
                                name = 'Access Request', 
                                email = 'user@example.com', 
                                serial_order = 0, )
                            ], 
                        members = [
                            sailpoint.approvals.models.approval_reference.Approval Reference(
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
                    sailpoint.approvals.models.approval_identity.Approval Identity(
                        email = 'mail@mail.com', 
                        identity_id = '17e633e7d57e481569df76323169deb6a', 
                        members = [
                            sailpoint.approvals.models.approvalidentity_members_inner.approvalidentity_members_inner(
                                email = 'mail@mail.com', 
                                id = '17e633e7d57e481569df76323169deb6a', 
                                name = 'Bob Neil', 
                                type = 'IDENTITY', )
                            ], 
                        name = 'Jim Bob', 
                        owner_of = [
                            sailpoint.approvals.models.approvalidentity_owner_of_inner.approvalidentity_ownerOf_inner(
                                id = 'string', 
                                name = 'Access Request App', 
                                type = 'APPLICATION', )
                            ], 
                        serial_order = 0, 
                        type = 'IDENTITY', )
                    ],
completed_date='2023-04-12T23:20:50.52Z',
approval_criteria=sailpoint.approvals.models.approval_2_approval_criteria.approval_2_approvalCriteria(
                    type = 'SERIAL', 
                    approval = sailpoint.approvals.models.approval_2_approval_criteria_approval.approval_2_approvalCriteria_approval(
                        calculation_type = 'COUNT', 
                        value = 70, ), 
                    rejection = sailpoint.approvals.models.approval_2_approval_criteria_rejection.approval_2_approvalCriteria_rejection(
                        calculation_type = 'COUNT', 
                        value = 30, ), ),
additional_attributes='{ "llm_description": "generated description" }',
reference_data=[
                    sailpoint.approvals.models.approval_reference.Approval Reference(
                        id = '64012350-8fd9-4f6c-a170-1fe123683899', 
                        type = 'AccessRequestId', 
                        name = 'Access Request', 
                        email = 'user@example.com', 
                        serial_order = 0, )
                    ],
reassignment_history=[
                    sailpoint.approvals.models.approvalreassignmenthistory.approvalreassignmenthistory(
                        comment_id = 'f47ac10b-58cc-4372-a567-0e02b2c3d479', 
                        reassigned_from = sailpoint.approvals.models.approval_identity.Approval Identity(
                            email = 'mail@mail.com', 
                            identity_id = '17e633e7d57e481569df76323169deb6a', 
                            members = [
                                sailpoint.approvals.models.approvalidentity_members_inner.approvalidentity_members_inner(
                                    email = 'mail@mail.com', 
                                    id = '17e633e7d57e481569df76323169deb6a', 
                                    name = 'Bob Neil', 
                                    type = 'IDENTITY', )
                                ], 
                            name = 'Jim Bob', 
                            owner_of = [
                                sailpoint.approvals.models.approvalidentity_owner_of_inner.approvalidentity_ownerOf_inner(
                                    id = 'string', 
                                    name = 'Access Request App', 
                                    type = 'APPLICATION', )
                                ], 
                            serial_order = 0, 
                            type = 'IDENTITY', ), 
                        reassigned_to = sailpoint.approvals.models.approval_identity.Approval Identity(
                            email = 'mail@mail.com', 
                            identity_id = '17e633e7d57e481569df76323169deb6a', 
                            name = 'Jim Bob', 
                            serial_order = 0, 
                            type = 'IDENTITY', ), 
                        reassigner = , 
                        reassignment_date = '2023-10-01T12:34:56.789Z', 
                        reassignment_type = 'ESCALATION', )
                    ],
static_attributes={"serviceName":"ApprovalService","requestType":"AccessRequest","metadata":{"environment":"production","region":"us-east-1"}},
modified_date='2023-10-01T12:34:56.789Z',
requested_target=[
                    sailpoint.approvals.models.approvalrequestedtarget.approvalrequestedtarget(
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

