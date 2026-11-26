# DataClassificationSettings

# DataClassificationSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_enabled** | **bool** | Indicates whether the feature or configuration is enabled. | [optional] [default to False]
**cluster_id** | **str** | The identifier of the cluster associated with this configuration, if applicable. | [optional] 
\}

## Example

```python
from sailpoint.data_access_security.models.data_classification_settings import DataClassificationSettings

data_classification_settings = DataClassificationSettings(
is_enabled=True,
cluster_id='cluster-001'
)

```
[[Back to top]](#) 

