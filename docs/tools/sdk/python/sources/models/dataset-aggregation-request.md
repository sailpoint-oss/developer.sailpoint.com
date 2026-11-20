# DatasetAggregationRequest

# DatasetAggregationRequest

Optional request body for starting a dataset aggregation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **map[string]object** | Connector-specific aggregation configuration. | [optional] 
\}

## Example

```python
from sailpoint.sources.models.dataset_aggregation_request import DatasetAggregationRequest

dataset_aggregation_request = DatasetAggregationRequest(
config={"region":"us-east-1"}
)

```
[[Back to top]](#) 

