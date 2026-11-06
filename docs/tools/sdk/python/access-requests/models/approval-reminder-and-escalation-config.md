# ApprovalReminderAndEscalationConfig

# ApprovalReminderAndEscalationConfig

Configuration for approval reminder and escalation behavior. Important: Modifying this object will override the sp-approval service's reminderConfig and escalationConfig settings. Changes made here take precedence over any configuration set directly in the sp-approval service. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**days_until_escalation** | **int** | Number of days to wait before the first reminder. If no reminders are configured, then this is the number of days to wait before escalation. | [optional] 
**days_between_reminders** | **int** | Number of days to wait between reminder notifications. | [optional] 
**max_reminders** | **int** | Maximum number of reminder notifications to send to the reviewer before approval escalation. The maximum allowed value is 20. | [optional] 
**fallback_approver_ref** | [**IdentityReferenceWithNameAndEmail**](identity-reference-with-name-and-email) |  | [optional] 
\}

## Example

```python
from sailpoint.access_requests.models.approval_reminder_and_escalation_config import ApprovalReminderAndEscalationConfig

approval_reminder_and_escalation_config = ApprovalReminderAndEscalationConfig(
days_until_escalation=0,
days_between_reminders=0,
max_reminders=1,
fallback_approver_ref=sailpoint.access_requests.models.identity_reference_with_name_and_email.Identity Reference With Name And Email(
                    type = 'IDENTITY', 
                    id = '5168015d32f890ca15812c9180835d2e', 
                    name = 'Alison Ferguso', 
                    email = 'alison.ferguso@identitysoon.com', )
)

```
[[Back to top]](#) 

