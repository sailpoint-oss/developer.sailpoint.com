# IdentityDocumentAllOfIdentityProfile

# IdentityDocumentAllOfIdentityProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Identity profile's ID. | [optional] 
**Name** | **String** | Identity profile's name. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityDocumentAllOfIdentityProfile = Initialize-IdentityDocumentAllOfIdentityProfile  -Id 3bc8ad26b8664945866b31339d1ff7d2 `
 -Name HR Employees
```

- Convert the resource to JSON
```powershell
$IdentityDocumentAllOfIdentityProfile | ConvertTo-JSON
```


[[Back to top]](#) 

