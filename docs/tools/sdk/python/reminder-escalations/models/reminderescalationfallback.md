# Reminderescalationfallback

# Reminderescalationfallback

Recipients used when an escalation cannot be delivered to its configured targets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**targets** | [**[]Reminderescalationtarget**](reminderescalationtarget) | Last-resort recipients for this fallback. Each entry resolves to a manager, identity, governance group, entitlement owner, or source owner. At least one target is required. | [required]
**template** | **str** | Notification template key. | [required]
\}

## Example

```python
from sailpoint.reminder_escalations.models.reminderescalationfallback import Reminderescalationfallback

reminderescalationfallback = Reminderescalationfallback(
targets=[
                    sailpoint.reminder_escalations.models.reminderescalationtarget.Reminderescalationtarget(
                        target_type = 'MANAGER_OF', 
                        identity_id = '', )
                    ],
template='cert-escalation-fallback-admin'
)

```
[[Back to top]](#) 

