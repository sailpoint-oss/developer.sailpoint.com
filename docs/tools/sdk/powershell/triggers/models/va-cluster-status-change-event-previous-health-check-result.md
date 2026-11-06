# VAClusterStatusChangeEventPreviousHealthCheckResult

# VAClusterStatusChangeEventPreviousHealthCheckResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | **String** | Detailed message of the result of the health check. | [required]
**ResultType** | **String** | The type of the health check result. | [required]
**Status** |  **Enum** [  "Succeeded",    "Failed" ] | The status of the health check. | [required]

## Examples

- Prepare the resource
```powershell
$VAClusterStatusChangeEventPreviousHealthCheckResult = Initialize-VAClusterStatusChangeEventPreviousHealthCheckResult  -Message Test Connection failed with exception. Error message - java.lang Exception `
 -ResultType SOURCE_STATE_ERROR_CLUSTER `
 -Status Failed
```

- Convert the resource to JSON
```powershell
$VAClusterStatusChangeEventPreviousHealthCheckResult | ConvertTo-JSON
```


[[Back to top]](#) 

