# MachineIdentitySourceReference

# MachineIdentitySourceReference

Reference to a source of entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Source Type. | [required]
**id** | **str** | Unique identifier. | [required]
**name** | **str** | Display name. | [required]
\}

## Example

```python
from sailpoint.triggers.models.machine_identity_source_reference import MachineIdentitySourceReference

machine_identity_source_reference = MachineIdentitySourceReference(
type='SOURCE',
id='c0201251a6ce4d268aba536cdd60a7f2',
name='IdentityNow'
)

```
[[Back to top]](#) 

