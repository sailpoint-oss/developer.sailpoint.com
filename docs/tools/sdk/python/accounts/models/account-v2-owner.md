# AccountV2Owner

# AccountV2Owner


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
from sailpoint.accounts.models.account_v2_owner import AccountV2Owner

account_v2_owner = AccountV2Owner(
id='2c918084660f45d6016617daa9210584',
type='IDENTITY',
name='John Doe',
state='ACTIVE'
)

```
[[Back to top]](#) 

