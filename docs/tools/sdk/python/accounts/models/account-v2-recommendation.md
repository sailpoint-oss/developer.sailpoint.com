# AccountV2Recommendation

# AccountV2Recommendation

Indicates that the account is currently classified as one type but is recommended to be a different one.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'HUMAN',    'MACHINE' ] | Recommended type of account. | [optional] 
**method** |  **Enum** [  'DISCOVERY',    'SOURCE',    'CRITERIA' ] | Method used to produce the recommendation. DISCOVERY - suggested by AI, SOURCE - the account comes from a source flagged as containing machine accounts, CRITERIA - the account satisfies classification criteria. | [optional] 
**machine_likelihood** | **int** | Ranked likelihood that this account is a machine account. Present when machine-account recommendation enrichment is available for the tenant. | [optional] 
**explanation** | **[]str** | Reasons supporting the machine-account recommendation. Never null; an empty array when no explanation is available. | [optional] 
\}

## Example

```python
from sailpoint.accounts.models.account_v2_recommendation import AccountV2Recommendation

account_v2_recommendation = AccountV2Recommendation(
type='MACHINE',
method='DISCOVERY',
machine_likelihood=3,
explanation=["AD_GMSA"]
)

```
[[Back to top]](#) 

