# SubtypeTargetSummary

# SubtypeTargetSummary

One row per connector type (`CONNECTOR`) or per source-tier subtype (`SOURCE`) from `GET /source-subtypes/v2/targets`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_type** | **SubtypeTargetType** |  | [optional] 
**target_id** | **str** | Scope key. Connector type for `CONNECTOR`. Source id for `SOURCE`. | [optional] 
**target_name** | **str** | Display label. Never null; falls back to `targetId`. | [optional] 
**subtype_count** | **int** | Number of subtypes in this target group. | [optional] 
**source_count** | **int** | Number of sources of this connector type for a `CONNECTOR` row. `1` on a `SOURCE` row. Sortable. Not filterable. | [optional] 
**last_modified** | **datetime** | Latest `modified` timestamp in the `targetId` group for `CONNECTOR`, or that subtype row's `modified` for `SOURCE`. Not filterable or sortable. | [optional] [readonly] 
\}

## Example

```python
from sailpoint.machine_account_subtypes.models.subtype_target_summary import SubtypeTargetSummary

subtype_target_summary = SubtypeTargetSummary(
target_type='CONNECTOR',
target_id='JDBC',
target_name='JDBC',
subtype_count=3,
source_count=12,
last_modified='2026-08-18T12:00Z'
)

```
[[Back to top]](#) 

