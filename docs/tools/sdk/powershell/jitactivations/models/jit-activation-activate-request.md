# JitActivationActivateRequest

# JitActivationActivateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConnectionId** | **String** | Entitlement connection identifier for the activation. | [required]
**ActivationPeriodMins** | **Int32** | Requested activation duration in minutes. | [required]
**RequestOrigin** | **String** | Origin of the request. | [optional] 
**MetaData** | [**JitActivationCallerMetadata**](jit-activation-caller-metadata) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$JitActivationActivateRequest = Initialize-JitActivationActivateRequest  -ConnectionId 757fb803-9024-5861-e510-83a56e4c5bd3 `
 -ActivationPeriodMins 120 `
 -RequestOrigin slack `
 -MetaData null
```

- Convert the resource to JSON
```powershell
$JitActivationActivateRequest | ConvertTo-JSON
```


[[Back to top]](#) 

