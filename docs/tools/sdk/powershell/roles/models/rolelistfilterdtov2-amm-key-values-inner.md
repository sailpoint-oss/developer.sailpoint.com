# Rolelistfilterdtov2AmmKeyValuesInner

# Rolelistfilterdtov2AmmKeyValuesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attribute** | **String** | attribute key of a metadata. A blank value is rejected with a 400 error. | [required]
**Values** | **[]String** | A list of attribute key names to filter roles. If the values is empty, will only filter by attribute key. | [optional] 

## Examples

- Prepare the resource
```powershell
$Rolelistfilterdtov2AmmKeyValuesInner = Initialize-Rolelistfilterdtov2AmmKeyValuesInner  -Attribute iscFederalClassifications `
 -Values ["secret"]
```

- Convert the resource to JSON
```powershell
$Rolelistfilterdtov2AmmKeyValuesInner | ConvertTo-JSON
```


[[Back to top]](#) 

