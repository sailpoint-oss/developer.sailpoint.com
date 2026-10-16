# ViolationContext

# ViolationContext

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Policy** | [**ViolationContextPolicy**](violation-context-policy) |  | [optional] 
**ConflictingAccessCriteria** | [**ExceptionAccessCriteria**](exception-access-criteria) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ViolationContext = Initialize-ViolationContext  -Policy null `
 -ConflictingAccessCriteria null
```

- Convert the resource to JSON
```powershell
$ViolationContext | ConvertTo-JSON
```


[[Back to top]](#) 

