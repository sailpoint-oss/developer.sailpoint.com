# ApprovalConfigTimeoutConfig

# ApprovalConfigTimeoutConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | **Boolean** | Indicates if timeout is enabled. | [optional] [default to $false]
**DaysUntilTimeout** | **Int64** | Number of days until approval request times out. Max value is 90. | [optional] 
**TimeoutResult** |  **Enum** [  "EXPIRED",    "APPROVED" ] | Result of timeout. | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalConfigTimeoutConfig = Initialize-ApprovalConfigTimeoutConfig  -Enabled true `
 -DaysUntilTimeout 2 `
 -TimeoutResult EXPIRED
```

- Convert the resource to JSON
```powershell
$ApprovalConfigTimeoutConfig | ConvertTo-JSON
```


[[Back to top]](#) 

