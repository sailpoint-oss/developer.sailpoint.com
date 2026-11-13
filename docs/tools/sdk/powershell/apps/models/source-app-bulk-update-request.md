# SourceAppBulkUpdateRequest

# SourceAppBulkUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AppIds** | **[]String** | List of source app ids to update | [required]
**JsonPatch** | [**[]JsonPatchOperation**](json-patch-operation) | The JSONPatch payload used to update the source app. | [required]

## Examples

- Prepare the resource
```powershell
$SourceAppBulkUpdateRequest = Initialize-SourceAppBulkUpdateRequest  -AppIds ["2c91808a7624751a01762f19d665220d","2c91808a7624751a01762f19d67c220e","2c91808a7624751a01762f19d692220f"] `
 -JsonPatch [{"op":"replace","path":"/enabled","value":false},{"op":"replace","path":"/matchAllAccounts","value":false}]
```

- Convert the resource to JSON
```powershell
$SourceAppBulkUpdateRequest | ConvertTo-JSON
```


[[Back to top]](#) 

