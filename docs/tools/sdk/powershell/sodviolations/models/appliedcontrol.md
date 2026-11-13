# Appliedcontrol

# Appliedcontrol

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The system-generated unique identifier of the applied control record. | [required]
**Violation** | **String** | The unique identifier of the policy violation the control was applied to. | [required]
**Control** | [**Referenceresponse**](referenceresponse) |  | [required]
**Applier** | [**Referenceresponse**](referenceresponse) |  | [required]
**AppliedDate** | **System.DateTime** | The date and time when the control was applied to the violation. | [required][readonly] 
**Expiration** | **System.DateTime** | The date and time when the applied control expires. | [required][readonly] 
**Comments** | **String** | Optional comments captured when the control was applied. | [optional] 
**Status** | **Appliedcontrolstatus** |  | [optional] 
**WorkflowId** | **String** | The identifier of the workflow triggered when the control was applied. | [optional] 

## Examples

- Prepare the resource
```powershell
$Appliedcontrol = Initialize-Appliedcontrol  -Id null `
 -Violation null `
 -Control null `
 -Applier null `
 -AppliedDate 2025-01-01T00:00-05:00 `
 -Expiration 2025-01-01T02:00-05:00 `
 -Comments Some comments about the applied control `
 -Status null `
 -WorkflowId 82044924-daff-4b0b-9dcb-17e64de4d25b
```

- Convert the resource to JSON
```powershell
$Appliedcontrol | ConvertTo-JSON
```


[[Back to top]](#) 

