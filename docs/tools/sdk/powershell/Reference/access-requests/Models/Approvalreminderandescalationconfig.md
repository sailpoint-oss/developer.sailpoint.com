---
id: approvalreminderandescalationconfig
title: Approvalreminderandescalationconfig
pagination_label: Approvalreminderandescalationconfig
sidebar_label: Approvalreminderandescalationconfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Approvalreminderandescalationconfig', 'Approvalreminderandescalationconfig'] 
slug: /tools/sdk/powershell/accessrequests/models/approvalreminderandescalationconfig
tags: ['SDK', 'Software Development Kit', 'Approvalreminderandescalationconfig', 'Approvalreminderandescalationconfig']
---


# Approvalreminderandescalationconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DaysUntilEscalation** | **Int32** | Number of days to wait before the first reminder. If no reminders are configured, then this is the number of days to wait before escalation. | [optional] 
**DaysBetweenReminders** | **Int32** | Number of days to wait between reminder notifications. | [optional] 
**MaxReminders** | **Int32** | Maximum number of reminder notifications to send to the reviewer before approval escalation. The maximum allowed value is 20. | [optional] 
**FallbackApproverRef** | [**Identityreferencewithnameandemail**](identityreferencewithnameandemail) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Approvalreminderandescalationconfig = Initialize-Approvalreminderandescalationconfig  -DaysUntilEscalation 0 `
 -DaysBetweenReminders 0 `
 -MaxReminders 1 `
 -FallbackApproverRef null
```

- Convert the resource to JSON
```powershell
$Approvalreminderandescalationconfig | ConvertTo-JSON
```


[[Back to top]](#) 

