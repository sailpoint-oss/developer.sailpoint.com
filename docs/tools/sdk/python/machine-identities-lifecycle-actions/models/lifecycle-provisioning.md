# LifecycleProvisioning

# LifecycleProvisioning

Provisioning execution window for the lifecycle request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **Lifecycleprovisioningstatus** |  | [optional] 
**started** | **datetime** | Time when provisioning started (ISO-8601). | [optional] 
**ended** | **datetime** | Time when provisioning ended (ISO-8601). | [optional] 
\}

## Example

```python
from sailpoint.machine_identities_lifecycle_actions.models.lifecycle_provisioning import LifecycleProvisioning

lifecycle_provisioning = LifecycleProvisioning(
status='NOT_STARTED',
started='2026-05-26T19:05Z',
ended='2026-05-26T19:10Z'
)

```
[[Back to top]](#) 

