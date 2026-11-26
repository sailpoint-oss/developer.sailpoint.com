# MachineIdentityBulkRequest

# MachineIdentityBulkRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** | **[]String** | IDs of the machine identities. Provide between 1 and 100 IDs. | [required]

## Examples

- Prepare the resource
```powershell
$MachineIdentityBulkRequest = Initialize-MachineIdentityBulkRequest  -Ids ["ef38f94347e94562b5bb8424a56397d8","2c9180858082150f0180893dbaf44201"]
```

- Convert the resource to JSON
```powershell
$MachineIdentityBulkRequest | ConvertTo-JSON
```


[[Back to top]](#) 

