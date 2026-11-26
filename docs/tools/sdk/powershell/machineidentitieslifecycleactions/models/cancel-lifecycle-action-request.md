# CancelLifecycleActionRequest

# CancelLifecycleActionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | **String** | Optional cancel comment appended to the lifecycle request comment thread. | [optional] 

## Examples

- Prepare the resource
```powershell
$CancelLifecycleActionRequest = Initialize-CancelLifecycleActionRequest  -Comment Cancelling - will resubmit after maintenance window
```

- Convert the resource to JSON
```powershell
$CancelLifecycleActionRequest | ConvertTo-JSON
```


[[Back to top]](#) 

