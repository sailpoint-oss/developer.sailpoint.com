# SODViolationMitigatedPayloadOwner

# SODViolationMitigatedPayloadOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Owner ID. | [optional] 
**Type** |  **Enum** [  "IDENTITY",    "GOVERNANCE_GROUP" ] | DTO type of the owner reference. | [optional] 

## Examples

- Prepare the resource
```powershell
$SODViolationMitigatedPayloadOwner = Initialize-SODViolationMitigatedPayloadOwner  -Id 2c918088837fe14901838062029a04bf `
 -Type IDENTITY
```

- Convert the resource to JSON
```powershell
$SODViolationMitigatedPayloadOwner | ConvertTo-JSON
```


[[Back to top]](#) 

