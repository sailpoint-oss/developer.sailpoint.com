# Reminderescalationtenantconfig

# Reminderescalationtenantconfig

Persisted tenant-default reminder and escalation rules for one domain object type. The key is the authenticated tenant plus `domainObjectType`. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenant_id** | **str** | Tenant id taken from the authenticated request. | [required][readonly] 
**domain_object_type** |  **Enum** [  'PERSONAL_ACCESS_TOKEN',    'CERTIFICATION' ] | Domain object type this default applies to. | [required]
**rules** | [**Reminderescalationruleset**](reminderescalationruleset) |  | [required]
**schema_version** | **int** | Schema version assigned by the service. Clients do not set this field. | [required][readonly] 
**revision** | **int** | Optimistic-lock counter. Echo this value on update. | [required]
**created_at** | **datetime** | When this tenant default was created. | [required][readonly] 
**updated_at** | **datetime** | When this tenant default was last updated. | [required][readonly] 
\}

## Example

```python
from sailpoint.reminder_escalations.models.reminderescalationtenantconfig import Reminderescalationtenantconfig

reminderescalationtenantconfig = Reminderescalationtenantconfig(
tenant_id='2c918085-7d3a-4c3a-9f1e-0b6c8a1d2e3f',
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
                        template = 'cert-escalation-fallback-admin', ), ),
schema_version=1,
revision=1,
created_at='2026-10-28T17:00Z',
updated_at='2026-10-28T17:30Z'
)

```
[[Back to top]](#) 

