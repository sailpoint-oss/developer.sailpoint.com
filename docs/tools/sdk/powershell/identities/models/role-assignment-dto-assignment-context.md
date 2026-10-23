# RoleAssignmentDtoAssignmentContext

# RoleAssignmentDtoAssignmentContext

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Requested** | [**AccessRequestContext**](access-request-context) |  | [optional] 
**Matched** | [**[]RoleMatchDto**](role-match-dto) |  | [optional] 
**ComputedDate** | **String** | Date that the assignment will was evaluated | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleAssignmentDtoAssignmentContext = Initialize-RoleAssignmentDtoAssignmentContext  -Requested null `
 -Matched null `
 -ComputedDate Wed Feb 14 10:58:42
```

- Convert the resource to JSON
```powershell
$RoleAssignmentDtoAssignmentContext | ConvertTo-JSON
```


[[Back to top]](#) 

