# WorkflowDefinition

# WorkflowDefinition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Start** | **String** | The name of the starting step. | [optional] 
**Steps** | **map[string]AnyType** | One or more step objects that comprise this workflow.  Please see the Workflow documentation to see the JSON schema for each step type. | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkflowDefinition = Initialize-WorkflowDefinition  -Start Send Email Test `
 -Steps {"Send Email":{"actionId":"sp:send-email","attributes":{"body":"This is a test","from":"sailpoint@sailpoint.com","recipientId.$":"$.identity.id","subject":"test"},"nextStep":"success","selectResult":null,"type":"ACTION"},"success":{"type":"success"}}
```

- Convert the resource to JSON
```powershell
$WorkflowDefinition | ConvertTo-JSON
```


[[Back to top]](#) 

