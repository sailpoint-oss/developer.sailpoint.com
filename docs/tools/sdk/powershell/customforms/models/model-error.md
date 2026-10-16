# ModelError

# ModelError

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DetailCode** | **String** | DetailCode is the text of the status code returned | [optional] 
**Messages** | [**[]ErrorMessage**](error-message) |  | [optional] 
**TrackingId** | **String** | TrackingID is the request tracking unique identifier | [optional] 

## Examples

- Prepare the resource
```powershell
$ModelError = Initialize-ModelError  -DetailCode Internal Server Error `
 -Messages null `
 -TrackingId 9cd03ef80e6a425eb6b11bdbb057cdb4
```

- Convert the resource to JSON
```powershell
$ModelError | ConvertTo-JSON
```


[[Back to top]](#) 

