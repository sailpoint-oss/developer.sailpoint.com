# SedBatchRequest

# SedBatchRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Entitlements** | **[]String** | list of entitlement ids | [optional] 
**Seds** | **[]String** | list of sed ids | [optional] 
**SearchCriteria** | [**map[string]SearchCriteria**](search-criteria) | Search criteria for the batch request. | [optional] 

## Examples

- Prepare the resource
```powershell
$SedBatchRequest = Initialize-SedBatchRequest  -Entitlements null `
 -Seds null `
 -SearchCriteria null
```

- Convert the resource to JSON
```powershell
$SedBatchRequest | ConvertTo-JSON
```


[[Back to top]](#) 

