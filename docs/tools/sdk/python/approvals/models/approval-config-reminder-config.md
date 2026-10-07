# ApprovalConfigReminderConfig

# ApprovalConfigReminderConfig

Configuration for reminders.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Indicates if reminders are enabled. | [optional] [default to False]
**days_until_first_reminder** | **int** | Number of days until the first reminder. | [optional] 
**reminder_cron_schedule** | **str** | Cron schedule for reminders. | [optional] 
**max_reminders** | **int** | Maximum number of reminders. Max is 20. | [optional] 
\}

## Example

```python
from sailpoint.approvals.models.approval_config_reminder_config import ApprovalConfigReminderConfig

approval_config_reminder_config = ApprovalConfigReminderConfig(
enabled=False,
days_until_first_reminder=0,
reminder_cron_schedule='@every 24h',
max_reminders=5
)

```
[[Back to top]](#) 

