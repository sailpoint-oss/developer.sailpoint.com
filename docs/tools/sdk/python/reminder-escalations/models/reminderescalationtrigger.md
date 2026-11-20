# Reminderescalationtrigger

# Reminderescalationtrigger

When an escalation fires. `triggerType` selects which fields apply.  * `ON_CRON` requires `cron` and exactly one of `beforeDeadLine` or `activeAfter`. `maxFirings` is optional. * `AFTER_REMINDER_COUNT` requires `count` and `delay`. The ruleset must also contain at least one reminder. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trigger_type** |  **Enum** [  'ON_CRON',    'AFTER_REMINDER_COUNT' ] | How this escalation decides when to fire. | [required]
**cron** | **str** | Five-field cron expression. Required when `triggerType` is `ON_CRON`. | [optional] [default to '']
**before_dead_line** | **str** | ISO-8601 duration relative to the deadline. Used when `triggerType` is `ON_CRON`. Mutually exclusive with `activeAfter`. | [optional] [default to '']
**active_after** | **str** | ISO-8601 duration relative to workflow start. Used when `triggerType` is `ON_CRON`. Mutually exclusive with `beforeDeadLine`. | [optional] [default to '']
**max_firings** | **int** | Maximum number of times an `ON_CRON` escalation fires. Null means no cap. | [optional] 
**count** | **int** | Reminder count for the current assignee. Required when `triggerType` is `AFTER_REMINDER_COUNT`. Null when `triggerType` is `ON_CRON`. | [optional] 
**delay** | **str** | ISO-8601 grace period before an `AFTER_REMINDER_COUNT` escalation fires. | [optional] [default to '']
\}

## Example

```python
from sailpoint.reminder_escalations.models.reminderescalationtrigger import Reminderescalationtrigger

reminderescalationtrigger = Reminderescalationtrigger(
trigger_type='AFTER_REMINDER_COUNT',
cron='',
before_dead_line='',
active_after='',
max_firings=3,
count=3,
delay=''
)

```
[[Back to top]](#) 

