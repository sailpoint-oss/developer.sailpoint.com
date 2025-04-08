---
id: beta-access-recommendation-message
title: AccessRecommendationMessage
pagination_label: AccessRecommendationMessage
sidebar_label: AccessRecommendationMessage
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessRecommendationMessage', 'BetaAccessRecommendationMessage'] 
slug: /tools/sdk/python/beta/models/access-recommendation-message
tags: ['SDK', 'Software Development Kit', 'AccessRecommendationMessage', 'BetaAccessRecommendationMessage']
---

# AccessRecommendationMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**interpretation** | **str** | Information about why the access item was recommended. | [optional] 
}

## Example

```python
from sailpoint.beta.models.access_recommendation_message import AccessRecommendationMessage

access_recommendation_message = AccessRecommendationMessage(
interpretation='95% of your peers have this access.'
)

```
[[Back to top]](#) 

