# FirstValid

# FirstValid

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Values** | **[]SystemCollectionsHashtable** | An array of attributes to evaluate for existence. | [required]
**IgnoreErrors** | **Boolean** | a true or false value representing to move on to the next option if an error (like an Null Pointer Exception) were to occur. | [optional] [default to $false]
**RequiresPeriodicRefresh** | **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$FirstValid = Initialize-FirstValid  -Values [{"attributes":{"sourceName":"Active Directory","attributeName":"sAMAccountName"},"type":"accountAttribute"},{"attributes":{"sourceName":"Okta","attributeName":"login"},"type":"accountAttribute"},{"attributes":{"sourceName":"HR Source","attributeName":"employeeID"},"type":"accountAttribute"}] `
 -IgnoreErrors false `
 -RequiresPeriodicRefresh false
```

- Convert the resource to JSON
```powershell
$FirstValid | ConvertTo-JSON
```


[[Back to top]](#) 

