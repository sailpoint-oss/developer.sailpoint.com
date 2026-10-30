# AccountDeleteConfigDto

# AccountDeleteConfigDto

detailed information about account delete approval config

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approval_required** | **bool** | Specifies if an account deletion request requires approval. | [optional] [default to False]
**approval_config** | [**ApprovalConfig**](approval-config) |  | [optional] 
\}

## Example

```python
from sailpoint.sources.models.account_delete_config_dto import AccountDeleteConfigDto

account_delete_config_dto = AccountDeleteConfigDto(
approval_required=True,
approval_config=sailpoint.sources.models.approval_config.ApprovalConfig(
                    reminder_config = sailpoint.sources.models.approval_config_reminder_config.ApprovalConfig_reminderConfig(
                        enabled = False, 
                        days_until_first_reminder = 0, 
                        reminder_cron_schedule = '@every 24h', 
                        max_reminders = 5, ), 
                    escalation_config = sailpoint.sources.models.approval_config_escalation_config.ApprovalConfig_escalationConfig(
                        enabled = True, 
                        days_until_first_escalation = 2, 
                        escalation_cron_schedule = '@every 72h', 
                        escalation_chain = [
                            sailpoint.sources.models.approval_config_escalation_config_escalation_chain_inner.ApprovalConfig_escalationConfig_escalationChain_inner(
                                identity_id = 'fdfda352157d4cc79bb749953131b457', 
                                identity_type = 'IDENTITY', )
                            ], ), 
                    timeout_config = sailpoint.sources.models.approval_config_timeout_config.ApprovalConfig_timeoutConfig(
                        enabled = True, 
                        days_until_timeout = 2, 
                        timeout_result = 'EXPIRED', ), 
                    cron_timezone = sailpoint.sources.models.approval_config_cron_timezone.ApprovalConfig_cronTimezone(
                        location = 'America/New_York', 
                        offset = '', ), 
                    serial_chain = [
                        sailpoint.sources.models.approval_config_serial_chain_inner.ApprovalConfig_serialChain_inner(
                            identity_id = '2c9180858090ea8801809a0465e829da', 
                            identity_type = 'IDENTITY', )
                        ], 
                    requires_comment = 'ALL', 
                    fallback_approver = sailpoint.sources.models.approval_config_fallback_approver.ApprovalConfig_fallbackApprover(
                        identity_id = 'fdfda352157d4cc79bb749953131b457', 
                        type = 'MANAGER_OF', ), 
                    machine_identity_manager_assignment = 'MANAGER_OF_REQUESTER', 
                    circumvent_approval_process = False, 
                    auto_approve = 'OFF', )
)

```
[[Back to top]](#) 

