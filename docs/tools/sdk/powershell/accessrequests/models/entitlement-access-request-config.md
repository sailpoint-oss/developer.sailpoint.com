# EntitlementAccessRequestConfig

# EntitlementAccessRequestConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalSchemes** | [**[]EntitlementApprovalScheme**](entitlement-approval-scheme) | Ordered list of approval steps for the access request. Empty when no approval is required. | [optional] 
**RequestCommentRequired** | **Boolean** | If the requester must provide a comment during access request. | [optional] [default to $false]
**DenialCommentRequired** | **Boolean** | If the reviewer must provide a comment when denying the access request. | [optional] [default to $false]
**ReauthorizationRequired** | **Boolean** | Is Reauthorization Required | [optional] [default to $false]
**RequireEndDate** | **Boolean** | If true, then remove date or sunset date is required in access request of the entitlement. | [optional] [default to $false]
**MaxPermittedAccessDuration** | [**EntitlementAccessRequestConfigMaxPermittedAccessDuration**](entitlement-access-request-config-max-permitted-access-duration) |  | [optional] 
**FormDefinitionId** | **String** | The ID of the form definition used for the access request. If specified, the form is presented to the requester during the access request process. | [optional] 

## Examples

- Prepare the resource
```powershell
$EntitlementAccessRequestConfig = Initialize-EntitlementAccessRequestConfig  -ApprovalSchemes null `
 -RequestCommentRequired true `
 -DenialCommentRequired false `
 -ReauthorizationRequired false `
 -RequireEndDate true `
 -MaxPermittedAccessDuration null `
 -FormDefinitionId 78258e80-e9e2-4e1a-a11f-ce0b7c62f25d
```

- Convert the resource to JSON
```powershell
$EntitlementAccessRequestConfig | ConvertTo-JSON
```


[[Back to top]](#) 

