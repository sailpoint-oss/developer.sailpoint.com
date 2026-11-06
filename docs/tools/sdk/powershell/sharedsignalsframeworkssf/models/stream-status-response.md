# StreamStatusResponse

# StreamStatusResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StreamId** | **String** | Stream identifier. | [optional] 
**Status** |  **Enum** [  "enabled",    "paused",    "disabled" ] | Operational status of the stream (enabled, paused, or disabled). | [optional] 
**Reason** | **String** | Optional reason for the current status (e.g. set when status is updated). | [optional] 

## Examples

- Prepare the resource
```powershell
$StreamStatusResponse = Initialize-StreamStatusResponse  -StreamId 550e8400-e29b-41d4-a716-446655440000 `
 -Status enabled `
 -Reason 
```

- Convert the resource to JSON
```powershell
$StreamStatusResponse | ConvertTo-JSON
```


[[Back to top]](#) 

