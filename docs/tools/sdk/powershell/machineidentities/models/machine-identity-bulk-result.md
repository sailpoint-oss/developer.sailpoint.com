# MachineIdentityBulkResult

# MachineIdentityBulkResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The requested machine identity ID. | [optional] 
**Status** | **Int32** | HTTP status code for this ID. `200` means the operation succeeded. Other values explain why it did not, for example `400` when the ID is missing or not valid, `404` when the machine identity is not found or the caller does not own it, and `409` when the ID appears more than once in the request. | [optional] 
**Message** | **String** | Message describing the outcome for this ID. | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineIdentityBulkResult = Initialize-MachineIdentityBulkResult  -Id ef38f94347e94562b5bb8424a56397d8 `
 -Status 200 `
 -Message Success
```

- Convert the resource to JSON
```powershell
$MachineIdentityBulkResult | ConvertTo-JSON
```


[[Back to top]](#) 

