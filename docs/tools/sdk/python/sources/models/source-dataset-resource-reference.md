# SourceDatasetResourceReference

# SourceDatasetResourceReference

Simplified resource reference associated with a source dataset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource identifier. | [optional] 
**name** | **str** | Display name of the resource. | [optional] 
**type** | **str** | Resource type from source schema config. | [optional] 
\}

## Example

```python
from sailpoint.sources.models.source_dataset_resource_reference import SourceDatasetResourceReference

source_dataset_resource_reference = SourceDatasetResourceReference(
id='aws:iam-role',
name='Role',
type='std:resource'
)

```
[[Back to top]](#) 

