# TaskResultResponse

# TaskResultResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **String** | the type of response reference | [optional] 
**Id** | **String** | the task ID | [optional] 
**Name** | **String** | the task name (not used in this endpoint, always null) | [optional] 

## Examples

- Prepare the resource
```powershell
$TaskResultResponse = Initialize-TaskResultResponse  -Type TASK_RESULT `
 -Id 78733556-9ea3-4f59-bf69-e5cd92b011b4 `
 -Name null
```

- Convert the resource to JSON
```powershell
$TaskResultResponse | ConvertTo-JSON
```


[[Back to top]](#) 

