# SearchCriteriaFiltersValueRangeLower

# SearchCriteriaFiltersValueRangeLower

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | **String** | The lower bound value. | [optional] 
**Inclusive** | **Boolean** | Whether the lower bound is inclusive. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$SearchCriteriaFiltersValueRangeLower = Initialize-SearchCriteriaFiltersValueRangeLower  -Value 10 `
 -Inclusive true
```

- Convert the resource to JSON
```powershell
$SearchCriteriaFiltersValueRangeLower | ConvertTo-JSON
```


[[Back to top]](#) 

