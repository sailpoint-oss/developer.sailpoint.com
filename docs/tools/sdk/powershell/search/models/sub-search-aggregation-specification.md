# SubSearchAggregationSpecification

# SubSearchAggregationSpecification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Nested** | [**NestedAggregation**](nested-aggregation) |  | [optional] 
**Metric** | [**MetricAggregation**](metric-aggregation) |  | [optional] 
**VarFilter** | [**FilterAggregation**](filter-aggregation) |  | [optional] 
**Bucket** | [**BucketAggregation**](bucket-aggregation) |  | [optional] 
**SubAggregation** | [**Aggregations**](aggregations) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SubSearchAggregationSpecification = Initialize-SubSearchAggregationSpecification  -Nested null `
 -Metric null `
 -VarFilter null `
 -Bucket null `
 -SubAggregation null
```

- Convert the resource to JSON
```powershell
$SubSearchAggregationSpecification | ConvertTo-JSON
```


[[Back to top]](#) 

