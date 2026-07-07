---
id: v1-approvalconfig-v1
title: ApprovalconfigV1
pagination_label: ApprovalconfigV1
sidebar_label: ApprovalconfigV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ApprovalconfigV1', 'v1ApprovalconfigV1']
slug: /tools/sdk/typescript/sources/models/approvalconfig-v1
tags: ['SDK', 'Software Development Kit', 'ApprovalconfigV1', 'v1ApprovalconfigV1']
---

# ApprovalconfigV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reminderConfig** | **(optional)** `ApprovalconfigReminderConfigV1` |  | [default to undefined]
**escalationConfig** | **(optional)** `ApprovalconfigEscalationConfigV1` |  | [default to undefined]
**timeoutConfig** | **(optional)** `ApprovalconfigTimeoutConfigV1` |  | [default to undefined]
**cronTimezone** | **(optional)** `ApprovalconfigCronTimezoneV1` |  | [default to undefined]
**serialChain** | **(optional)** `Array<ApprovalconfigSerialChainInnerV1>` | If the approval request has an approvalCriteria of SERIAL this chain will be used to determine the assignment order. | [default to undefined]
**requiresComment** | **(optional)** `string` | Determines whether a comment is required when approving or rejecting the approval request. | [default to undefined]
**fallbackApprover** | **(optional)** `ApprovalconfigFallbackApproverV1` |  | [default to undefined]
**machineIdentityManagerAssignment** | **(optional)** `string` | Specifies how to treat the identity type \"MANAGER_OF\" when the requestee is a machine identity. | [default to MachineIdentityManagerAssignmentV1_ManagerOfRequester]
**circumventApprovalProcess** | **(optional)** `boolean` | When true, all approvals will be created with the status \"PASSED\". | [default to false]
**autoApprove** | **(optional)** `string` | OFF will prevent the approval request from being assigned to the requester or requestee by assigning it to their manager instead. DIRECT will cause approval requests to be auto-approved when assigned directly and only to the requester. INDIRECT will auto-approve when the requester appears anywhere in the list of approvers, including in a governance group. This field will only be effective if requestedTarget.reauthRequired is set to false, otherwise the approval will have to be manually approved. | [default to undefined]

