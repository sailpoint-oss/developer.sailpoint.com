# AccessDuration

# AccessDuration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **int** | The numeric value representing the amount of time, which is defined in the **timeUnit**. | [optional] 
**time_unit** |  **Enum** [  'HOURS',    'DAYS',    'WEEKS',    'MONTHS' ] | The unit of time that corresponds to the **value**. It defines the scale of the time period. | [optional] 
\}

## Example

```python
from sailpoint.dimensions.models.access_duration import AccessDuration

access_duration = AccessDuration(
value=6,
time_unit='MONTHS'
)

```
[[Back to top]](#) 

