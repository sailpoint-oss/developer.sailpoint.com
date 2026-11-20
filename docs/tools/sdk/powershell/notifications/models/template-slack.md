# TemplateSlack

# TemplateSlack

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **String** | The template key | [optional] 
**Text** | **String** | The main text content of the Slack message | [optional] 
**Blocks** | **String** | JSON string of Slack Block Kit blocks for rich formatting | [optional] 
**Attachments** | **String** | JSON string of Slack attachments | [optional] 
**NotificationType** | **String** | The type of notification | [optional] 
**ApprovalId** | **String** | The approval request ID | [optional] 
**RequestId** | **String** | The request ID | [optional] 
**RequestedById** | **String** | The ID of the user who made the request | [optional] 
**IsSubscription** | **Boolean** | Whether this is a subscription notification | [optional] [default to $false]
**AutoApprovalData** | [**TemplateSlackAutoApprovalData**](template-slack-auto-approval-data) |  | [optional] 
**CustomFields** | [**TemplateSlackCustomFields**](template-slack-custom-fields) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$TemplateSlack = Initialize-TemplateSlack  -Key null `
 -Text You have a new approval request `
 -Blocks null `
 -Attachments [] `
 -NotificationType null `
 -ApprovalId null `
 -RequestId null `
 -RequestedById null `
 -IsSubscription null `
 -AutoApprovalData null `
 -CustomFields null
```

- Convert the resource to JSON
```powershell
$TemplateSlack | ConvertTo-JSON
```


[[Back to top]](#) 

