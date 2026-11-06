# ApprovalConfig

# ApprovalConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReminderConfig** | [**ApprovalConfigReminderConfig**](approval-config-reminder-config) |  | [optional] 
**EscalationConfig** | [**ApprovalConfigEscalationConfig**](approval-config-escalation-config) |  | [optional] 
**TimeoutConfig** | [**ApprovalConfigTimeoutConfig**](approval-config-timeout-config) |  | [optional] 
**CronTimezone** | [**ApprovalConfigCronTimezone**](approval-config-cron-timezone) |  | [optional] 
**SerialChain** | [**[]ApprovalConfigSerialChainInner**](approval-config-serial-chain-inner) | If the approval request has an approvalCriteria of SERIAL this chain will be used to determine the assignment order. | [optional] 
**RequiresComment** |  **Enum** [  "APPROVAL",    "REJECTION",    "ALL",    "OFF" ] | Determines whether a comment is required when approving or rejecting the approval request. | [optional] 
**FallbackApprover** | [**ApprovalConfigFallbackApprover**](approval-config-fallback-approver) |  | [optional] 
**MachineIdentityManagerAssignment** |  **Enum** [  "MANAGER_OF_REQUESTER",    "MACHINE_IDENTITY_OWNER",    "MANAGER_OF_MACHINE_IDENTITY_OWNER",    "REQUESTED_TARGET_OWNER",    "MANAGER_OF_REQUESTED_TARGET_OWNER",    "ACCOUNT_OWNER",    "MANAGER_OF_ACCOUNT_OWNER" ] | Specifies how to treat the identity type ""MANAGER_OF"" when the requestee is a machine identity. | [optional] [default to "MANAGER_OF_REQUESTER"]
**CircumventApprovalProcess** | **Boolean** | When true, all approvals will be created with the status ""PASSED"" effectively skipping the approval process. Note this field should only be used for Machine Account or Machine related approvals. | [optional] [default to $false]
**AutoApprove** |  **Enum** [  "OFF",    "DIRECT",    "INDIRECT" ] | OFF will prevent the approval request from being assigned to the requester or requestee by assigning it to their manager instead. DIRECT when the requester != requestee this will cause steps assigned directly to the requester to be auto-approved. INDIRECT when the requester != requestee this will cause steps assigned to the requester or a group containing the requester to be auto-approved. This field will only be effective if requestedTarget.reauthRequired is set to false, otherwise the approval will have to be manually approved. | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalConfig = Initialize-ApprovalConfig  -ReminderConfig null `
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
$ApprovalConfig | ConvertTo-JSON
```


[[Back to top]](#) 

