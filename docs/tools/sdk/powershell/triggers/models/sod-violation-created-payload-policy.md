# SODViolationCreatedPayloadPolicy

# SODViolationCreatedPayloadPolicy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Policy ID. | [optional] 
**Type** |  **Enum** [  "SOD" ] | Policy type (always **SOD** for this webhook). | [optional] 

## Examples

- Prepare the resource
```powershell
$SODViolationCreatedPayloadPolicy = Initialize-SODViolationCreatedPayloadPolicy  -Id 01ea1d94-5db1-4444-a235-6f71c22b3449 `
 -Type SOD
```

- Convert the resource to JSON
```powershell
$SODViolationCreatedPayloadPolicy | ConvertTo-JSON
```


[[Back to top]](#) 

