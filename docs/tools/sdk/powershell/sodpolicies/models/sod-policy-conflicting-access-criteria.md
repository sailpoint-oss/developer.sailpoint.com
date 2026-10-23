# SodPolicyConflictingAccessCriteria

# SodPolicyConflictingAccessCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LeftCriteria** | [**AccessCriteria**](access-criteria) |  | [optional] 
**RightCriteria** | [**AccessCriteria**](access-criteria) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SodPolicyConflictingAccessCriteria = Initialize-SodPolicyConflictingAccessCriteria  -LeftCriteria null `
 -RightCriteria null
```

- Convert the resource to JSON
```powershell
$SodPolicyConflictingAccessCriteria | ConvertTo-JSON
```


[[Back to top]](#) 

