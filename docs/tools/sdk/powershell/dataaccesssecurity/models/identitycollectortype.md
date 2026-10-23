# Identitycollectortype

# Identitycollectortype

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **String** | Identity collector type display name. Matches the `type` values returned by list and used by create/update metadata. Base types only (for example `Box`, not `Box SaaS`). | [required]
**IscConnectorNames** | **[]String** | Exact ISC `connectorName` values to use in `GET /v3/sources` filters (`connectorName eq ""...""`). These are not always equal to `type` (for example Google Drive maps to `G Suite` and `Google Workspace SaaS`). | [required]

## Examples

- Prepare the resource
```powershell
$Identitycollectortype = Initialize-Identitycollectortype  -Type Google Drive `
 -IscConnectorNames ["G Suite","Google Workspace SaaS"]
```

- Convert the resource to JSON
```powershell
$Identitycollectortype | ConvertTo-JSON
```


[[Back to top]](#) 

