# Responseactioncreaterequest

# Responseactioncreaterequest

Request body for creating a response action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_type** |  **Enum** [  'DISABLE_IDENTITY',    'DISABLE_ACCOUNT' ] | Which response action to run. | [required]
**identity_type** |  **Enum** [  'HUMAN' ] | Subject type of the response action. v1 supports HUMAN. | [required]
**identity_id** | **str** | ISC identity id, resolved by the caller from a prior intelligence query. | [required]
**account_ids** | **[]str** | One or more account ids. Required for DISABLE_ACCOUNT (1-50 after trim/dedupe); must be omitted for DISABLE_IDENTITY. A single account is sent as a one-element array.  | [optional] 
**context** | [**Responseactioncontext**](responseactioncontext) |  | [required]
\}

## Example

```python
from sailpoint.intelligence.models.responseactioncreaterequest import Responseactioncreaterequest

responseactioncreaterequest = Responseactioncreaterequest(
action_type='DISABLE_ACCOUNT',
identity_type='HUMAN',
identity_id='2c918085842e69ae018428c919680149',
account_ids=["2c918085abc000000000000000000001"],
context=sailpoint.intelligence.models.responseactioncontext.Responseactioncontext(
                    source = 'CROWDSTRIKE', 
                    external_alert_id = 'CS-FALCON-12345', 
                    reason = 'Contain compromised account', 
                    operator = 'soc-analyst@customer.com', )
)

```
[[Back to top]](#) 

