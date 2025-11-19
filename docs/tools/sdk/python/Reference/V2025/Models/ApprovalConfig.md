---
id: v2025-approval-config
title: ApprovalConfig
pagination_label: ApprovalConfig
sidebar_label: ApprovalConfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalConfig', 'V2025ApprovalConfig'] 
slug: /tools/sdk/python/v2025/models/approval-config
tags: ['SDK', 'Software Development Kit', 'ApprovalConfig', 'V2025ApprovalConfig']
---

# ApprovalConfig

Approval config Object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenant_id** | **str** | Tenant ID of the approval configuration. | [optional] 
**id** | **str** | ID of the approval configuration. | [optional] 
**scope** | **str** | The type/scope of the configuration. Ie DOMAIN_OBJECT, APPROVAL_TYPE, TENANT | [optional] 
**reminder_config** | [**ApprovalConfigReminderConfig**](approval-config-reminder-config) |  | [optional] 
**escalation_config** | [**ApprovalConfigEscalationConfig**](approval-config-escalation-config) |  | [optional] 
**timeout_config** | [**ApprovalConfigTimeoutConfig**](approval-config-timeout-config) |  | [optional] 
**cron_timezone** | [**ApprovalConfigCronTimezone**](approval-config-cron-timezone) |  | [optional] 
**serial_chain** | [**[]ApprovalConfigSerialChainInner**](approval-config-serial-chain-inner) | If the approval request has an approvalCriteria of SERIAL this chain will be used to determine the assignment order. | [optional] 
**requires_comment** |  **Enum** [  'APPROVAL',    'REJECTION',    'ALL',    'OFF' ] | Determines whether a comment is required when approving or rejecting the approval request. | [optional] 
**fallback_approver** | [**ApprovalIdentity**](approval-identity) | Configuration for fallback approver. Used if the user cannot be found for whatever reason and escalation config does not exist. | [optional] 
**auto_approve** |  **Enum** [  'OFF',    'DIRECT',    'INDIRECT' ] | OFF will prevent the approval request from being assigned to the requester or requestee by assigning it to their manager instead. DIRECT will cause approval requests to be auto-approved when assigned directly and only to the requester. INDIRECT will auto-approve when the requester appears anywhere in the list of approvers, including in a governance group. This field will only be effective if requestedTarget.reauthRequired is set to false, otherwise the approval will have to be manually approved. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.approval_config import ApprovalConfig

approval_config = ApprovalConfig(
tenant_id='d3c10266-1a31-4acc-b01e-44a3d1c56615',
id='5804e7d6-e04b-400f-9fb8-dff894419a2f',
scope='DOMAIN_OBJECT',
reminder_config=sailpoint.v2025.models.approval_config_reminder_config.ApprovalConfig_reminderConfig(
                    enabled = False, 
                    days_until_first_reminder = 0, 
                    reminder_cron_schedule = '1 1 1 1 1', 
                    max_reminders = 5, ),
escalation_config=sailpoint.v2025.models.approval_config_escalation_config.ApprovalConfig_escalationConfig(
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
timeout_config=sailpoint.v2025.models.approval_config_timeout_config.ApprovalConfig_timeoutConfig(
                    enabled = True, 
                    days_until_timeout = 2, 
                    timeout_result = 'EXPIRED', ),
cron_timezone=sailpoint.v2025.models.approval_config_cron_timezone.ApprovalConfig_cronTimezone(
                    location = 'America/New_York', 
                    offset = '', ),
serial_chain=[
                    sailpoint.v2025.models.approval_config_serial_chain_inner.ApprovalConfig_serialChain_inner(
                        chain_id = '23dc206e-2a9e-4f98-93db-8d6e342cca18', 
                        tier = 1, 
                        identity_id = '2c9180858090ea8801809a0465e829da', 
                        identity_type = 'IDENTITY', )
                    ],
requires_comment='ALL',
fallback_approver=sailpoint.v2025.models.approval_identity.Approval Identity(
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
auto_approve='false'
)

```
[[Back to top]](#) 

