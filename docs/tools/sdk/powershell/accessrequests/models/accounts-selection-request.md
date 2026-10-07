# AccountsSelectionRequest

# AccountsSelectionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestedFor** | **[]String** | A list of Identity IDs for whom the Access is requested. * Must be omitted (do not send an empty array) when using `requestedForWithRequestedItems`   (including all machine identity requests). | [optional] 
**RequestType** | **AccessRequestType** |  | [optional] 
**RequestedItems** | [**[]AccessRequestItem**](access-request-item) | Access items requested. * Must be omitted (do not send an empty array) when using `requestedForWithRequestedItems`.  | [optional] 
**ClientMetadata** | **map[string]String** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on associated APIs such as /account-activities. | [optional] 
**RequestedForWithRequestedItems** | [**[]RequestedForDtoRef**](requested-for-dto-ref) | Nested payload pairing each identity with its requested items. * Required for machine identity accounts-selection. Set `identityType: MACHINE` on each entry. * Machine requests support `ENTITLEMENT` items only and do not allow mixed human and machine identities. * When present, `requestedFor` and `requestedItems` must be omitted (do not send an empty array). | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountsSelectionRequest = Initialize-AccountsSelectionRequest  -RequestedFor 2c918084660f45d6016617daa9210584 `
 -RequestType null `
 -RequestedItems null `
 -ClientMetadata {"requestedAppId":"2c91808f7892918f0178b78da4a305a1","requestedAppName":"test-app"} `
 -RequestedForWithRequestedItems null
```

- Convert the resource to JSON
```powershell
$AccountsSelectionRequest | ConvertTo-JSON
```


[[Back to top]](#) 

