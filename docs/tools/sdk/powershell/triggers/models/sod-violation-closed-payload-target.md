# SODViolationClosedPayloadTarget

# SODViolationClosedPayloadTarget

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Target ID. | [optional] 
**Type** |  **Enum** [  "IDENTITY" ] | Target type. | [optional] 

## Examples

- Prepare the resource
```powershell
$SODViolationClosedPayloadTarget = Initialize-SODViolationClosedPayloadTarget  -Id 2c9180888380236101838062022f00ea `
 -Type IDENTITY
```

- Convert the resource to JSON
```powershell
$SODViolationClosedPayloadTarget | ConvertTo-JSON
```


[[Back to top]](#) 

