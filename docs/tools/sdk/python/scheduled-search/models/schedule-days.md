# ScheduleDays

# ScheduleDays


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **SelectorType** |  | [required]
**values** | **[]str** | The selected values.  | [required]
**interval** | **int** | The selected interval for RANGE selectors.  | [optional] 
\}

## Example

```python
from sailpoint.scheduled_search.models.schedule_days import ScheduleDays

schedule_days = ScheduleDays(
type='LIST',
values=[MON, WED],
interval=3
)

```
[[Back to top]](#) 

