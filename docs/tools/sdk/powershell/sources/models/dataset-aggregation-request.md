# DatasetAggregationRequest

# DatasetAggregationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Config** | **map[string]AnyType** | Connector-specific aggregation configuration. | [optional] 

## Examples

- Prepare the resource
```powershell
$DatasetAggregationRequest = Initialize-DatasetAggregationRequest  -Config {"region":"us-east-1"}
```

- Convert the resource to JSON
```powershell
$DatasetAggregationRequest | ConvertTo-JSON
```


[[Back to top]](#) 

