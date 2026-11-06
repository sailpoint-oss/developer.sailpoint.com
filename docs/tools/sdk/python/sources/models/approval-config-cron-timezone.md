# ApprovalConfigCronTimezone

# ApprovalConfigCronTimezone

Timezone configuration for cron schedules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Timezone location for cron schedules. | [optional] 
**offset** | **str** | Timezone offset for cron schedules. | [optional] 
\}

## Example

```python
from sailpoint.sources.models.approval_config_cron_timezone import ApprovalConfigCronTimezone

approval_config_cron_timezone = ApprovalConfigCronTimezone(
location='America/New_York',
offset=''
)

```
[[Back to top]](#) 

