# AccountsSelectionResponse

# AccountsSelectionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identities** | [**[]IdentityAccountSelections**](identity-account-selections) | A list of available account selections per identity in the request, for all the requested items | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountsSelectionResponse = Initialize-AccountsSelectionResponse  -Identities null
```

- Convert the resource to JSON
```powershell
$AccountsSelectionResponse | ConvertTo-JSON
```


[[Back to top]](#) 

