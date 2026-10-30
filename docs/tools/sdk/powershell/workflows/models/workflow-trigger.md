# WorkflowTrigger

# WorkflowTrigger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "EVENT",    "EXTERNAL",    "SCHEDULED",    "" ] | The trigger type | [required]
**DisplayName** | **String** | The trigger display name | [optional] 
**Attributes** | [**WorkflowTriggerAttributes**](workflow-trigger-attributes) |  | [required]

## Examples

- Prepare the resource
```powershell
$WorkflowTrigger = Initialize-WorkflowTrigger  -Type EVENT `
 -DisplayName null `
 -Attributes null
```

- Convert the resource to JSON
```powershell
$WorkflowTrigger | ConvertTo-JSON
```


[[Back to top]](#) 

