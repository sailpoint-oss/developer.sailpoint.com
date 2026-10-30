# DeleteSourceAgentsRequest

# DeleteSourceAgentsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DatasetIds** | **[]String** | IDs of the datasets to delete AI agents for. All AI agents from these datasets on the source are deleted. Must contain at least one ID, and IDs cannot be blank. | [required]

## Examples

- Prepare the resource
```powershell
$DeleteSourceAgentsRequest = Initialize-DeleteSourceAgentsRequest  -DatasetIds ["datasetId12345","datasetId67890"]
```

- Convert the resource to JSON
```powershell
$DeleteSourceAgentsRequest | ConvertTo-JSON
```


[[Back to top]](#) 

