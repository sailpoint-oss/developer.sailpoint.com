# SearchCriteriaTextQuery

# SearchCriteriaTextQuery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Terms** | **[]String** | Terms to search for. | [optional] 
**Fields** | **[]String** | Fields to search within. | [optional] 
**MatchAny** | **Boolean** | Whether to match any of the terms. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$SearchCriteriaTextQuery = Initialize-SearchCriteriaTextQuery  -Terms ["admin","user"] `
 -Fields ["role","name"] `
 -MatchAny true
```

- Convert the resource to JSON
```powershell
$SearchCriteriaTextQuery | ConvertTo-JSON
```


[[Back to top]](#) 

