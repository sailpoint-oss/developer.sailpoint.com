# JitActivationExtendRequest

# JitActivationExtendRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConnectionId** | **String** | Entitlement connection identifier for the activation to extend. | [required]
**ActivationPeriodExtensionMins** | **Int32** | Number of minutes to extend the activation period. | [required]
**RequestOrigin** | **String** | Origin of the request. | [optional] 
**MetaData** | [**JitActivationCallerMetadata**](jit-activation-caller-metadata) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$JitActivationExtendRequest = Initialize-JitActivationExtendRequest  -ConnectionId 757fb803-9024-5861-e510-83a56e4c5bd3 `
 -ActivationPeriodExtensionMins 120 `
 -RequestOrigin slack `
 -MetaData null
```

- Convert the resource to JSON
```powershell
$JitActivationExtendRequest | ConvertTo-JSON
```


[[Back to top]](#) 

