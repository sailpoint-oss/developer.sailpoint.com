# MachineAccountRecommendation

# MachineAccountRecommendation

Machine account discovery recommendation for an account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Recommendation ID. | [optional] 
**account_id** | **str** | ID of the account the recommendation is for. | [optional] 
**source_id** | **str** | ID of the source the account belongs to. | [optional] 
**is_machine** | **bool** | Indicates whether the account is recommended as a machine account. | [optional] [default to False]
**explanation** | [**[]MachineAccountRecommendationExplanation**](machine-account-recommendation-explanation) | Reasons that contributed to the recommendation. | [optional] 
**created** | **datetime** | Date and time when the recommendation was created. | [optional] 
**recommendation** | **str** | Recommendation result. | [optional] 
**recommendation_type** | **str** | Type of recommendation. | [optional] 
**algorithm** | **str** | Algorithm that produced the recommendation. | [optional] 
\}

## Example

```python
from sailpoint.machine_account_recommendation.models.machine_account_recommendation import MachineAccountRecommendation

machine_account_recommendation = MachineAccountRecommendation(
id='2c9180835d2e5168015d32f890ca1581',
account_id='2c9180835d2e5168015d32f890ca1581',
source_id='2c9180835d2e5168015d32f890ca1581',
is_machine=True,
explanation=[
                    sailpoint.machine_account_recommendation.models.machine_account_recommendation_explanation.Machine Account Recommendation Explanation(
                        feature = 'high-privilege-grant', )
                    ],
created='2026-01-15T10:00Z',
recommendation='MACHINE',
recommendation_type='MACHINE_ACCOUNT_DISCOVERY',
algorithm='v1'
)

```
[[Back to top]](#) 

