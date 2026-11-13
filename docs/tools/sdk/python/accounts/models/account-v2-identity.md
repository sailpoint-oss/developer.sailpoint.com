# AccountV2Identity

# AccountV2Identity

An identity reference associated with this account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the identity. | [optional] 
**type** |  **Enum** [  'IDENTITY' ] | The DTO type of the identity. | [optional] 
**name** | **str** | The display name of the identity. | [optional] 
**state** | **str** | The identity state. | [optional] 
\}

## Example

```python
from sailpoint.accounts.models.account_v2_identity import AccountV2Identity

account_v2_identity = AccountV2Identity(
id='2c918084660f45d6016617daa9210584',
type='IDENTITY',
name='John Doe',
state='ACTIVE'
)

```
[[Back to top]](#) 

