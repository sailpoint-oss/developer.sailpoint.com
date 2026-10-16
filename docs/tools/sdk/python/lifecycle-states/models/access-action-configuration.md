# AccessActionConfiguration

# AccessActionConfiguration

This is used for access configuration for a lifecycle state

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**remove_all_access_enabled** | **bool** | If true, then all accesses are marked for removal. | [optional] [default to False]
\}

## Example

```python
from sailpoint.lifecycle_states.models.access_action_configuration import AccessActionConfiguration

access_action_configuration = AccessActionConfiguration(
remove_all_access_enabled=True
)

```
[[Back to top]](#) 

