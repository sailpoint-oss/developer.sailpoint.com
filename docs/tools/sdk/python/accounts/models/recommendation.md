# Recommendation

# Recommendation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'HUMAN',    'MACHINE' ] | Recommended type of account. | [required]
**method** |  **Enum** [  'DISCOVERY',    'SOURCE',    'CRITERIA' ] | Method used to produce the recommendation. DISCOVERY - suggested by AI, SOURCE - the account comes from a source flagged as containing machine accounts, CRITERIA - the account satisfies classification criteria. | [required]
\}

## Example

```python
from sailpoint.accounts.models.recommendation import Recommendation

recommendation = Recommendation(
type='MACHINE',
method='DISCOVERY'
)

```
[[Back to top]](#) 

