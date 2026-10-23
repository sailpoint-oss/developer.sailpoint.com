# AccountCorrelatedIdentity

# AccountCorrelatedIdentity

Identity the account is correlated with.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | DTO type of the identity the account is correlated with. | [required]
**id** | **str** | ID of the identity the account is correlated with. | [required]
**name** | **str** | Display name of the identity the account is correlated with. | [required]
\}

## Example

```python
from sailpoint.triggers.models.account_correlated_identity import AccountCorrelatedIdentity

account_correlated_identity = AccountCorrelatedIdentity(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20642',
name='Michael Michaels'
)

```
[[Back to top]](#) 

