# GenericRequestApprovalConfig

# GenericRequestApprovalConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The approval configuration ID. Use it with the update API. | [optional] 
**TargetType** |  **Enum** [  "RESOURCE",    "SUBTYPE",    "SOURCE",    "GLOBAL" ] | The kind of scope. | [optional] 
**TargetId** | **String** | The scope target: the source resource ID for RESOURCE, the subtype ID for SUBTYPE, the source ID for SOURCE, and the tenant ID for GLOBAL. | [optional] 
**ApprovalConfig** | [**map[string]GenericRequestApprovalActionConfig**](generic-request-approval-action-config) | The approval setting for each action, keyed by action name (ACTIVATE, DEACTIVATE, CREATE, or DELETE, depending on the target type). An empty object means the action inherits the organization-level approval configuration. | [optional] 

## Examples

- Prepare the resource
```powershell
$GenericRequestApprovalConfig = Initialize-GenericRequestApprovalConfig  -Id 0f2c7a9e-3b4d-4e5f-8a6b-7c8d9e0f1a2b `
 -TargetType RESOURCE `
 -TargetId aws:bedrock-agent-alias-version `
 -ApprovalConfig {"ACTIVATE":{"scheme":"APPROVAL","approvers":"machineIdentityPrimaryOwner,workgroup:8d3e0094-8a5e-4c6f-9a0b-2e5a1c7d4f10","comments":"REJECTION"},"DEACTIVATE":{}}
```

- Convert the resource to JSON
```powershell
$GenericRequestApprovalConfig | ConvertTo-JSON
```


[[Back to top]](#) 

