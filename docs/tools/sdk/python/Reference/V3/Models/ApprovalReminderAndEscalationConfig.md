---
id: approval-reminder-and-escalation-config
title: ApprovalReminderAndEscalationConfig
pagination_label: ApprovalReminderAndEscalationConfig
sidebar_label: ApprovalReminderAndEscalationConfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalReminderAndEscalationConfig', 'ApprovalReminderAndEscalationConfig'] 
slug: /tools/sdk/python/v3/models/approval-reminder-and-escalation-config
tags: ['SDK', 'Software Development Kit', 'ApprovalReminderAndEscalationConfig', 'ApprovalReminderAndEscalationConfig']
---

# ApprovalReminderAndEscalationConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**days_until_escalation** | **int** | Number of days to wait before the first reminder. If no reminders are configured, then this is the number of days to wait before escalation. | [optional] 
**days_between_reminders** | **int** | Number of days to wait between reminder notifications. | [optional] 
**max_reminders** | **int** | Maximum number of reminder notification to send to the reviewer before approval escalation. | [optional] 
**fallback_approver_ref** | [**IdentityReferenceWithNameAndEmail**](identity-reference-with-name-and-email) |  | [optional] 
}

## Example

```python
from sailpoint.v3.models.approval_reminder_and_escalation_config import ApprovalReminderAndEscalationConfig

approval_reminder_and_escalation_config = ApprovalReminderAndEscalationConfig(
days_until_escalation=0,
days_between_reminders=0,
max_reminders=1,
fallback_approver_ref=sailpoint.v3.models.identity_reference_with_name_and_email.Identity Reference With Name And Email(
                    type = 'IDENTITY', 
                    id = '5168015d32f890ca15812c9180835d2e', 
                    name = 'Alison Ferguso', 
                    email = 'alison.ferguso@identitysoon.com', )
)

```
[[Back to top]](#) 

