# MachineIdentityAggregationRequest

# MachineIdentityAggregationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DatasetIds** | **[]String** | List of dataset Ids to aggregate machine identities | [required]
**DisableOptimization** | **Boolean** | Flag to disable optimization for the aggregation. Defaults to false when not provided. When set to true, it disables aggregation optimizations and may increase processing time. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$MachineIdentityAggregationRequest = Initialize-MachineIdentityAggregationRequest  -DatasetIds null `
 -DisableOptimization false
```

- Convert the resource to JSON
```powershell
$MachineIdentityAggregationRequest | ConvertTo-JSON
```


[[Back to top]](#) 

