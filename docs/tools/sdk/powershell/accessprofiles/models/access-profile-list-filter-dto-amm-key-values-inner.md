# AccessProfileListFilterDTOAmmKeyValuesInner

# AccessProfileListFilterDTOAmmKeyValuesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attribute** | **String** | The technical name of the metadata attribute. A blank or missing value is rejected with a 400 error. | [optional] 
**Values** | **[]String** | The attribute values used to filter access profiles. If the list is empty, results are filtered by attribute key only. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessProfileListFilterDTOAmmKeyValuesInner = Initialize-AccessProfileListFilterDTOAmmKeyValuesInner  -Attribute iscFederalClassifications `
 -Values ["secret"]
```

- Convert the resource to JSON
```powershell
$AccessProfileListFilterDTOAmmKeyValuesInner | ConvertTo-JSON
```


[[Back to top]](#) 

