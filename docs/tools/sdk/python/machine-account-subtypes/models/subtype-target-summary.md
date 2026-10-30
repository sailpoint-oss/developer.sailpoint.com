# SubtypeTargetSummary

# SubtypeTargetSummary

Summary of the subtypes defined for one target. There is one item per connector type for `CONNECTOR` targets, and one item per source subtype for `SOURCE` targets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_type** |  **Enum** [  'SOURCE',    'CONNECTOR' ] | Tier of the target. | [optional] 
**target_id** | **str** | Connector type for a `CONNECTOR` target, or source ID for a `SOURCE` target. | [optional] 
**target_name** | **str** | Display name of the target. Falls back to `targetId` when no name is stored. | [optional] 
**subtype_count** | **int** | Number of subtypes defined for the target. | [optional] 
**source_count** | **int** | Number of sources the target's subtypes apply to. | [optional] 
**last_modified** | **datetime** | Most recent modification time across the target's subtypes. | [optional] 
\}

## Example

```python
from sailpoint.machine_account_subtypes.models.subtype_target_summary import SubtypeTargetSummary

subtype_target_summary = SubtypeTargetSummary(
target_type='CONNECTOR',
target_id='active-directory',
target_name='Active Directory',
subtype_count=3,
source_count=12,
last_modified='2026-07-28T16:13:42.750Z'
)

```
[[Back to top]](#) 

