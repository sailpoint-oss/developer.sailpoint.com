---
id: approvalreminderandescalationconfig
title: Approvalreminderandescalationconfig
pagination_label: Approvalreminderandescalationconfig
sidebar_label: Approvalreminderandescalationconfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Approvalreminderandescalationconfig', 'Approvalreminderandescalationconfig'] 
slug: /tools/sdk/python/access-requests/models/approvalreminderandescalationconfig
tags: ['SDK', 'Software Development Kit', 'Approvalreminderandescalationconfig', 'Approvalreminderandescalationconfig']
---

# Approvalreminderandescalationconfig

Configuration for approval reminder and escalation behavior. Important: Modifying this object will override the sp-approval service's reminderConfig and escalationConfig settings. Changes made here take precedence over any configuration set directly in the sp-approval service. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**days_until_escalation** | **int** | Number of days to wait before the first reminder. If no reminders are configured, then this is the number of days to wait before escalation. | [optional] 
**days_between_reminders** | **int** | Number of days to wait between reminder notifications. | [optional] 
**max_reminders** | **int** | Maximum number of reminder notifications to send to the reviewer before approval escalation. The maximum allowed value is 20. | [optional] 
**fallback_approver_ref** | [**Identityreferencewithnameandemail**](identityreferencewithnameandemail) |  | [optional] 
}

## Example

```python
from sailpoint.access_requests.models.approvalreminderandescalationconfig import Approvalreminderandescalationconfig

approvalreminderandescalationconfig = Approvalreminderandescalationconfig(
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

