# IdentityReference2

# IdentityReference2

Details about the identity correlated with the account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the identity that is correlated with this account. | [required]
**name** | **str** | The name of the identity that is correlated with this account. | [required]
**alias** | **str** | The alias of the identity. | [required]
**email** | **str** | The email of the identity. | [required]
\}

## Example

```python
from sailpoint.triggers.models.identity_reference2 import IdentityReference2

identity_reference2 = IdentityReference2(
id='ee769173319b41d19ccec6c235423237b',
name='john.doe',
alias='jdoe',
email='john.doe@email.com'
)

```
[[Back to top]](#) 

