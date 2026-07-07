---
id: reviewdecision
title: Reviewdecision
pagination_label: Reviewdecision
sidebar_label: Reviewdecision
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Reviewdecision', 'Reviewdecision'] 
slug: /tools/sdk/python/certifications/models/reviewdecision
tags: ['SDK', 'Software Development Kit', 'Reviewdecision', 'Reviewdecision']
---

# Reviewdecision


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The id of the review decision | [required]
**decision** | [**Certificationdecision**](certificationdecision) |  | [required]
**proposed_end_date** | **datetime** | The date at which a user's access should be taken away. Should only be set for `REVOKE` decisions. | [optional] 
**bulk** | **bool** | Indicates whether decision should be marked as part of a larger bulk decision | [required]
**recommendation** | [**Reviewrecommendation**](reviewrecommendation) |  | [optional] 
**comments** | **str** | Comments recorded when the decision was made | [optional] 
}

## Example

```python
from sailpoint.certifications.models.reviewdecision import Reviewdecision

reviewdecision = Reviewdecision(
id='ef38f94347e94562b5bb8424a56397d8',
decision='APPROVE',
proposed_end_date='2017-07-11T18:45:37.098Z',
bulk=True,
recommendation=sailpoint.certifications.models.review_recommendation.Review Recommendation(
                    recommendation = '', 
                    reasons = ["Reason 1","Reason 2"], 
                    timestamp = '2020-06-01T13:49:37.385Z', ),
comments='This user no longer needs access to this source'
)

```
[[Back to top]](#) 

