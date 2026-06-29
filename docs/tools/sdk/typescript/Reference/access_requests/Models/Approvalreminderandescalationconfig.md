---
id: v1-approvalreminderandescalationconfig-v1
title: ApprovalreminderandescalationconfigV1
pagination_label: ApprovalreminderandescalationconfigV1
sidebar_label: ApprovalreminderandescalationconfigV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ApprovalreminderandescalationconfigV1', 'v1ApprovalreminderandescalationconfigV1']
slug: /tools/sdk/typescript/access_requests/models/approvalreminderandescalationconfig-v1
tags: ['SDK', 'Software Development Kit', 'ApprovalreminderandescalationconfigV1', 'v1ApprovalreminderandescalationconfigV1']
---

# ApprovalreminderandescalationconfigV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**daysUntilEscalation** | **(optional)** `number` | Number of days to wait before the first reminder. If no reminders are configured, then this is the number of days to wait before escalation. | [default to undefined]
**daysBetweenReminders** | **(optional)** `number` | Number of days to wait between reminder notifications. | [default to undefined]
**maxReminders** | **(optional)** `number` | Maximum number of reminder notifications to send to the reviewer before approval escalation. The maximum allowed value is 20. | [default to undefined]
**fallbackApproverRef** | **(optional)** `IdentityreferencewithnameandemailV1` |  | [default to undefined]

