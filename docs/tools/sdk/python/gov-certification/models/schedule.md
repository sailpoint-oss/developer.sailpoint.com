# Schedule

# Schedule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'DAILY',    'WEEKLY',    'MONTHLY',    'ANNUALLY',    'CALENDAR' ] | Determines the overall schedule cadence. In general, all time period fields smaller than the chosen type can be configured. For example, a DAILY schedule can have 'hours' set, but not 'days'; a WEEKLY schedule can have both 'hours' and 'days' set. | [required]
**months** | [**Selector**](selector) |  | [optional] 
**days** | [**Selector**](selector) |  | [optional] 
**hours** | [**Selector**](selector) |  | [optional] 
**expiration** | **datetime** | Specifies the time after which this schedule will no longer occur. | [optional] 
**time_zone_id** | **str** | The time zone to use when running the schedule. For instance, if the schedule is scheduled to run at 1AM, and this field is set to \"CST\", the schedule will run at 1AM CST. | [optional] 
\}

## Example

```python
from sailpoint.gov_certification.models.schedule import Schedule

schedule = Schedule(
type='DAILY',
months=sailpoint.gov_certification.models.selector.Selector(
                    type = 'LIST', 
                    values = ["1","2","3"], 
                    interval = 2, ),
days=sailpoint.gov_certification.models.selector.Selector(
                    type = 'LIST', 
                    values = ["1","2","3"], 
                    interval = 2, ),
hours=sailpoint.gov_certification.models.selector.Selector(
                    type = 'LIST', 
                    values = ["1","2","3"], 
                    interval = 2, ),
expiration='2025-09-15T16:00Z',
time_zone_id='America/Chicago'
)

```
[[Back to top]](#) 

