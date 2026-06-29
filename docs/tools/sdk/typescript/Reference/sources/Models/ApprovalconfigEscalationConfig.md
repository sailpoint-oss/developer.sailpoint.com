---
id: v1-approvalconfig-escalation-config-v1
title: ApprovalconfigEscalationConfigV1
pagination_label: ApprovalconfigEscalationConfigV1
sidebar_label: ApprovalconfigEscalationConfigV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ApprovalconfigEscalationConfigV1', 'v1ApprovalconfigEscalationConfigV1']
slug: /tools/sdk/typescript/sources/models/approvalconfig-escalation-config-v1
tags: ['SDK', 'Software Development Kit', 'ApprovalconfigEscalationConfigV1', 'v1ApprovalconfigEscalationConfigV1']
---

# ApprovalconfigEscalationConfigV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **(optional)** `boolean` | Indicates if escalations are enabled. | [default to false]
**daysUntilFirstEscalation** | **(optional)** `number` | Number of days until the first escalation. | [default to undefined]
**escalationCronSchedule** | **(optional)** `string` | Cron schedule for escalations. | [default to undefined]
**escalationChain** | **(optional)** `Array<ApprovalconfigEscalationConfigEscalationChainInnerV1>` | Escalation chain configuration. | [default to undefined]

