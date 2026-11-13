# AccountUncorrelatedSource

# AccountUncorrelatedSource

The source the accounts are uncorrelated from.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'SOURCE' ] | The DTO type of the source the accounts are uncorrelated from. | [required]
**id** | **str** | The ID of the source the accounts are uncorrelated from. | [required]
**name** | **str** | Display name of the source the accounts are uncorrelated from. | [required]
\}

## Example

```python
from sailpoint.triggers.models.account_uncorrelated_source import AccountUncorrelatedSource

account_uncorrelated_source = AccountUncorrelatedSource(
type='SOURCE',
id='2c6180835d191a86015d28455b4b231b',
name='Corporate Directory'
)

```
[[Back to top]](#) 

