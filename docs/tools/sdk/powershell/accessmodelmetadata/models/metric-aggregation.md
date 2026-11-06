# MetricAggregation

# MetricAggregation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The name of the metric aggregate to be included in the result. If the metric aggregation is omitted, the resulting aggregation will be a count of the documents in the search results. | [required]
**Type** | **MetricType** |  | [optional] 
**Field** | **String** | The field the calculation is performed on.  Prefix the field name with '@' to reference a nested object.  | [required]

## Examples

- Prepare the resource
```powershell
$MetricAggregation = Initialize-MetricAggregation  -Name Access Name Count `
 -Type null `
 -Field @access.name
```

- Convert the resource to JSON
```powershell
$MetricAggregation | ConvertTo-JSON
```


[[Back to top]](#) 

