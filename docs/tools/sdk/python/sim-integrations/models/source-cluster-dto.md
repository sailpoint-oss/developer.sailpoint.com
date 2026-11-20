# SourceClusterDto

# SourceClusterDto

Source cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'CLUSTER' ] | Source cluster DTO type. | [optional] 
**id** | **str** | Source cluster ID. | [optional] 
**name** | **str** | Source cluster display name. | [optional] 
\}

## Example

```python
from sailpoint.sim_integrations.models.source_cluster_dto import SourceClusterDto

source_cluster_dto = SourceClusterDto(
type='CLUSTER',
id='2c9180847a7fccdd017aa5896f9f4f6f',
name='Training VA'
)

```
[[Back to top]](#) 

