# AccountReference

# AccountReference

Information about the status of the entitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**native_identity** | **str** | The native identity for this account | [optional] 
**disabled** | **bool** | Indicates whether this account is currently disabled | [optional] [default to False]
**locked** | **bool** | Indicates whether this account is currently locked | [optional] [default to False]
**type** |  **Enum** [  'ACCOUNT' ] | The type of the Account Reference | [optional] 
**id** | **str** | The id associated with the account | [optional] 
**name** | **str** | The account name | [optional] 
**created** | **datetime** | When the account was created | [optional] 
**modified** | **datetime** | When the account was last modified | [optional] 
\}

## Example

```python
from sailpoint.gov_certification.models.account_reference import AccountReference

account_reference = AccountReference(
native_identity='CN=Alison Ferguson',
disabled=False,
locked=False,
type='ACCOUNT',
id='2c9180857182305e0171993737eb29e6',
name='Alison Ferguso',
created='2020-04-20T20:11:05.067Z',
modified='2020-05-20T18:57:16.987Z'
)

```
[[Back to top]](#) 

