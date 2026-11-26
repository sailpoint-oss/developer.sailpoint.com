# MachineAccountRequestAsyncResult

# MachineAccountRequestAsyncResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountRequestId** | **String** | ID of the task that tracks the account request. | [required]

## Examples

- Prepare the resource
```powershell
$MachineAccountRequestAsyncResult = Initialize-MachineAccountRequestAsyncResult  -AccountRequestId 2d81808474683da6017468693c260196
```

- Convert the resource to JSON
```powershell
$MachineAccountRequestAsyncResult | ConvertTo-JSON
```


[[Back to top]](#) 

