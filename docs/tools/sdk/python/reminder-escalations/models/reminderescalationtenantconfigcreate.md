# Reminderescalationtenantconfigcreate

# Reminderescalationtenantconfigcreate

Body for creating a tenant-default ruleset. The tenant comes from the authenticated request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain_object_type** |  **Enum** [  'PERSONAL_ACCESS_TOKEN',    'CERTIFICATION' ] | Domain object type to create a default for. | [required]
**rules** | [**Reminderescalationruleset**](reminderescalationruleset) |  | [required]
\}

## Example

```python
from sailpoint.reminder_escalations.models.reminderescalationtenantconfigcreate import Reminderescalationtenantconfigcreate

reminderescalationtenantconfigcreate = Reminderescalationtenantconfigcreate(
domain_object_type='CERTIFICATION',
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
                        template = 'cert-escalation-fallback-admin', ), )
)

```
[[Back to top]](#) 

