# BulkClassifyMachineAccountsRequest

# BulkClassifyMachineAccountsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** | **[]String** | IDs of the accounts to classify. Provide between 1 and 250 account IDs. | [required]

## Examples

- Prepare the resource
```powershell
$BulkClassifyMachineAccountsRequest = Initialize-BulkClassifyMachineAccountsRequest  -Ids ["ef38f94347e94562b5bb8424a56397d8","2c9180835d191a86015d28455b4a2329"]
```

- Convert the resource to JSON
```powershell
$BulkClassifyMachineAccountsRequest | ConvertTo-JSON
```


[[Back to top]](#) 

