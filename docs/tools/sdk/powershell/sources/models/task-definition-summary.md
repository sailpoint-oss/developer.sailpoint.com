# TaskDefinitionSummary

# TaskDefinitionSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | System-generated unique ID of the TaskDefinition | [required]
**UniqueName** | **String** | Name of the TaskDefinition | [required]
**Description** | **String** | Description of the TaskDefinition | [required]
**ParentName** | **String** | Name of the parent of the TaskDefinition | [required]
**Executor** | **String** | Executor of the TaskDefinition | [required]
**Arguments** | **map[string]AnyType** | Formal parameters of the TaskDefinition, without values | [required]

## Examples

- Prepare the resource
```powershell
$TaskDefinitionSummary = Initialize-TaskDefinitionSummary  -Id 2c91808475b4334b0175e1dff64b63c5 `
 -UniqueName Cloud Account Aggregation `
 -Description Aggregates from the specified application. `
 -ParentName Cloud Account Aggregation `
 -Executor sailpoint.task.ServiceTaskExecutor `
 -Arguments {"mantisExecutor":"com.sailpoint.mantis.sources.task.AccountAggregationTask","eventClassesCsv":"sailpoint.thunderbolt.events.AggregationEvents","serviceClass":"sailpoint.thunderbolt.service.AggregationService","serviceMethod":"accountAggregationTask"}
```

- Convert the resource to JSON
```powershell
$TaskDefinitionSummary | ConvertTo-JSON
```


[[Back to top]](#) 

