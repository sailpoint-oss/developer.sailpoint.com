# Compensatingcontrolupdate

# Compensatingcontrolupdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The display name of the compensating control. | [optional] 
**Description** | **String** | A human-readable description of the compensating control. | [optional] 
**Owner** | [**Referenceinput**](referenceinput) |  | [optional] 
**SecondaryOwners** | [**[]Referenceinput**](referenceinput) | References to additional identities or governance groups that share ownership of the compensating control (maximum 10). | [optional] 
**Type** |  **Enum** [  "Mitigation",    "Remediation" ] | The type of compensating control that determines how a violation is addressed. | [optional] 
**Action** |  **Enum** [  "Workflow",    "Certification" ] | The action performed when the compensating control is applied. | [optional] 
**Expiration** | **String** | The duration after which the applied control expires, expressed as a duration string. | [optional] 
**JustificationRequired** | **Boolean** | Indicates whether a justification is required when applying this control. | [optional] [default to $false]
**WorkflowID** | **String** | Workflow definition ID used when the control action is a workflow. | [optional] 

## Examples

- Prepare the resource
```powershell
$Compensatingcontrolupdate = Initialize-Compensatingcontrolupdate  -Name a name `
 -Description a description `
 -Owner null `
 -SecondaryOwners [{"id":"943a7c57da334d07ba2454bf7fcf144f","type":"GOVERNANCE_GROUP"}] `
 -Type Mitigation `
 -Action Workflow `
 -Expiration 20d `
 -JustificationRequired true `
 -WorkflowID 3e07886555ed43cfb83c85c58d2016e6
```

- Convert the resource to JSON
```powershell
$Compensatingcontrolupdate | ConvertTo-JSON
```


[[Back to top]](#) 

