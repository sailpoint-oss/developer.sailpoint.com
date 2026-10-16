# WorkflowExecutionHistory

# WorkflowExecutionHistory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Definition** | **SystemCollectionsHashtable** |  | [optional] 
**History** | **SystemCollectionsHashtable** |  | [optional] 
**Trigger** | **SystemCollectionsHashtable** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkflowExecutionHistory = Initialize-WorkflowExecutionHistory  -Definition null `
 -History null `
 -Trigger null
```

- Convert the resource to JSON
```powershell
$WorkflowExecutionHistory | ConvertTo-JSON
```


[[Back to top]](#) 

