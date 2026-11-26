# HumanAccountSubtypeConfigHumanAccountCreate

# HumanAccountSubtypeConfigHumanAccountCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountCreateEnabled** | **Boolean** | Specifies if creation of human accounts is allowed for this subtype. | [optional] [default to $false]
**ApprovalRequired** | **Boolean** | Specifies if approval is required for human account creation requests for this subtype. | [optional] [default to $false]
**ApprovalConfig** | [**HumanAccountSubtypeConfigHumanAccountCreateApprovalConfig**](human-account-subtype-config-human-account-create-approval-config) |  | [optional] 
**FormId** | **String** | ID of the form linked to the subtype. | [optional] 

## Examples

- Prepare the resource
```powershell
$HumanAccountSubtypeConfigHumanAccountCreate = Initialize-HumanAccountSubtypeConfigHumanAccountCreate  -AccountCreateEnabled true `
 -ApprovalRequired true `
 -ApprovalConfig null `
 -FormId 4f1bb61b-a0ab-4c0a-b9fb-20f44407b75a
```

- Convert the resource to JSON
```powershell
$HumanAccountSubtypeConfigHumanAccountCreate | ConvertTo-JSON
```


[[Back to top]](#) 

