# AccountV2CorrelatedEntity

# AccountV2CorrelatedEntity

A correlated identity or machine-identity associated with this account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **DtoType** |  | [optional] 
**id** | **str** | The unique ID of the correlated entity. | [optional] 
**name** | **str** | The display name of the correlated entity. | [optional] 
**state** | **str** | The identity state. Populated for IDENTITY entries only. | [optional] 
\}

## Example

```python
from sailpoint.accounts.models.account_v2_correlated_entity import AccountV2CorrelatedEntity

account_v2_correlated_entity = AccountV2CorrelatedEntity(
type='IDENTITY',
id='2c918084660f45d6016617daa9210584',
name='John Doe',
state='ACTIVE'
)

```
[[Back to top]](#) 

