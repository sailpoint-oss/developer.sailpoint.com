# ScheduleMonths

# ScheduleMonths


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **SelectorType** |  | [required]
**values** | **[]str** | The selected values.  | [required]
**interval** | **int** | The selected interval for RANGE selectors.  | [optional] 
\}

## Example

```python
from sailpoint.sod_policies.models.schedule_months import ScheduleMonths

schedule_months = ScheduleMonths(
type='LIST',
values=[MON, WED],
interval=3
)

```
[[Back to top]](#) 

