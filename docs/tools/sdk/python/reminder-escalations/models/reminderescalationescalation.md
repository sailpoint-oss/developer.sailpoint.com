# Reminderescalationescalation

# Reminderescalationescalation

One escalation. Escalations in a ruleset are independent of each other.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trigger** | [**Reminderescalationtrigger**](reminderescalationtrigger) |  | [required]
**targets** | [**[]Reminderescalationtarget**](reminderescalationtarget) |  | [required]
**template** | **str** | Notification template key. | [required]
\}

## Example

```python
from sailpoint.reminder_escalations.models.reminderescalationescalation import Reminderescalationescalation

reminderescalationescalation = Reminderescalationescalation(
trigger=sailpoint.reminder_escalations.models.reminderescalationtrigger.Reminderescalationtrigger(
                    trigger_type = 'AFTER_REMINDER_COUNT', 
                    cron = '', 
                    before_dead_line = '', 
                    active_after = '', 
                    max_firings = 3, 
                    count = 3, 
                    delay = '', ),
targets=[
                    sailpoint.reminder_escalations.models.reminderescalationtarget.Reminderescalationtarget(
                        target_type = 'MANAGER_OF', 
                        identity_id = '', )
                    ],
template='cert-escalation-mgr'
)

```
[[Back to top]](#) 

