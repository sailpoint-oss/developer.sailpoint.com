# ScheduleHours

# ScheduleHours


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **SelectorType** |  | [required]
**values** | **[]str** | The selected values.  | [required]
**interval** | **int** | The selected interval for RANGE selectors.  | [optional] 
\}

## Example

```python
from sailpoint.sod_policies.models.schedule_hours import ScheduleHours

schedule_hours = ScheduleHours(
type='LIST',
values=[MON, WED],
interval=3
)

```
[[Back to top]](#) 

