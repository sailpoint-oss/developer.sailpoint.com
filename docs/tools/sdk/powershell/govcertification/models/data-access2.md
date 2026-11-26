# DataAccess2

# DataAccess2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Policies** | [**[]DataAccessPoliciesInner**](data-access-policies-inner) | List of classification policies that apply to resources the entitlement or group has access to. | [optional] 
**Categories** | [**[]DataAccessCategoriesInner**](data-access-categories-inner) | List of classification categories that apply to resources the entitlement or group has access to. | [optional] 
**ImpactScore** | [**DataAccessImpactScore**](data-access-impact-score) |  | [optional] 
**Modified** | **System.DateTime** | Modification date of Data Access | [optional] 

## Examples

- Prepare the resource
```powershell
$DataAccess2 = Initialize-DataAccess2  -Policies null `
 -Categories null `
 -ImpactScore null `
 -Modified 2023-10-11T18:33:52.029Z
```

- Convert the resource to JSON
```powershell
$DataAccess2 | ConvertTo-JSON
```


[[Back to top]](#) 

