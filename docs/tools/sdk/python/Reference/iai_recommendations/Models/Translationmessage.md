---
id: translationmessage
title: Translationmessage
pagination_label: Translationmessage
sidebar_label: Translationmessage
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Translationmessage', 'Translationmessage'] 
slug: /tools/sdk/python/iai-recommendations/models/translationmessage
tags: ['SDK', 'Software Development Kit', 'Translationmessage', 'Translationmessage']
---

# Translationmessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The key of the translation message | [optional] 
**values** | **[]str** | The values corresponding to the translation messages | [optional] 
}

## Example

```python
from sailpoint.iai_recommendations.models.translationmessage import Translationmessage

translationmessage = Translationmessage(
key='recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_HIGH',
values=["75","department"]
)

```
[[Back to top]](#) 

