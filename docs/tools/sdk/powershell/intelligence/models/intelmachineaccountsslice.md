# Intelmachineaccountsslice

# Intelmachineaccountsslice

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | [**[]Intelmachineaccountwire**](intelmachineaccountwire) | Machine accounts correlated to the non-human identity. | [required]
**TotalCount** | **Int32** | Correlated machine account count from aggregation; omitted when items is empty. | [optional] 
**Next** | **String** | Next page URL when totalCount exceeds items returned. Includes isNHI=true. | [optional] 

## Examples

- Prepare the resource
```powershell
$Intelmachineaccountsslice = Initialize-Intelmachineaccountsslice  -Items null `
 -TotalCount 11 `
 -Next https://tenant.example.api.cloud.sailpoint.com/intelligence/v1/identities/2c91808874ff91550175097daaec161e/accounts?limit=10&offset=10&count=true&isNHI=true
```

- Convert the resource to JSON
```powershell
$Intelmachineaccountsslice | ConvertTo-JSON
```


[[Back to top]](#) 

