---
id: v2025-approval-config
title: ApprovalConfig
pagination_label: ApprovalConfig
sidebar_label: ApprovalConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalConfig', 'V2025ApprovalConfig'] 
slug: /tools/sdk/powershell/v2025/models/approval-config
tags: ['SDK', 'Software Development Kit', 'ApprovalConfig', 'V2025ApprovalConfig']
---


# ApprovalConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TenantId** | **String** | Tenant ID of the approval configuration. | [optional] 
**Id** | **String** | ID of the approval configuration. | [optional] 
**Scope** | **String** | The type/scope of the configuration. Ie APPROVAL_REQUEST, DOMAIN_OBJECT, APPROVAL_TYPE, TENANT | [optional] 
**ReminderConfig** | [**ApprovalConfigReminderConfig**](approval-config-reminder-config) |  | [optional] 
**EscalationConfig** | [**ApprovalConfigEscalationConfig**](approval-config-escalation-config) |  | [optional] 
**TimeoutConfig** | [**ApprovalConfigTimeoutConfig**](approval-config-timeout-config) |  | [optional] 
**CronTimezone** | [**ApprovalConfigCronTimezone**](approval-config-cron-timezone) |  | [optional] 
**SerialChain** | [**[]ApprovalConfigSerialChainInner**](approval-config-serial-chain-inner) | If the approval request has an approvalCriteria of SERIAL this chain will be used to determine the assignment order. | [optional] 
**RequiresComment** |  **Enum** [  "APPROVAL",    "REJECTION",    "ALL",    "OFF" ] | Determines whether a comment is required when approving or rejecting the approval request. | [optional] 
**FallbackApprover** | [**ApprovalIdentity**](approval-identity) | Configuration for fallback approver. Used if the user cannot be found for whatever reason and escalation config does not exist. | [optional] 
**AutoApprove** |  **Enum** [  "OFF",    "DIRECT",    "INDIRECT" ] | OFF will prevent the approval request from being assigned to the requester or requestee by assigning it to their manager instead. DIRECT will cause approval requests to be auto-approved when assigned directly and only to the requester. INDIRECT will auto-approve when the requester appears anywhere in the list of approvers, including in a governance group. This field will only be effective if requestedTarget.reauthRequired is set to false, otherwise the approval will have to be manually approved. | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalConfig = Initialize-V2025ApprovalConfig  -TenantId d3c10266-1a31-4acc-b01e-44a3d1c56615 `
 -Id 5804e7d6-e04b-400f-9fb8-dff894419a2f `
 -Scope APPROVAL_REQUEST `
 -ReminderConfig null `
 -EscalationConfig null `
 -TimeoutConfig null `
 -CronTimezone null `
 -SerialChain null `
 -RequiresComment ALL `
 -FallbackApprover null `
 -AutoApprove false
```

- Convert the resource to JSON
```powershell
$ApprovalConfig | ConvertTo-JSON
```


[[Back to top]](#) 

