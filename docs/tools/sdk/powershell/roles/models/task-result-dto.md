# TaskResultDto

# TaskResultDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "TASK_RESULT" ] | Task result DTO type. | [optional] 
**Id** | **String** | Task result ID. | [optional] 
**Name** | **String** | Task result display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$TaskResultDto = Initialize-TaskResultDto  -Type TASK_RESULT `
 -Id 464ae7bf791e49fdb74606a2e4a89635 `
 -Name null
```

- Convert the resource to JSON
```powershell
$TaskResultDto | ConvertTo-JSON
```


[[Back to top]](#) 

