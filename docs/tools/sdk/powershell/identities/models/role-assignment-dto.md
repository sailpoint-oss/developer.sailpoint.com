# RoleAssignmentDto

# RoleAssignmentDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Assignment Id | [optional] 
**Role** | [**BaseReferenceDto**](base-reference-dto) |  | [optional] 
**Comments** | **String** | Comments added by the user when the assignment was made | [optional] 
**AssignmentSource** | **String** | Source describing how this assignment was made | [optional] 
**Assigner** | [**RoleAssignmentDtoAssigner**](role-assignment-dto-assigner) |  | [optional] 
**AssignedDimensions** | [**[]BaseReferenceDto**](base-reference-dto) | Dimensions assigned related to this role | [optional] 
**AssignmentContext** | [**RoleAssignmentDtoAssignmentContext**](role-assignment-dto-assignment-context) |  | [optional] 
**AccountTargets** | [**[]RoleTargetDto**](role-target-dto) |  | [optional] 
**StartDate** | **System.DateTime** | Date when assignment will be active, if access was requested with a future start date. If null, assignment is active immediately | [optional] 
**RemoveDate** | **System.DateTime** | Date that the assignment will be removed | [optional] 
**AddedDate** | **System.DateTime** | Date that the assignment was added | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleAssignmentDto = Initialize-RoleAssignmentDto  -Id 1cbb0705b38c4226b1334eadd8874086 `
 -Role null `
 -Comments I'm a new Engineer and need this role to do my work `
 -AssignmentSource UI `
 -Assigner null `
 -AssignedDimensions [{"id":"1acc8ffe5fcf457090de28bee2af36ee","type":"DIMENSION","name":"Northeast region"}] `
 -AssignmentContext null `
 -AccountTargets null `
 -StartDate 2026-07-10T18:45:37.098Z `
 -RemoveDate 2026-07-11T18:45:37.098Z `
 -AddedDate 2025-07-11T18:45:37.098Z
```

- Convert the resource to JSON
```powershell
$RoleAssignmentDto | ConvertTo-JSON
```


[[Back to top]](#) 

