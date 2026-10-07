# AccountAttributesChangedIdentity

# AccountAttributesChangedIdentity

The identity whose account attributes were updated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | DTO type of the identity whose account attributes were updated. | [required]
**id** | **str** | ID of the identity whose account attributes were updated. | [required]
**name** | **str** | Display name of the identity whose account attributes were updated. | [required]
\}

## Example

```python
from sailpoint.triggers.models.account_attributes_changed_identity import AccountAttributesChangedIdentity

account_attributes_changed_identity = AccountAttributesChangedIdentity(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20642',
name='Michael Michaels'
)

```
[[Back to top]](#) 

