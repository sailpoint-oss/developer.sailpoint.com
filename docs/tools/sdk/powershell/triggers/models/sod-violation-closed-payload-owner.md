# SODViolationClosedPayloadOwner

# SODViolationClosedPayloadOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Owner ID. | [optional] 
**Type** |  **Enum** [  "IDENTITY",    "GOVERNANCE_GROUP" ] | Owner type. | [optional] 

## Examples

- Prepare the resource
```powershell
$SODViolationClosedPayloadOwner = Initialize-SODViolationClosedPayloadOwner  -Id 2c918088837fe14901838062029a04bf `
 -Type IDENTITY
```

- Convert the resource to JSON
```powershell
$SODViolationClosedPayloadOwner | ConvertTo-JSON
```


[[Back to top]](#) 

