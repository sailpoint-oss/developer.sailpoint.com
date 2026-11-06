# IdentityAttributesChangedIdentity

# IdentityAttributesChangedIdentity

Identity whose attributes changed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | DTO type of identity whose attributes changed. | [required]
**id** | **str** | ID of identity whose attributes changed. | [required]
**name** | **str** | Display name of identity whose attributes changed. | [required]
\}

## Example

```python
from sailpoint.triggers.models.identity_attributes_changed_identity import IdentityAttributesChangedIdentity

identity_attributes_changed_identity = IdentityAttributesChangedIdentity(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20642',
name='Michael Michaels'
)

```
[[Back to top]](#) 

