# DimensionMembershipSelector

# DimensionMembershipSelector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **DimensionMembershipSelectorType** |  | [optional] 
**Criteria** | [**DimensionCriteriaLevel1**](dimension-criteria-level1) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$DimensionMembershipSelector = Initialize-DimensionMembershipSelector  -Type null `
 -Criteria null
```

- Convert the resource to JSON
```powershell
$DimensionMembershipSelector | ConvertTo-JSON
```


[[Back to top]](#) 

