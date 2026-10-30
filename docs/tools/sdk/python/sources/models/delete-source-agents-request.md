# DeleteSourceAgentsRequest

# DeleteSourceAgentsRequest

Datasets whose AI agents should be deleted from the source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset_ids** | **[]str** | IDs of the datasets to delete AI agents for. All AI agents from these datasets on the source are deleted. Must contain at least one ID, and IDs cannot be blank. | [required]
\}

## Example

```python
from sailpoint.sources.models.delete_source_agents_request import DeleteSourceAgentsRequest

delete_source_agents_request = DeleteSourceAgentsRequest(
dataset_ids=["datasetId12345","datasetId67890"]
)

```
[[Back to top]](#) 

