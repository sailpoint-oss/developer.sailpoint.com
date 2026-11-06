# MachineIdentityDiscoveredCounts

# MachineIdentityDiscoveredCounts

Number of machine identities discovered within a recent time window.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Number of machine identities created within the window. | [optional] 
**window_days** | **int** | Length of the window, in days. | [optional] 
\}

## Example

```python
from sailpoint.machine_identities.models.machine_identity_discovered_counts import MachineIdentityDiscoveredCounts

machine_identity_discovered_counts = MachineIdentityDiscoveredCounts(
count=8,
window_days=30
)

```
[[Back to top]](#) 

