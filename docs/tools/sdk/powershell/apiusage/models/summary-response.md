# SummaryResponse

# SummaryResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestedUri** | **String** | The endpoint of a SailPoint API | [optional] 
**NumberOfCalls** | **Int64** | Number of calls made to a specific SailPoint API | [optional] 

## Examples

- Prepare the resource
```powershell
$SummaryResponse = Initialize-SummaryResponse  -RequestedUri /v2024/auth-org/session-config `
 -NumberOfCalls 10
```

- Convert the resource to JSON
```powershell
$SummaryResponse | ConvertTo-JSON
```


[[Back to top]](#) 

