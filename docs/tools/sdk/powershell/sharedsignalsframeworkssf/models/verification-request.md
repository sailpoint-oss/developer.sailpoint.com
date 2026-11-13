# VerificationRequest

# VerificationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StreamId** | **String** | Stream ID for verification. | [required]
**State** | **String** | Optional state value for verification challenge. | [optional] 

## Examples

- Prepare the resource
```powershell
$VerificationRequest = Initialize-VerificationRequest  -StreamId 550e8400-e29b-41d4-a716-446655440000 `
 -State verification-challenge-state-123
```

- Convert the resource to JSON
```powershell
$VerificationRequest | ConvertTo-JSON
```


[[Back to top]](#) 

