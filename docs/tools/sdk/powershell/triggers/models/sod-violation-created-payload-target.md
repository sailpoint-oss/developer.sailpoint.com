# SODViolationCreatedPayloadTarget

# SODViolationCreatedPayloadTarget

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Target ID. | [optional] 
**Type** |  **Enum** [  "IDENTITY" ] | DTO type of the target reference. | [optional] 

## Examples

- Prepare the resource
```powershell
$SODViolationCreatedPayloadTarget = Initialize-SODViolationCreatedPayloadTarget  -Id 2c9180888380236101838062022f00ea `
 -Type IDENTITY
```

- Convert the resource to JSON
```powershell
$SODViolationCreatedPayloadTarget | ConvertTo-JSON
```


[[Back to top]](#) 

