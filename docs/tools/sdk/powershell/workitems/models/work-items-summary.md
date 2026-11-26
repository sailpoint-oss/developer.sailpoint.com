# WorkItemsSummary

# WorkItemsSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Open** | **Int32** | The count of open work items | [optional] 
**Completed** | **Int32** | The count of completed work items | [optional] 
**Total** | **Int32** | The count of total work items | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkItemsSummary = Initialize-WorkItemsSummary  -Open 29 `
 -Completed 1 `
 -Total 30
```

- Convert the resource to JSON
```powershell
$WorkItemsSummary | ConvertTo-JSON
```


[[Back to top]](#) 

