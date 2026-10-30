# FilterAggregation

# FilterAggregation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The name of the filter aggregate to be included in the result. | [required]
**Type** | **SearchFilterType** |  | [optional] 
**Field** | **String** | The search field to apply the filter to.  Prefix the field name with '@' to reference a nested object.  | [required]
**Value** | **String** | The value to filter on. | [required]

## Examples

- Prepare the resource
```powershell
$FilterAggregation = Initialize-FilterAggregation  -Name Entitlements `
 -Type null `
 -Field access.type `
 -Value ENTITLEMENT
```

- Convert the resource to JSON
```powershell
$FilterAggregation | ConvertTo-JSON
```


[[Back to top]](#) 

