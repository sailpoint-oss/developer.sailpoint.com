# RequestabilityForRole

# RequestabilityForRole

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommentsRequired** | **Boolean** | Whether the requester of the containing object must provide comments justifying the request | [optional] [default to $false]
**DenialCommentsRequired** | **Boolean** | Whether an approver must provide comments when denying the request | [optional] [default to $false]
**ReauthorizationRequired** | **Boolean** | Indicates whether reauthorization is required for the request. | [optional] [default to $false]
**RequireEndDate** | **Boolean** | Indicates whether the requester of the containing object must provide access end date. | [optional] [default to $false]
**MaxPermittedAccessDuration** | [**AccessDuration**](access-duration) |  | [optional] 
**ApprovalSchemes** | [**[]ApprovalSchemeForRole**](approval-scheme-for-role) | List describing the steps in approving the request | [optional] 
**DimensionSchema** | [**DimensionSchema**](dimension-schema) |  | [optional] 
**FormDefinitionId** | **String** | The ID of the form definition used for the access request. If specified, the form is presented to the requester during the access request process. | [optional] 

## Examples

- Prepare the resource
```powershell
$RequestabilityForRole = Initialize-RequestabilityForRole  -CommentsRequired true `
 -DenialCommentsRequired true `
 -ReauthorizationRequired true `
 -RequireEndDate true `
 -MaxPermittedAccessDuration null `
 -ApprovalSchemes null `
 -DimensionSchema null `
 -FormDefinitionId 78258e80-e9e2-4e1a-a11f-ce0b7c62f25d
```

- Convert the resource to JSON
```powershell
$RequestabilityForRole | ConvertTo-JSON
```


[[Back to top]](#) 

