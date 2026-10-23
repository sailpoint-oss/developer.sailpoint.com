# ConvertEntitlementConnectionResponse

# ConvertEntitlementConnectionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConnectionId** | **String** | The ID of the converted entitlement connection. | [required]
**Type** |  **Enum** [  "JIT",    "STANDING" ] | The current assignment type of the entitlement connection, not the target type. | [required]
**State** | **String** | The current state of the entitlement connection. Conversion starts as PENDING. | [required]

## Examples

- Prepare the resource
```powershell
$ConvertEntitlementConnectionResponse = Initialize-ConvertEntitlementConnectionResponse  -ConnectionId 757fb803-9024-5861-e510-83a56e4c5bd3 `
 -Type JIT `
 -State PENDING
```

- Convert the resource to JSON
```powershell
$ConvertEntitlementConnectionResponse | ConvertTo-JSON
```


[[Back to top]](#) 

