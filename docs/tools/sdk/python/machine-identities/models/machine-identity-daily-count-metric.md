# MachineIdentityDailyCountMetric

# MachineIdentityDailyCountMetric

Counts for one entity type and subtype on a single day.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_type** |  **Enum** [  'machine_identity',    'machine_account',    'capability',    'credential' ] | Entity type the counts apply to. | [optional] 
**sub_type** | **str** | Subtype the counts apply to. `UNKNOWN` is used for entities that have no subtype. | [optional] 
**total_count** | **int** | Number of entities of this type and subtype that existed on the day. | [optional] 
**created_count** | **int** | Number of entities of this type and subtype created on the day. | [optional] 
**created_count30d** | **int** | Number of entities of this type and subtype created in the 30 days ending on the day. | [optional] 
\}

## Example

```python
from sailpoint.machine_identities.models.machine_identity_daily_count_metric import MachineIdentityDailyCountMetric

machine_identity_daily_count_metric = MachineIdentityDailyCountMetric(
entity_type='machine_identity',
sub_type='AI Agent',
total_count=412,
created_count=3,
created_count30d=37
)

```
[[Back to top]](#) 

