# JitActivationDeactivateRequest

# JitActivationDeactivateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConnectionId** | **String** | Entitlement connection identifier for the activation to deactivate. | [required]
**RequestOrigin** | **String** | Origin of the request. | [optional] 
**MetaData** | [**JitActivationCallerMetadata**](jit-activation-caller-metadata) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$JitActivationDeactivateRequest = Initialize-JitActivationDeactivateRequest  -ConnectionId 757fb803-9024-5861-e510-83a56e4c5bd3 `
 -RequestOrigin slack `
 -MetaData null
```

- Convert the resource to JSON
```powershell
$JitActivationDeactivateRequest | ConvertTo-JSON
```


[[Back to top]](#) 

