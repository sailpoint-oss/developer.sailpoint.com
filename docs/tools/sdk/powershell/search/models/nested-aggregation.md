# NestedAggregation

# NestedAggregation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The name of the nested aggregate to be included in the result. | [required]
**Type** | **String** | The type of the nested object. | [required]

## Examples

- Prepare the resource
```powershell
$NestedAggregation = Initialize-NestedAggregation  -Name id `
 -Type access
```

- Convert the resource to JSON
```powershell
$NestedAggregation | ConvertTo-JSON
```


[[Back to top]](#) 

