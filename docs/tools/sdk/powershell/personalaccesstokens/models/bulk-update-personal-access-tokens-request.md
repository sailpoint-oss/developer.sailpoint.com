# BulkUpdatePersonalAccessTokensRequest

# BulkUpdatePersonalAccessTokensRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** | **[]String** | The IDs of the personal access tokens to update. All IDs must reference personal access tokens that exist in the current tenant. Duplicate and blank values are not allowed. | [required]
**Patch** | [**[]JsonPatchOperation**](json-patch-operation) | A single [JSON Patch](https://tools.ietf.org/html/rfc6902) document that is applied identically to every personal access token referenced in `ids`. Only the following paths are allowed for bulk updates: * `/expirationDate` - Set (`replace`) or clear (`remove`) the token's expiration. * `/userAwareTokenNeverExpires` - Explicit acknowledgment required when clearing `expirationDate`. Any other path (for example `/name` or `/scope`) results in a `400` response. | [required]

## Examples

- Prepare the resource
```powershell
$BulkUpdatePersonalAccessTokensRequest = Initialize-BulkUpdatePersonalAccessTokensRequest  -Ids ["695dab70d33d466b81d958dc9fb392db","abc123def456abc123def456abc12345"] `
 -Patch [{"op":"replace","path":"/expirationDate","value":"2026-08-01T00:00:00.000Z"}]
```

- Convert the resource to JSON
```powershell
$BulkUpdatePersonalAccessTokensRequest | ConvertTo-JSON
```


[[Back to top]](#) 

