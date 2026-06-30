---
id: outlierfeaturetranslation
title: Outlierfeaturetranslation
pagination_label: Outlierfeaturetranslation
sidebar_label: Outlierfeaturetranslation
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Outlierfeaturetranslation', 'Outlierfeaturetranslation'] 
slug: /tools/sdk/python/iai-outliers/models/outlierfeaturetranslation
tags: ['SDK', 'Software Development Kit', 'Outlierfeaturetranslation', 'Outlierfeaturetranslation']
---

# Outlierfeaturetranslation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | [**Translationmessage**](translationmessage) |  | [optional] 
**description** | [**Translationmessage**](translationmessage) |  | [optional] 
}

## Example

```python
from sailpoint.iai_outliers.models.outlierfeaturetranslation import Outlierfeaturetranslation

outlierfeaturetranslation = Outlierfeaturetranslation(
display_name=sailpoint.iai_outliers.models.translation_message.Translation Message(
                    key = 'recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_HIGH', 
                    values = ["75","department"], ),
description=sailpoint.iai_outliers.models.translation_message.Translation Message(
                    key = 'recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_HIGH', 
                    values = ["75","department"], )
)

```
[[Back to top]](#) 

