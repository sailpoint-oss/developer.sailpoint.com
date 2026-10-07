# SavedSearchDetailFilters

# SavedSearchDetailFilters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **FilterType** |  | [optional] 
**Range** | [**Range**](range) |  | [optional] 
**Terms** | **[]String** | The terms to be filtered. | [optional] 
**Exclude** | **Boolean** | Indicates if the filter excludes results. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$SavedSearchDetailFilters = Initialize-SavedSearchDetailFilters  -Type null `
 -Range null `
 -Terms null `
 -Exclude false
```

- Convert the resource to JSON
```powershell
$SavedSearchDetailFilters | ConvertTo-JSON
```


[[Back to top]](#) 

