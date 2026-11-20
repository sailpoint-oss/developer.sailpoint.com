# MachineIdentityOwnerReference

# MachineIdentityOwnerReference

Reference to an owner of the machine identity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Owner's type. | [required]
**id** | **str** | Owner ID. | [required]
**name** | **str** | Owner's display name. | [required]
**is_primary** | **bool** | Indicates if this owner is the primary owner. | [optional] [default to False]
\}

## Example

```python
from sailpoint.triggers.models.machine_identity_owner_reference import MachineIdentityOwnerReference

machine_identity_owner_reference = MachineIdentityOwnerReference(
type='IDENTITY',
id='84d8c1b819144608b8b8bc3b84ddbb7b',
name='Jerrie admin3cf084',
is_primary=True
)

```
[[Back to top]](#) 

