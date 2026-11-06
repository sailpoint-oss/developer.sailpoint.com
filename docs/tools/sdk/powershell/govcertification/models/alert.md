# Alert

# Alert

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Level** |  **Enum** [  "ERROR",    "WARN",    "INFO" ] | Denotes the level of the message | [optional] 
**Localizations** | [**[]ErrorMessageDto**](error-message-dto) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Alert = Initialize-Alert  -Level ERROR `
 -Localizations null
```

- Convert the resource to JSON
```powershell
$Alert | ConvertTo-JSON
```


[[Back to top]](#) 

