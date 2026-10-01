# BaseGenericConfig

# BaseGenericConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Scheme** |  **Enum** [  "WORKFLOW" ] | Discriminator. Must be WORKFLOW for adaptive platform-workflow approval. | [required]
**Approvers** | **String** | Comma-separated approver tokens.  Allowed tokens for RESOURCE ACTIVATE and DEACTIVATE: sourceOwner, manager, machineIdentityPrimaryOwner, machineIdentitySecondaryOwners, machineIdentityAllOwners, workgroup:[workgroupId], identity:[identityId].  Role tokens (sourceOwner, manager, and the machineIdentity* tokens) may appear at most once and must not include an id suffix. workgroup: and identity: may repeat when each id is unique.  Approval request assignment follows the order of tokens in this string. | [required]
**Comments** |  **Enum** [  "ALL",    "APPROVAL",    "REJECTION",    "OFF" ] | Comment requirement for the approval request. Use REJECTION (not REJECT) when comments are required only on deny. | [required]
**WorkflowId** | **String** | Identifier of the platform workflow that decides the request. | [required]

## Examples

- Prepare the resource
```powershell
$BaseGenericConfig = Initialize-BaseGenericConfig  -Scheme WORKFLOW `
 -Approvers sourceOwner, manager, workgroup:f76ff96a-0815-402a-be1a-18cdc693b79f `
 -Comments REJECTION `
 -WorkflowId 8c190e67-2a90-4c2a-9f1e-1c5d0b6a4e21
```

- Convert the resource to JSON
```powershell
$BaseGenericConfig | ConvertTo-JSON
```


[[Back to top]](#) 

