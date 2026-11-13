# Reminderescalationruleset

# Reminderescalationruleset

Reminder and escalation rules for one domain object type. At least one of `reminders`, `escalations`, or `fallback` must be set. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reminders** | [**[]Reminderescalationreminder**](reminderescalationreminder) | Independent reminder schedules. Every entry must use the same predicate, either `beforeDeadLine` or `activeAfter`. | [optional] [default to []]
**escalations** | [**[]Reminderescalationescalation**](reminderescalationescalation) | Independent escalations. Each entry has its own trigger. | [optional] [default to []]
**fallback** | [**Reminderescalationfallback**](reminderescalationfallback) |  | [optional] 
\}

## Example

```python
from sailpoint.reminder_escalations.models.reminderescalationruleset import Reminderescalationruleset

reminderescalationruleset = Reminderescalationruleset(
reminders=[
                    sailpoint.reminder_escalations.models.reminderescalationreminder.Reminderescalationreminder(
                        cron = '0 9 * * *', 
                        before_dead_line = '', 
                        active_after = '', 
                        template = 'cert-reminder-daily', 
                        max_firings = 5, )
                    ],
escalations=[
                    sailpoint.reminder_escalations.models.reminderescalationescalation.Reminderescalationescalation(
                        trigger = sailpoint.reminder_escalations.models.reminderescalationtrigger.Reminderescalationtrigger(
                            trigger_type = 'AFTER_REMINDER_COUNT', 
                            cron = '', 
                            before_dead_line = '', 
                            active_after = '', 
                            max_firings = 3, 
                            count = 3, 
                            delay = '', ), 
                        targets = [
                            sailpoint.reminder_escalations.models.reminderescalationtarget.Reminderescalationtarget(
                                target_type = 'MANAGER_OF', 
                                identity_id = '', )
                            ], 
                        template = 'cert-escalation-mgr', )
                    ],
fallback=sailpoint.reminder_escalations.models.reminderescalationfallback.Reminderescalationfallback(
                    targets = [
                        sailpoint.reminder_escalations.models.reminderescalationtarget.Reminderescalationtarget(
                            target_type = 'MANAGER_OF', 
                            identity_id = '', )
                        ], 
                    template = 'cert-escalation-fallback-admin', )
)

```
[[Back to top]](#) 

