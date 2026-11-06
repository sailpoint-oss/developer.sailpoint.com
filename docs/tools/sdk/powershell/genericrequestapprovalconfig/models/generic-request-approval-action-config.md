# GenericRequestApprovalActionConfig

# GenericRequestApprovalActionConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Scheme** |  **Enum** [  "APPROVAL",    "WORKFLOW" ] | How the request is approved. Omitted when the action inherits the organization-level configuration. | [optional] 
**Approvers** | **String** | APPROVAL scheme only. A comma-separated list of approver tokens: `sourceOwner`, `manager`, `machineIdentityPrimaryOwner`, `machineIdentitySecondaryOwners`, `machineIdentityAllOwners`, `workgroup:{governanceGroupId}`, and `identity:{identityId}`. `accountOwner` is also allowed for the SUBTYPE DELETE action. | [optional] 
**Comments** |  **Enum** [  "ALL",    "APPROVAL",    "REJECTION",    "OFF" ] | APPROVAL scheme only. When approvers must comment: on both decisions (ALL), on approval only (APPROVAL), on rejection only (REJECTION), or never (OFF). | [optional] 
**WorkflowId** | **String** | WORKFLOW scheme only. The ID of the workflow that approves the request. | [optional] 

## Examples

- Prepare the resource
```powershell
$GenericRequestApprovalActionConfig = Initialize-GenericRequestApprovalActionConfig  -Scheme APPROVAL `
 -Approvers machineIdentityPrimaryOwner,workgroup:8d3e0094-8a5e-4c6f-9a0b-2e5a1c7d4f10 `
 -Comments REJECTION `
 -WorkflowId 5a7c9e1b-2d4f-4a6c-8e0b-1d3f5a7c9e2b
```

- Convert the resource to JSON
```powershell
$GenericRequestApprovalActionConfig | ConvertTo-JSON
```


[[Back to top]](#) 

