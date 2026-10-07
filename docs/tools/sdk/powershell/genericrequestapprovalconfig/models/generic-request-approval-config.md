# GenericRequestApprovalConfig

# GenericRequestApprovalConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Stable identifier for this scope. Use this value on PATCH. Created on first GET if the scope was never configured. | [required]
**TargetType** | **GenericRequestTargetType** |  | [required]
**TargetId** | **String** | Connector resource id for RESOURCE (for example aws:bedrock-agent-alias-version). Derived tenant id for GLOBAL. Not patchable. | [required]
**ApprovalConfig** | [**map[string]BaseGenericConfig**](base-generic-config) | Map keyed by action name. RESOURCE and GLOBAL emit ACTIVATE and DEACTIVATE. DELETE_AT_SOURCE is not returned and cannot be patched. | [required]

## Examples

- Prepare the resource
```powershell
$GenericRequestApprovalConfig = Initialize-GenericRequestApprovalConfig  -Id f0948adc-06f7-435b-a8fd-a06861012470 `
 -TargetType null `
 -TargetId aws:bedrock-agent-alias-version `
 -ApprovalConfig {"ACTIVATE":{"scheme":"APPROVAL","approvers":"sourceOwner, manager","comments":"REJECTION"},"DEACTIVATE":{}}
```

- Convert the resource to JSON
```powershell
$GenericRequestApprovalConfig | ConvertTo-JSON
```


[[Back to top]](#) 

