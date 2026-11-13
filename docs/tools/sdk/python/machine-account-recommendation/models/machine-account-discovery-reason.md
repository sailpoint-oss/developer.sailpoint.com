# MachineAccountDiscoveryReason

# MachineAccountDiscoveryReason

A reason that machine account discovery can report, with its readable message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Reason ID. | [optional] 
**message** | **str** | Readable message for the reason, in the requested language. | [optional] 
\}

## Example

```python
from sailpoint.machine_account_recommendation.models.machine_account_discovery_reason import MachineAccountDiscoveryReason

machine_account_discovery_reason = MachineAccountDiscoveryReason(
id='high-privilege-grant',
message='Account was granted high-privilege access.'
)

```
[[Back to top]](#) 

