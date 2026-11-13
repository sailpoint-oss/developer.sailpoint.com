# TaskStatusMessage

# TaskStatusMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "INFO",    "WARN",    "ERROR" ] | Type of the message | [required]
**LocalizedText** | [**LocalizedMessage**](localized-message) |  | [required]
**Key** | **String** | Key of the message | [required]
**Parameters** | [**[]TaskStatusMessageParametersInner**](task-status-message-parameters-inner) | Message parameters for internationalization | [required]

## Examples

- Prepare the resource
```powershell
$TaskStatusMessage = Initialize-TaskStatusMessage  -Type INFO `
 -LocalizedText null `
 -Key akey `
 -Parameters [{"name":"value"}]
```

- Convert the resource to JSON
```powershell
$TaskStatusMessage | ConvertTo-JSON
```


[[Back to top]](#) 

