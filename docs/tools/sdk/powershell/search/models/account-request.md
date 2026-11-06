# AccountRequest

# AccountRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountId** | **String** | Unique ID of the account | [optional] 
**AttributeRequests** | [**[]AttributeRequest**](attribute-request) |  | [optional] 
**Op** | **String** | The operation that was performed | [optional] 
**ProvisioningTarget** | [**AccountSource**](account-source) |  | [optional] 
**Result** | [**AccountRequestResult**](account-request-result) |  | [optional] 
**Source** | [**AccountSource**](account-source) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountRequest = Initialize-AccountRequest  -AccountId John.Doe `
 -AttributeRequests null `
 -Op Modify `
 -ProvisioningTarget null `
 -Result null `
 -Source null
```

- Convert the resource to JSON
```powershell
$AccountRequest | ConvertTo-JSON
```


[[Back to top]](#) 

