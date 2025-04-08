---
id: v2025-approval-reminder-and-escalation-config
title: ApprovalReminderAndEscalationConfig
pagination_label: ApprovalReminderAndEscalationConfig
sidebar_label: ApprovalReminderAndEscalationConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalReminderAndEscalationConfig', 'V2025ApprovalReminderAndEscalationConfig'] 
slug: /tools/sdk/powershell/v2025/models/approval-reminder-and-escalation-config
tags: ['SDK', 'Software Development Kit', 'ApprovalReminderAndEscalationConfig', 'V2025ApprovalReminderAndEscalationConfig']
---


# ApprovalReminderAndEscalationConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DaysUntilEscalation** | **Int32** | Number of days to wait before the first reminder. If no reminders are configured, then this is the number of days to wait before escalation. | [optional] 
**DaysBetweenReminders** | **Int32** | Number of days to wait between reminder notifications. | [optional] 
**MaxReminders** | **Int32** | Maximum number of reminder notification to send to the reviewer before approval escalation. | [optional] 
**FallbackApproverRef** | [**IdentityReferenceWithNameAndEmail**](identity-reference-with-name-and-email) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalReminderAndEscalationConfig = Initialize-PSSailpoint.V2025ApprovalReminderAndEscalationConfig  -DaysUntilEscalation 0 `
 -DaysBetweenReminders 0 `
 -MaxReminders 1 `
 -FallbackApproverRef null
```

- Convert the resource to JSON
```powershell
$ApprovalReminderAndEscalationConfig | ConvertTo-JSON
```


[[Back to top]](#) 

