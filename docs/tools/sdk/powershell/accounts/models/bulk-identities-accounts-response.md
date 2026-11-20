# BulkIdentitiesAccountsResponse

# BulkIdentitiesAccountsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Identifier of bulk request item. | [optional] 
**StatusCode** | **Int32** | Response status value. | [optional] 
**Message** | **String** | Status containing additional context information about failures. | [optional] 

## Examples

- Prepare the resource
```powershell
$BulkIdentitiesAccountsResponse = Initialize-BulkIdentitiesAccountsResponse  -Id 2c9180858082150f0180893dbaf553fe `
 -StatusCode 404 `
 -Message Referenced identity "2c9180858082150f0180893dbaf553fe" was not found.
```

- Convert the resource to JSON
```powershell
$BulkIdentitiesAccountsResponse | ConvertTo-JSON
```


[[Back to top]](#) 

