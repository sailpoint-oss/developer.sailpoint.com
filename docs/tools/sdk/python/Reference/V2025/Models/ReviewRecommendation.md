---
id: v2025-review-recommendation
title: ReviewRecommendation
pagination_label: ReviewRecommendation
sidebar_label: ReviewRecommendation
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ReviewRecommendation', 'V2025ReviewRecommendation'] 
slug: /tools/sdk/python/v2025/models/review-recommendation
tags: ['SDK', 'Software Development Kit', 'ReviewRecommendation', 'V2025ReviewRecommendation']
---

# ReviewRecommendation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recommendation** | **str** | The recommendation from IAI at the time of the decision. This field will be null if no recommendation was made. | [optional] 
**reasons** | **[]str** | A list of reasons for the recommendation. | [optional] 
**timestamp** | **datetime** | The time at which the recommendation was recorded. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.review_recommendation import ReviewRecommendation

review_recommendation = ReviewRecommendation(
recommendation='',
reasons=[Reason 1, Reason 2],
timestamp='2020-06-01T13:49:37.385Z'
)

```
[[Back to top]](#) 

