# SourceDataset

# SourceDataset

Dataset instance for a source. The dataset `id` is server-generated from `name` on create (`customer:` plus a normalized form of `name`); any client-supplied `id` is ignored. `aggregationEnabled` may always be updated. `name`, `description`, and `resources` can be changed only when the connector has the `supportDatasetCreation` label.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Dataset identifier. Server-generated on create. | [optional] [readonly] 
**name** | **str** | Display name of the dataset. Required on create. | [optional] 
**description** | **str** | Description of the dataset. | [optional] 
**aggregation_enabled** | **bool** | Whether aggregation is enabled for this dataset on the source. | [optional] [default to False]
**resources** | [**[]SourceDatasetResourceReference**](source-dataset-resource-reference) | Simplified resource references associated with this dataset. | [optional] 
\}

## Example

```python
from sailpoint.sources.models.source_dataset import SourceDataset

source_dataset = SourceDataset(
id='cmdb-servicenow:applications',
name='Applications',
description='CMDB application records for this source.',
aggregation_enabled=True,
resources=[
                    sailpoint.sources.models.source_dataset_resource_reference.Source Dataset Resource Reference(
                        id = 'aws:iam-role', 
                        name = 'Role', 
                        type = 'std:resource', )
                    ]
)

```
[[Back to top]](#) 

