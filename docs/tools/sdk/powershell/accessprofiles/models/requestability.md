# Requestability

# Requestability

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommentsRequired** | **Boolean** | Indicates whether the requester of the containing object must provide comments justifying the request. | [optional] [default to $false]
**DenialCommentsRequired** | **Boolean** | Indicates whether an approver must provide comments when denying the request. | [optional] [default to $false]
**ReauthorizationRequired** | **Boolean** | Indicates whether reauthorization is required for the request. | [optional] [default to $false]
**RequireEndDate** | **Boolean** | Indicates whether the requester of the containing object must provide access end date. | [optional] [default to $false]
**MaxPermittedAccessDuration** | [**AccessDuration**](access-duration) |  | [optional] 
**ApprovalSchemes** | [**[]AccessProfileApprovalScheme**](access-profile-approval-scheme) | List describing the steps involved in approving the request. | [optional] 
**FormDefinitionId** | **String** | The ID of the form definition used for the access request. If specified, the form is presented to the requester during the access request process. | [optional] 

## Examples

- Prepare the resource
```powershell
$Requestability = Initialize-Requestability  -CommentsRequired true `
 -DenialCommentsRequired true `
 -ReauthorizationRequired true `
 -RequireEndDate true `
 -MaxPermittedAccessDuration null `
 -ApprovalSchemes null `
 -FormDefinitionId 78258e80-e9e2-4e1a-a11f-ce0b7c62f25d
```

- Convert the resource to JSON
```powershell
$Requestability | ConvertTo-JSON
```


[[Back to top]](#) 

