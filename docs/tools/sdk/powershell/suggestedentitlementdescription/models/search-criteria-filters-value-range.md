# SearchCriteriaFiltersValueRange

# SearchCriteriaFiltersValueRange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Lower** | [**SearchCriteriaFiltersValueRangeLower**](search-criteria-filters-value-range-lower) |  | [optional] 
**Upper** | [**SearchCriteriaFiltersValueRangeUpper**](search-criteria-filters-value-range-upper) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SearchCriteriaFiltersValueRange = Initialize-SearchCriteriaFiltersValueRange  -Lower null `
 -Upper null
```

- Convert the resource to JSON
```powershell
$SearchCriteriaFiltersValueRange | ConvertTo-JSON
```


[[Back to top]](#) 

