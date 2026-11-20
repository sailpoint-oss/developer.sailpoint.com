# BaseSettings

# BaseSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_enabled** | **bool** | Indicates whether the feature or configuration is enabled. | [optional] [default to False]
**cluster_id** | **str** | The identifier of the cluster associated with this configuration, if applicable. | [optional] 
\}

## Example

```python
from sailpoint.data_access_security.models.base_settings import BaseSettings

base_settings = BaseSettings(
is_enabled=True,
cluster_id='cluster-001'
)

```
[[Back to top]](#) 

