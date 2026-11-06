# Criteria

# Criteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CriteriaType** | **CriteriaType** |  | [required]
**Operation** | **Operation** |  | [required]
**CriteriaProperty** | **String** | The specified key from the Type of criteria. | [optional] 
**CriteriaValue** | **String** | The value for the specified key from the Type of Criteria. Used for scalar operations. Must be absent when operation is IN. | [optional] 
**CriteriaValues** | **[]String** | List of values for the IN operation. Required when operation is IN; must be absent for all other operations. | [optional] 
**Children** | [**[]Criteria**](criteria) | List of child criteria. Applicable only for COMPOSITE criteriaType | [optional] 

## Examples

- Prepare the resource
```powershell
$Criteria = Initialize-Criteria  -CriteriaType null `
 -Operation null `
 -CriteriaProperty displayName `
 -CriteriaValue Allie `
 -CriteriaValues ["8a32c3d5f2864555948e63867c377ca2","9b41d4e6g3975666059f74978d488db3"] `
 -Children [{"criteriaType":"IDENTITY","criteriaProperty":"DISPLAY_NAME","criteriaValue":"support","operation":"EQUALS"}]
```

- Convert the resource to JSON
```powershell
$Criteria | ConvertTo-JSON
```


[[Back to top]](#) 

