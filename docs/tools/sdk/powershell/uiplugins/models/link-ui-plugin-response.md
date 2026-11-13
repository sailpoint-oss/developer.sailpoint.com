# LinkUIPluginResponse

# LinkUIPluginResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DevOverrides** | **map[string]String** | Updated `devOverrides` map of `identityId` to `https://localhost:{port}`. | [required]
**DevDocumentHeaders** | [**PluginDocumentHeaders**](plugin-document-headers) |  | [required]

## Examples

- Prepare the resource
```powershell
$LinkUIPluginResponse = Initialize-LinkUIPluginResponse  -DevOverrides {"2c9180867bexampleidentity000001":"https://localhost:4200"} `
 -DevDocumentHeaders null
```

- Convert the resource to JSON
```powershell
$LinkUIPluginResponse | ConvertTo-JSON
```


[[Back to top]](#) 

