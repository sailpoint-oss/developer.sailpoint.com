# TemplateTeams

# TemplateTeams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **String** | The template key | [optional] 
**Title** | **String** | The title of the Teams message | [optional] 
**Text** | **String** | The main text content of the Teams message | [optional] 
**MessageJSON** | **String** | JSON string of the Teams adaptive card | [optional] 
**IsSubscription** | **Boolean** | Whether this is a subscription notification | [optional] [default to $false]
**ApprovalId** | **String** | The approval request ID | [optional] 
**RequestId** | **String** | The request ID | [optional] 
**RequestedById** | **String** | The ID of the user who made the request | [optional] 
**NotificationType** | **String** | The type of notification | [optional] 
**AutoApprovalData** | [**TemplateSlackAutoApprovalData**](template-slack-auto-approval-data) |  | [optional] 
**CustomFields** | [**TemplateSlackCustomFields**](template-slack-custom-fields) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$TemplateTeams = Initialize-TemplateTeams  -Key null `
 -Title null `
 -Text You have a new approval request `
 -MessageJSON null `
 -IsSubscription null `
 -ApprovalId null `
 -RequestId null `
 -RequestedById null `
 -NotificationType null `
 -AutoApprovalData null `
 -CustomFields null
```

- Convert the resource to JSON
```powershell
$TemplateTeams | ConvertTo-JSON
```


[[Back to top]](#) 

