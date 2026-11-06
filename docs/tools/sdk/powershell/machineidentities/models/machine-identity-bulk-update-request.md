# MachineIdentityBulkUpdateRequest

# MachineIdentityBulkUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** | **[]String** | IDs of the machine identities to update. Provide between 1 and 100 IDs. | [required]
**JsonPatch** | [**[]JsonPatchOperation**](json-patch-operation) | [JSON Patch](https://tools.ietf.org/html/rfc6902) operations applied to every machine identity in `ids`. Only these paths can be patched: `/description`, `/userEntitlements`, `/owners`, `/owners/primary`, and `/owners/secondary`. | [required]

## Examples

- Prepare the resource
```powershell
$MachineIdentityBulkUpdateRequest = Initialize-MachineIdentityBulkUpdateRequest  -Ids ["ef38f94347e94562b5bb8424a56397d8","2c9180858082150f0180893dbaf44201"] `
 -JsonPatch [{"op":"replace","path":"/description","value":"Agent used by the finance team"}]
```

- Convert the resource to JSON
```powershell
$MachineIdentityBulkUpdateRequest | ConvertTo-JSON
```


[[Back to top]](#) 

