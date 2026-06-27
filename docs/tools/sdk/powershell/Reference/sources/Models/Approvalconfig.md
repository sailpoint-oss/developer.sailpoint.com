---
id: approvalconfig
title: Approvalconfig
pagination_label: Approvalconfig
sidebar_label: Approvalconfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Approvalconfig', 'Approvalconfig'] 
slug: /tools/sdk/powershell/sources/models/approvalconfig
tags: ['SDK', 'Software Development Kit', 'Approvalconfig', 'Approvalconfig']
---


# Approvalconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReminderConfig** | [**ApprovalconfigReminderConfig**](approvalconfig-reminder-config) |  | [optional] 
**EscalationConfig** | [**ApprovalconfigEscalationConfig**](approvalconfig-escalation-config) |  | [optional] 
**TimeoutConfig** | [**ApprovalconfigTimeoutConfig**](approvalconfig-timeout-config) |  | [optional] 
**CronTimezone** | [**ApprovalconfigCronTimezone**](approvalconfig-cron-timezone) |  | [optional] 
**SerialChain** | [**[]ApprovalconfigSerialChainInner**](approvalconfig-serial-chain-inner) | If the approval request has an approvalCriteria of SERIAL this chain will be used to determine the assignment order. | [optional] 
**RequiresComment** |  **Enum** [  "APPROVAL",    "REJECTION",    "ALL",    "OFF" ] | Determines whether a comment is required when approving or rejecting the approval request. | [optional] 
**FallbackApprover** | [**ApprovalconfigFallbackApprover**](approvalconfig-fallback-approver) |  | [optional] 
**MachineIdentityManagerAssignment** |  **Enum** [  "MANAGER_OF_REQUESTER",    "MACHINE_IDENTITY_OWNER",    "MANAGER_OF_MACHINE_IDENTITY_OWNER",    "REQUESTED_TARGET_OWNER",    "MANAGER_OF_REQUESTED_TARGET_OWNER",    "ACCOUNT_OWNER",    "MANAGER_OF_ACCOUNT_OWNER" ] | Specifies how to treat the identity type ""MANAGER_OF"" when the requestee is a machine identity. | [optional] [default to "MANAGER_OF_REQUESTER"]
**CircumventApprovalProcess** | **Boolean** | When true, all approvals will be created with the status ""PASSED"". | [optional] [default to $false]
**AutoApprove** |  **Enum** [  "OFF",    "DIRECT",    "INDIRECT" ] | OFF will prevent the approval request from being assigned to the requester or requestee by assigning it to their manager instead. DIRECT will cause approval requests to be auto-approved when assigned directly and only to the requester. INDIRECT will auto-approve when the requester appears anywhere in the list of approvers, including in a governance group. This field will only be effective if requestedTarget.reauthRequired is set to false, otherwise the approval will have to be manually approved. | [optional] 

## Examples

- Prepare the resource
```powershell
$Approvalconfig = Initialize-Approvalconfig  -ReminderConfig null `
 -EscalationConfig null `
 -TimeoutConfig null `
 -CronTimezone null `
 -SerialChain null `
 -RequiresComment ALL `
 -FallbackApprover null `
 -MachineIdentityManagerAssignment MACHINE_IDENTITY_OWNER `
 -CircumventApprovalProcess false `
 -AutoApprove OFF
```

- Convert the resource to JSON
```powershell
$Approvalconfig | ConvertTo-JSON
```


[[Back to top]](#) 

