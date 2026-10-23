# ApplicationDiscoveryRequest

# ApplicationDiscoveryRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset_ids** | **[]str** | List of dataset Ids to discover applications | [required]
\}

## Example

```python
from sailpoint.application_discovery.models.application_discovery_request import ApplicationDiscoveryRequest

application_discovery_request = ApplicationDiscoveryRequest(
dataset_ids=[
                    'source:datasetId12345'
                    ]
)

```
[[Back to top]](#) 

