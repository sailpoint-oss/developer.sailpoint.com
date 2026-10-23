# ReviewDecision

# ReviewDecision


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The id of the Certification Item being decided on | [required]
**decision** | **CertificationDecision** |  | [required]
**proposed_end_date** | **datetime** | The date at which a user's access should be taken away. Should only be set for `REVOKE` decisions. | [optional] 
**recommendation** | [**ReviewRecommendation**](review-recommendation) |  | [optional] 
**comments** | **str** | Comments recorded when the decision was made | [optional] 
\}

## Example

```python
from sailpoint.gov_certification.models.review_decision import ReviewDecision

review_decision = ReviewDecision(
id='ef38f943-47e9-4562-b5bb-8424a56397d8',
decision='APPROVED',
proposed_end_date='2017-07-11T18:45:37.098Z',
recommendation=sailpoint.gov_certification.models.review_recommendation.ReviewRecommendation(
                    recommendation = 'APPROVE', 
                    reasons = ["Reason 1","Reason 2"], 
                    timestamp = '2020-06-01T13:49:37.385Z', ),
comments='This user no longer needs access to this source'
)

```
[[Back to top]](#) 

