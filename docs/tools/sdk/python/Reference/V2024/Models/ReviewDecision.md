---
id: v2024-review-decision
title: ReviewDecision
pagination_label: ReviewDecision
sidebar_label: ReviewDecision
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ReviewDecision', 'V2024ReviewDecision'] 
slug: /tools/sdk/python/v2024/models/review-decision
tags: ['SDK', 'Software Development Kit', 'ReviewDecision', 'V2024ReviewDecision']
---

# ReviewDecision


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The id of the review decision | [required]
**decision** | [**CertificationDecision**](certification-decision) |  | [required]
**proposed_end_date** | **datetime** | The date at which a user's access should be taken away. Should only be set for `REVOKE` decisions. | [optional] 
**bulk** | **bool** | Indicates whether decision should be marked as part of a larger bulk decision | [required]
**recommendation** | [**ReviewRecommendation**](review-recommendation) |  | [optional] 
**comments** | **str** | Comments recorded when the decision was made | [optional] 
}

## Example

```python
from sailpoint.v2024.models.review_decision import ReviewDecision

review_decision = ReviewDecision(
id='ef38f94347e94562b5bb8424a56397d8',
decision='APPROVE',
proposed_end_date='2017-07-11T18:45:37.098Z',
bulk=True,
recommendation=sailpoint.v2024.models.review_recommendation.ReviewRecommendation(
                    recommendation = '', 
                    reasons = [Reason 1, Reason 2], 
                    timestamp = '2020-06-01T13:49:37.385Z', ),
comments='This user no longer needs access to this source'
)

```
[[Back to top]](#) 

