# Machineidentityagentdiscoveredcounts

# Machineidentityagentdiscoveredcounts


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Number of machine identities created within the window. | [optional] 
**window_days** | **int** | Length of the window, in days. | [optional] 
**var_from** | **datetime** | Start of the window, in UTC, and the exact cutoff used for `count`. Identities created at or after this time are included. | [optional] 
\}

## Example

```python
from sailpoint.machine_identities.models.machineidentityagentdiscoveredcounts import Machineidentityagentdiscoveredcounts

machineidentityagentdiscoveredcounts = Machineidentityagentdiscoveredcounts(
count=8,
window_days=30,
var_from='2026-10-17T09:58:52.985613Z'
)

```
[[Back to top]](#) 

