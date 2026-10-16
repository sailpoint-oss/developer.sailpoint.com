# SedBatchStats

# SedBatchStats

Sed Batch Stats

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_complete** | **bool** | batch complete | [optional] [default to False]
**batch_id** | **str** | batch Id | [optional] 
**discovered_count** | **int** | discovered count | [optional] 
**discovery_complete** | **bool** | discovery complete | [optional] [default to False]
**processed_count** | **int** | processed count | [optional] 
\}

## Example

```python
from sailpoint.suggested_entitlement_description.models.sed_batch_stats import SedBatchStats

sed_batch_stats = SedBatchStats(
batch_complete=True,
batch_id='016629d1-1d25-463f-97f3-0c6686846650',
discovered_count=100,
discovery_complete=True,
processed_count=100
)

```
[[Back to top]](#) 

