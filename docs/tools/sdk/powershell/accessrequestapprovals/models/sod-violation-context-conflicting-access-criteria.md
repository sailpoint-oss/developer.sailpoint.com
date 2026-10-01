# SodViolationContextConflictingAccessCriteria

# SodViolationContextConflictingAccessCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LeftCriteria** | [**SodViolationContextConflictingAccessCriteriaLeftCriteria**](sod-violation-context-conflicting-access-criteria-left-criteria) |  | [optional] 
**RightCriteria** | [**SodViolationContextConflictingAccessCriteriaLeftCriteria**](sod-violation-context-conflicting-access-criteria-left-criteria) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SodViolationContextConflictingAccessCriteria = Initialize-SodViolationContextConflictingAccessCriteria  -LeftCriteria null `
 -RightCriteria null
```

- Convert the resource to JSON
```powershell
$SodViolationContextConflictingAccessCriteria | ConvertTo-JSON
```


[[Back to top]](#) 

