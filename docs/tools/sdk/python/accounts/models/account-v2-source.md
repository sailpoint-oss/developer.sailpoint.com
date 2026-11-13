# AccountV2Source

# AccountV2Source

The source this account belongs to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the source. | [optional] 
**type** |  **Enum** [  'SOURCE' ] | The DTO type of the source. | [optional] 
**name** | **str** | The display name of the source. | [optional] 
**authoritative** | **bool** | Indicates if this account is from an authoritative source. | [optional] [default to False]
**connection_type** | **str** | The connection type of the source this account is from. | [optional] 
\}

## Example

```python
from sailpoint.accounts.models.account_v2_source import AccountV2Source

account_v2_source = AccountV2Source(
id='2c9180835d2e5168015d32f890ca1581',
type='SOURCE',
name='Employees',
authoritative=False,
connection_type='direct'
)

```
[[Back to top]](#) 

