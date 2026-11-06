# Compensatingcontrolresponse

# Compensatingcontrolresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The system-generated unique identifier of the compensating control. | [optional] [readonly] 
**Name** | **String** | The display name of the compensating control. | [optional] [readonly] 
**Description** | **String** | A human-readable description of the compensating control. | [optional] [readonly] 
**Owner** | [**Reference**](reference) |  | [required]
**SecondaryOwners** | [**[]Reference**](reference) | References to additional identities or governance groups that share ownership of the compensating control. | [optional] [readonly] 
**Type** | **String** | The type of compensating control that determines how a violation is addressed. | [optional] [readonly] 
**Action** | **String** | The action performed when the compensating control is applied. | [optional] [readonly] 
**Expiration** | **String** | The duration after which the applied control expires, expressed as a duration string. | [optional] [readonly] 
**JustificationRequired** | **Boolean** | Indicates whether a justification is required when applying this control. | [required][readonly] 
**WorkflowID** | **String** | Opaque workflow definition identifier in the exact form required by the owning service.  | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$Compensatingcontrolresponse = Initialize-Compensatingcontrolresponse  -Id 3e078865-55ed-43cf-b83c-85c58d2016e6 `
 -Name Example Name `
 -Description a description `
 -Owner null `
 -SecondaryOwners [{"id":"943a7c57da334d07ba2454bf7fcf144f","type":"IDENTITY","name":"John Doe"}] `
 -Type MITIGATION `
 -Action action `
 -Expiration 720h `
 -JustificationRequired true `
 -WorkflowID 3e07886555ed43cfb83c85c58d2016e6
```

- Convert the resource to JSON
```powershell
$Compensatingcontrolresponse | ConvertTo-JSON
```


[[Back to top]](#) 

