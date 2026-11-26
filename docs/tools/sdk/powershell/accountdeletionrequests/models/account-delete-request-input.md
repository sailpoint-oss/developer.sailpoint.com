# AccountDeleteRequestInput

# AccountDeleteRequestInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comments** | **String** | Reason for deleting the account. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountDeleteRequestInput = Initialize-AccountDeleteRequestInput  -Comments Requesting account deletion request
```

- Convert the resource to JSON
```powershell
$AccountDeleteRequestInput | ConvertTo-JSON
```


[[Back to top]](#) 

