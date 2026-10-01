# GenericApprovalConfig

# GenericApprovalConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Scheme** |  **Enum** [  "APPROVAL" ] | Discriminator. Must be APPROVAL for a serial approver chain. | [required]
**Approvers** | **String** | Comma-separated approver tokens.  Allowed tokens for RESOURCE ACTIVATE and DEACTIVATE: sourceOwner, manager, machineIdentityPrimaryOwner, machineIdentitySecondaryOwners, machineIdentityAllOwners, workgroup:[workgroupId], identity:[identityId].  Role tokens (sourceOwner, manager, and the machineIdentity* tokens) may appear at most once and must not include an id suffix. workgroup: and identity: may repeat when each id is unique.  Approval request assignment follows the order of tokens in this string. | [required]
**Comments** |  **Enum** [  "ALL",    "APPROVAL",    "REJECTION",    "OFF" ] | Comment requirement for the approval request. Use REJECTION (not REJECT) when comments are required only on deny. | [required]

## Examples

- Prepare the resource
```powershell
$GenericApprovalConfig = Initialize-GenericApprovalConfig  -Scheme APPROVAL `
 -Approvers sourceOwner, manager, workgroup:f76ff96a-0815-402a-be1a-18cdc693b79f `
 -Comments REJECTION
```

- Convert the resource to JSON
```powershell
$GenericApprovalConfig | ConvertTo-JSON
```


[[Back to top]](#) 

