---
id: reviewrecommendation
title: Reviewrecommendation
pagination_label: Reviewrecommendation
sidebar_label: Reviewrecommendation
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Reviewrecommendation', 'Reviewrecommendation'] 
slug: /tools/sdk/python/certifications/models/reviewrecommendation
tags: ['SDK', 'Software Development Kit', 'Reviewrecommendation', 'Reviewrecommendation']
---

# Reviewrecommendation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recommendation** | **str** | The recommendation from IAI at the time of the decision. This field will be null if no recommendation was made. | [optional] 
**reasons** | **[]str** | A list of reasons for the recommendation. | [optional] 
**timestamp** | **datetime** | The time at which the recommendation was recorded. | [optional] 
}

## Example

```python
from sailpoint.certifications.models.reviewrecommendation import Reviewrecommendation

reviewrecommendation = Reviewrecommendation(
recommendation='',
reasons=["Reason 1","Reason 2"],
timestamp='2020-06-01T13:49:37.385Z'
)

```
[[Back to top]](#) 

