# AccountAllOfRecommendation

# AccountAllOfRecommendation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'HUMAN',    'MACHINE' ] | Recommended type of account. | [required]
**method** |  **Enum** [  'DISCOVERY',    'SOURCE',    'CRITERIA' ] | Method used to produce the recommendation. DISCOVERY - suggested by AI, SOURCE - the account comes from a source flagged as containing machine accounts, CRITERIA - the account satisfies classification criteria. | [required]
\}

## Example

```python
from sailpoint.accounts.models.account_all_of_recommendation import AccountAllOfRecommendation

account_all_of_recommendation = AccountAllOfRecommendation(
type='MACHINE',
method='DISCOVERY'
)

```
[[Back to top]](#) 

