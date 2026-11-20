# ConvertEntitlementConnectionRequest

# ConvertEntitlementConnectionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConnectionId** | **String** | The ID of the entitlement connection to convert. | [required]
**TargetType** |  **Enum** [  "JIT",    "STANDING" ] | The assignment type to convert the entitlement connection to. | [required]

## Examples

- Prepare the resource
```powershell
$ConvertEntitlementConnectionRequest = Initialize-ConvertEntitlementConnectionRequest  -ConnectionId 757fb803-9024-5861-e510-83a56e4c5bd3 `
 -TargetType JIT
```

- Convert the resource to JSON
```powershell
$ConvertEntitlementConnectionRequest | ConvertTo-JSON
```


[[Back to top]](#) 

