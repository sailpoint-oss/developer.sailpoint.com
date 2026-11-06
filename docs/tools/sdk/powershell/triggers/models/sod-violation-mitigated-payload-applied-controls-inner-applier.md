# SODViolationMitigatedPayloadAppliedControlsInnerApplier

# SODViolationMitigatedPayloadAppliedControlsInnerApplier

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Applier ID. | [optional] 
**Type** |  **Enum** [  "IDENTITY" ] | DTO type of the applier reference. | [optional] 

## Examples

- Prepare the resource
```powershell
$SODViolationMitigatedPayloadAppliedControlsInnerApplier = Initialize-SODViolationMitigatedPayloadAppliedControlsInnerApplier  -Id 2c918088837fe14901838062029a04bf `
 -Type IDENTITY
```

- Convert the resource to JSON
```powershell
$SODViolationMitigatedPayloadAppliedControlsInnerApplier | ConvertTo-JSON
```


[[Back to top]](#) 

