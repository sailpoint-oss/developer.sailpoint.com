# Reminderescalationtenantconfigupdate

# Reminderescalationtenantconfigupdate

Body for replacing a tenant-default ruleset. `domainObjectType` comes from the path. `revision` must match the current stored value. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rules** | [**Reminderescalationruleset**](reminderescalationruleset) |  | [required]
**revision** | **int** | Revision from a prior read of this ruleset. | [required]
\}

## Example

```python
from sailpoint.reminder_escalations.models.reminderescalationtenantconfigupdate import Reminderescalationtenantconfigupdate

reminderescalationtenantconfigupdate = Reminderescalationtenantconfigupdate(
rules=sailpoint.reminder_escalations.models.reminderescalationruleset.Reminderescalationruleset(
                    reminders = [
                        sailpoint.reminder_escalations.models.reminderescalationreminder.Reminderescalationreminder(
                            cron = '0 9 * * *', 
                            before_dead_line = '', 
                            active_after = '', 
                            template = 'cert-reminder-daily', 
                            max_firings = 5, )
                        ], 
                    escalations = [
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
                    fallback = sailpoint.reminder_escalations.models.reminderescalationfallback.Reminderescalationfallback(
                        targets = [
                            sailpoint.reminder_escalations.models.reminderescalationtarget.Reminderescalationtarget(
                                target_type = 'MANAGER_OF', 
                                identity_id = '', )
                            ], 
                        template = 'cert-escalation-fallback-admin', ), ),
revision=1
)

```
[[Back to top]](#) 

