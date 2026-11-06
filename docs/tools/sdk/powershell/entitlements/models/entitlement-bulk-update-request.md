# EntitlementBulkUpdateRequest

# EntitlementBulkUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntitlementIds** | **[]String** | List of entitlement ids to update | [required]
**JsonPatch** | [**[]JsonPatchOperation**](json-patch-operation) |  | [required]

## Examples

- Prepare the resource
```powershell
$EntitlementBulkUpdateRequest = Initialize-EntitlementBulkUpdateRequest  -EntitlementIds ["2c91808a7624751a01762f19d665220d","2c91808a7624751a01762f19d67c220e","2c91808a7624751a01762f19d692220f"] `
 -JsonPatch [{"op":"replace","path":"/requestable","value":false},{"op":"replace","path":"/privilegeOverride/level","value":"HIGH"}]
```

- Convert the resource to JSON
```powershell
$EntitlementBulkUpdateRequest | ConvertTo-JSON
```


[[Back to top]](#) 

