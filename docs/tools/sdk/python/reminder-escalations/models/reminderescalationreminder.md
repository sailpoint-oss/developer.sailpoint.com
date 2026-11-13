# Reminderescalationreminder

# Reminderescalationreminder

One reminder schedule. Exactly one of `beforeDeadLine` or `activeAfter` is set. Every reminder in a ruleset must use the same predicate. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cron** | **str** | Five-field cron expression, evaluated in UTC. | [required]
**before_dead_line** | **str** | ISO-8601 duration. The reminder is active when `(deadline - now) <= beforeDeadLine`. A negative duration means the reminder starts after the deadline, for example `-P14D`. Mutually exclusive with `activeAfter`.  | [optional] [default to '']
**active_after** | **str** | ISO-8601 duration. The reminder is active when `(now - workflowStart) >= activeAfter`. Mutually exclusive with `beforeDeadLine`.  | [optional] [default to '']
**template** | **str** | Notification template key. | [required]
**max_firings** | **int** | Maximum number of times this reminder fires before it deactivates. Null means the reminder keeps firing while its predicate is active. | [optional] 
\}

## Example

```python
from sailpoint.reminder_escalations.models.reminderescalationreminder import Reminderescalationreminder

reminderescalationreminder = Reminderescalationreminder(
cron='0 9 * * *',
before_dead_line='',
active_after='',
template='cert-reminder-daily',
max_firings=5
)

```
[[Back to top]](#) 

