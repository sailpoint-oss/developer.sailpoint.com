# MachineAccountBulkResult

# MachineAccountBulkResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the machine account this result applies to. | [optional] 
**Status** | **Int32** | HTTP-style status code for this machine account. `200` means the operation succeeded or was queued. Other values, such as `400`, `404` or `500`, describe why it failed. | [optional] 
**Message** | **String** | A message that describes the outcome for this machine account. | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineAccountBulkResult = Initialize-MachineAccountBulkResult  -Id ef38f94347e94562b5bb8424a56397d8 `
 -Status 200 `
 -Message Success
```

- Convert the resource to JSON
```powershell
$MachineAccountBulkResult | ConvertTo-JSON
```


[[Back to top]](#) 

