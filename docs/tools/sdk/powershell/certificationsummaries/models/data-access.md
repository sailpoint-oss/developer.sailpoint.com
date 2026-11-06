# DataAccess

# DataAccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Policies** | [**[]DataAccessPoliciesInner**](data-access-policies-inner) | List of classification policies that apply to resources the entitlement \ groups has access to | [optional] 
**Categories** | [**[]DataAccessCategoriesInner**](data-access-categories-inner) | List of classification categories that apply to resources the entitlement \ groups has access to | [optional] 
**ImpactScore** | [**DataAccessImpactScore**](data-access-impact-score) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$DataAccess = Initialize-DataAccess  -Policies null `
 -Categories null `
 -ImpactScore null
```

- Convert the resource to JSON
```powershell
$DataAccess | ConvertTo-JSON
```


[[Back to top]](#) 

