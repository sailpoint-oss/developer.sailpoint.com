---
id: accountdeleteconfigdto
title: Accountdeleteconfigdto
pagination_label: Accountdeleteconfigdto
sidebar_label: Accountdeleteconfigdto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accountdeleteconfigdto', 'Accountdeleteconfigdto'] 
slug: /tools/sdk/python/sources/models/accountdeleteconfigdto
tags: ['SDK', 'Software Development Kit', 'Accountdeleteconfigdto', 'Accountdeleteconfigdto']
---

# Accountdeleteconfigdto

detailed information about account delete approval config

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approval_required** | **bool** | Specifies if an account deletion request requires approval. | [optional] [default to False]
**approval_config** | [**Approvalconfig**](approvalconfig) |  | [optional] 
}

## Example

```python
from sailpoint.sources.models.accountdeleteconfigdto import Accountdeleteconfigdto

accountdeleteconfigdto = Accountdeleteconfigdto(
approval_required=True,
approval_config=sailpoint.sources.models.approvalconfig.approvalconfig(
                    reminder_config = sailpoint.sources.models.approvalconfig_reminder_config.approvalconfig_reminderConfig(
                        enabled = False, 
                        days_until_first_reminder = 0, 
                        reminder_cron_schedule = '1 1 1 1 1', 
                        max_reminders = 5, ), 
                    escalation_config = sailpoint.sources.models.approvalconfig_escalation_config.approvalconfig_escalationConfig(
                        enabled = True, 
                        days_until_first_escalation = 2, 
                        escalation_cron_schedule = '*/5 * * * *', 
                        escalation_chain = [
                            sailpoint.sources.models.approvalconfig_escalation_config_escalation_chain_inner.approvalconfig_escalationConfig_escalationChain_inner(
                                tier = 1, 
                                identity_id = 'fdfda352157d4cc79bb749953131b457', 
                                identity_type = 'IDENTITY', )
                            ], ), 
                    timeout_config = sailpoint.sources.models.approvalconfig_timeout_config.approvalconfig_timeoutConfig(
                        enabled = True, 
                        days_until_timeout = 2, 
                        timeout_result = 'EXPIRED', ), 
                    cron_timezone = sailpoint.sources.models.approvalconfig_cron_timezone.approvalconfig_cronTimezone(
                        location = 'America/New_York', 
                        offset = '', ), 
                    serial_chain = [
                        sailpoint.sources.models.approvalconfig_serial_chain_inner.approvalconfig_serialChain_inner(
                            tier = 1, 
                            identity_id = '2c9180858090ea8801809a0465e829da', 
                            identity_type = 'IDENTITY', )
                        ], 
                    requires_comment = 'ALL', 
                    fallback_approver = sailpoint.sources.models.approvalconfig_fallback_approver.approvalconfig_fallbackApprover(
                        identity_id = 'fdfda352157d4cc79bb749953131b457', 
                        type = 'MANAGER_OF', ), 
                    machine_identity_manager_assignment = 'MANAGER_OF_REQUESTER', 
                    circumvent_approval_process = False, 
                    auto_approve = 'OFF', )
)

```
[[Back to top]](#) 

