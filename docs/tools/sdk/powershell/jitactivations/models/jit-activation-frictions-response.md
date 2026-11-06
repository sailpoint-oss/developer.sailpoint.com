# JITActivationFrictionsResponse

# JITActivationFrictionsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivationId** | **String** | Identifier of the activation. | [required]
**FrictionState** | **JITActivationFrictionState** | Aggregate friction state of the activation. | [required]
**ConnectionId** | **String** | Identifier of the entitlement connection. | [required]
**ActivationInitTime** | **System.DateTime** | Time the activation started. | [required]
**ExpiryMins** | **String** | Minutes allowed to complete all frictions. | [required]
**Frictions** | [**[]JITActivationFrictionResponse**](jit-activation-friction-response) | Friction steps for the activation. | [required]

## Examples

- Prepare the resource
```powershell
$JITActivationFrictionsResponse = Initialize-JITActivationFrictionsResponse  -ActivationId 857fb802-1034-786a-151e-d3a56e4c5bd9 `
 -FrictionState null `
 -ConnectionId 757fb803-9024-5861-e510-83a56e4c5bd3 `
 -ActivationInitTime 2026-05-08T18:33:52.029Z `
 -ExpiryMins 5 `
 -Frictions null
```

- Convert the resource to JSON
```powershell
$JITActivationFrictionsResponse | ConvertTo-JSON
```


[[Back to top]](#) 

