# Schedule

# Schedule

The schedule information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **ScheduleType** |  | [required]
**months** | [**ScheduleMonths**](schedule-months) |  | [optional] 
**days** | [**ScheduleDays**](schedule-days) |  | [optional] 
**hours** | [**ScheduleHours**](schedule-hours) |  | [required]
**expiration** | **datetime** | A date-time in ISO-8601 format | [optional] 
**time_zone_id** | **str** | The canonical TZ identifier the schedule will run in (ex. America/New_York).  If no timezone is specified, the org's default timezone is used. | [optional] 
\}

## Example

```python
from sailpoint.scheduled_search.models.schedule import Schedule

schedule = Schedule(
type='WEEKLY',
months=,
days=,
hours=,
expiration='2018-06-25T20:22:28.104Z',
time_zone_id='America/Chicago'
)

```
[[Back to top]](#) 

