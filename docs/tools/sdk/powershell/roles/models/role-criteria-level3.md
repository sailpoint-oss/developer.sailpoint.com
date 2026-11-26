# RoleCriteriaLevel3

# RoleCriteriaLevel3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operation** | **RoleCriteriaOperation** |  | [optional] 
**Key** | [**RoleCriteriaKey**](role-criteria-key) |  | [optional] 
**StringValue** | **String** | String value to test the Identity attribute, Account attribute, or Entitlement specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is one of EQUALS, NOT_EQUALS, CONTAINS, DOES_NOT_CONTAIN, STARTS_WITH, or ENDS_WITH, this field is required. Otherwise, specifying it is an error. | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleCriteriaLevel3 = Initialize-RoleCriteriaLevel3  -Operation null `
 -Key null `
 -StringValue carlee.cert1c9f9b6fd@mailinator.com
```

- Convert the resource to JSON
```powershell
$RoleCriteriaLevel3 | ConvertTo-JSON
```


[[Back to top]](#) 

