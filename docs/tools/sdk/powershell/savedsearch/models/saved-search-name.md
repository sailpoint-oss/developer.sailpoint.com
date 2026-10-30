# SavedSearchName

# SavedSearchName

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The name of the saved search.  | [optional] 
**Description** | **String** | The description of the saved search.  | [optional] 

## Examples

- Prepare the resource
```powershell
$SavedSearchName = Initialize-SavedSearchName  -Name Disabled accounts `
 -Description Disabled accounts
```

- Convert the resource to JSON
```powershell
$SavedSearchName | ConvertTo-JSON
```


[[Back to top]](#) 

