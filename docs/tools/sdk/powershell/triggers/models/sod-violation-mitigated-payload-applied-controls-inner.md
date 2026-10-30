# SODViolationMitigatedPayloadAppliedControlsInner

# SODViolationMitigatedPayloadAppliedControlsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AppliedDate** | **System.DateTime** | When the control was applied. | [optional] 
**Applier** | [**SODViolationMitigatedPayloadAppliedControlsInnerApplier**](sod-violation-mitigated-payload-applied-controls-inner-applier) |  | [optional] 
**Comments** | **String** | Optional comments from the applier. | [optional] 
**Control** | [**SODViolationMitigatedPayloadAppliedControlsInnerControl**](sod-violation-mitigated-payload-applied-controls-inner-control) |  | [optional] 
**Expiration** | **System.DateTime** | When this application of the control expires. | [optional] 
**Id** | **String** | ID of the control application record. | [optional] 
**Status** | **ViolationAppliedControlStatus** |  | [optional] 
**Violation** | **String** | ID of the violation this application belongs to. | [optional] 
**WorkflowId** | **String** | Optional workflow correlation ID. | [optional] 

## Examples

- Prepare the resource
```powershell
$SODViolationMitigatedPayloadAppliedControlsInner = Initialize-SODViolationMitigatedPayloadAppliedControlsInner  -AppliedDate 2026-03-05T22:51:24.535433Z `
 -Applier null `
 -Comments Applied compensating control to mitigate violation while awaiting access review. `
 -Control null `
 -Expiration 2026-04-05T22:51:24.535433Z `
 -Id 230bb065e18641f9bd6985ea9cf2e1a4 `
 -Status null `
 -Violation 230bb065e18641f9bd6985ea9cf2e1a4 `
 -WorkflowId 2c918088837fe14901838062029a04bf
```

- Convert the resource to JSON
```powershell
$SODViolationMitigatedPayloadAppliedControlsInner | ConvertTo-JSON
```


[[Back to top]](#) 

