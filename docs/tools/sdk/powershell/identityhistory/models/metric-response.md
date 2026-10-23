# MetricResponse

# MetricResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | the name of metric | [optional] 
**Value** | **Decimal** | the value associated to the metric | [optional] 

## Examples

- Prepare the resource
```powershell
$MetricResponse = Initialize-MetricResponse  -Name null `
 -Value null
```

- Convert the resource to JSON
```powershell
$MetricResponse | ConvertTo-JSON
```


[[Back to top]](#) 

