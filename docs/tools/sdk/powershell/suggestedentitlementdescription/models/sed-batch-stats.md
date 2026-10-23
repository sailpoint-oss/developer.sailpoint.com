# SedBatchStats

# SedBatchStats

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BatchComplete** | **Boolean** | batch complete | [optional] [default to $false]
**BatchId** | **String** | batch Id | [optional] 
**DiscoveredCount** | **Int64** | discovered count | [optional] 
**DiscoveryComplete** | **Boolean** | discovery complete | [optional] [default to $false]
**ProcessedCount** | **Int64** | processed count | [optional] 

## Examples

- Prepare the resource
```powershell
$SedBatchStats = Initialize-SedBatchStats  -BatchComplete true `
 -BatchId 016629d1-1d25-463f-97f3-0c6686846650 `
 -DiscoveredCount 100 `
 -DiscoveryComplete true `
 -ProcessedCount 100
```

- Convert the resource to JSON
```powershell
$SedBatchStats | ConvertTo-JSON
```


[[Back to top]](#) 

