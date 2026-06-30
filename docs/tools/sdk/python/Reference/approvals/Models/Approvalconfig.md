---
id: approvalconfig
title: Approvalconfig
pagination_label: Approvalconfig
sidebar_label: Approvalconfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Approvalconfig', 'Approvalconfig'] 
slug: /tools/sdk/python/approvals/models/approvalconfig
tags: ['SDK', 'Software Development Kit', 'Approvalconfig', 'Approvalconfig']
---

# Approvalconfig

Approval config Object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reminder_config** | [**ApprovalconfigReminderConfig**](approvalconfig-reminder-config) |  | [optional] 
**escalation_config** | [**ApprovalconfigEscalationConfig**](approvalconfig-escalation-config) |  | [optional] 
**timeout_config** | [**ApprovalconfigTimeoutConfig**](approvalconfig-timeout-config) |  | [optional] 
**cron_timezone** | [**ApprovalconfigCronTimezone**](approvalconfig-cron-timezone) |  | [optional] 
**serial_chain** | [**[]ApprovalconfigSerialChainInner**](approvalconfig-serial-chain-inner) | If the approval request has an approvalCriteria of SERIAL this chain will be used to determine the assignment order. | [optional] 
**requires_comment** |  **Enum** [  'APPROVAL',    'REJECTION',    'ALL',    'OFF' ] | Determines whether a comment is required when approving or rejecting the approval request. | [optional] 
**fallback_approver** | [**ApprovalconfigFallbackApprover**](approvalconfig-fallback-approver) |  | [optional] 
**machine_identity_manager_assignment** |  **Enum** [  'MANAGER_OF_REQUESTER',    'MACHINE_IDENTITY_OWNER',    'MANAGER_OF_MACHINE_IDENTITY_OWNER',    'REQUESTED_TARGET_OWNER',    'MANAGER_OF_REQUESTED_TARGET_OWNER',    'ACCOUNT_OWNER',    'MANAGER_OF_ACCOUNT_OWNER' ] | Specifies how to treat the identity type \"MANAGER_OF\" when the requestee is a machine identity. | [optional] [default to 'MANAGER_OF_REQUESTER']
**circumvent_approval_process** | **bool** | When true, all approvals will be created with the status \"PASSED\". | [optional] [default to False]
**auto_approve** |  **Enum** [  'OFF',    'DIRECT',    'INDIRECT' ] | OFF will prevent the approval request from being assigned to the requester or requestee by assigning it to their manager instead. DIRECT will cause approval requests to be auto-approved when assigned directly and only to the requester. INDIRECT will auto-approve when the requester appears anywhere in the list of approvers, including in a governance group. This field will only be effective if requestedTarget.reauthRequired is set to false, otherwise the approval will have to be manually approved. | [optional] 
}

## Example

```python
from sailpoint.approvals.models.approvalconfig import Approvalconfig

approvalconfig = Approvalconfig(
reminder_config=sailpoint.approvals.models.approvalconfig_reminder_config.approvalconfig_reminderConfig(
                    enabled = False, 
                    days_until_first_reminder = 0, 
                    reminder_cron_schedule = '1 1 1 1 1', 
                    max_reminders = 5, ),
escalation_config=sailpoint.approvals.models.approvalconfig_escalation_config.approvalconfig_escalationConfig(
                    enabled = True, 
                    days_until_first_escalation = 2, 
                    escalation_cron_schedule = '*/5 * * * *', 
                    escalation_chain = [
                        sailpoint.approvals.models.approvalconfig_escalation_config_escalation_chain_inner.approvalconfig_escalationConfig_escalationChain_inner(
                            tier = 1, 
                            identity_id = 'fdfda352157d4cc79bb749953131b457', 
                            identity_type = 'IDENTITY', )
                        ], ),
timeout_config=sailpoint.approvals.models.approvalconfig_timeout_config.approvalconfig_timeoutConfig(
                    enabled = True, 
                    days_until_timeout = 2, 
                    timeout_result = 'EXPIRED', ),
cron_timezone=sailpoint.approvals.models.approvalconfig_cron_timezone.approvalconfig_cronTimezone(
                    location = 'America/New_York', 
                    offset = '', ),
serial_chain=[
                    sailpoint.approvals.models.approvalconfig_serial_chain_inner.approvalconfig_serialChain_inner(
                        tier = 1, 
                        identity_id = '2c9180858090ea8801809a0465e829da', 
                        identity_type = 'IDENTITY', )
                    ],
requires_comment='ALL',
fallback_approver=sailpoint.approvals.models.approvalconfig_fallback_approver.approvalconfig_fallbackApprover(
                    identity_id = 'fdfda352157d4cc79bb749953131b457', 
                    type = 'MANAGER_OF', ),
machine_identity_manager_assignment='MANAGER_OF_REQUESTER',
circumvent_approval_process=False,
auto_approve='OFF'
)

```
[[Back to top]](#) 

