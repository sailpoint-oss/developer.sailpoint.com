# SODViolationMitigatedPayloadAppliedControlsInnerControl

# SODViolationMitigatedPayloadAppliedControlsInnerControl

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Control ID. | [optional] 
**Type** |  **Enum** [  "COMPENSATING_CONTROL" ] | Control type (always **COMPENSATING_CONTROL** for this webhook). | [optional] 

## Examples

- Prepare the resource
```powershell
$SODViolationMitigatedPayloadAppliedControlsInnerControl = Initialize-SODViolationMitigatedPayloadAppliedControlsInnerControl  -Id 01ea1d945db14444a2356f71c22b3449 `
 -Type COMPENSATING_CONTROL
```

- Convert the resource to JSON
```powershell
$SODViolationMitigatedPayloadAppliedControlsInnerControl | ConvertTo-JSON
```


[[Back to top]](#) 

