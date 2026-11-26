# SearchCriteriaFiltersValueRangeUpper

# SearchCriteriaFiltersValueRangeUpper

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | **String** | The upper bound value. | [optional] 
**Inclusive** | **Boolean** | Whether the upper bound is inclusive. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$SearchCriteriaFiltersValueRangeUpper = Initialize-SearchCriteriaFiltersValueRangeUpper  -Value 20 `
 -Inclusive false
```

- Convert the resource to JSON
```powershell
$SearchCriteriaFiltersValueRangeUpper | ConvertTo-JSON
```


[[Back to top]](#) 

