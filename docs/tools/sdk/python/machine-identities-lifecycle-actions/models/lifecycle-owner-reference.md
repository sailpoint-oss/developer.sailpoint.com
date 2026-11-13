# LifecycleOwnerReference

# LifecycleOwnerReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY',    'WORKGROUP' ] | Owner reference type. | [optional] 
**id** | **str** | Identifier of the owner. | [optional] 
**name** | **str** | Display name of the owner. | [optional] 
\}

## Example

```python
from sailpoint.machine_identities_lifecycle_actions.models.lifecycle_owner_reference import LifecycleOwnerReference

lifecycle_owner_reference = LifecycleOwnerReference(
type='IDENTITY',
id='2c9180858082150f0180893dbaf44201',
name='Pat Manager'
)

```
[[Back to top]](#) 

