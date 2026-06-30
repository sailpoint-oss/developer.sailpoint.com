---
id: outliercontributingfeature
title: Outliercontributingfeature
pagination_label: Outliercontributingfeature
sidebar_label: Outliercontributingfeature
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Outliercontributingfeature', 'Outliercontributingfeature'] 
slug: /tools/sdk/python/iai-outliers/models/outliercontributingfeature
tags: ['SDK', 'Software Development Kit', 'Outliercontributingfeature', 'Outliercontributingfeature']
---

# Outliercontributingfeature


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Contributing feature id | [optional] 
**name** | **str** | The name of the feature | [optional] 
**value_type** | [**Outliervaluetype**](outliervaluetype) |  | [optional] 
**value** | **float** | The feature value | [optional] 
**importance** | **float** | The importance of the feature. This can also be a negative value | [optional] 
**display_name** | **str** | The (translated if header is passed) displayName for the feature | [optional] 
**description** | **str** | The (translated if header is passed) description for the feature | [optional] 
**translation_messages** | [**Outlierfeaturetranslation**](outlierfeaturetranslation) |  | [optional] 
}

## Example

```python
from sailpoint.iai_outliers.models.outliercontributingfeature import Outliercontributingfeature

outliercontributingfeature = Outliercontributingfeature(
id='66e38828-5017-47af-92ff-9844871352c5',
name='entitlement_count',
value_type=sailpoint.iai_outliers.models.outliervaluetype.outliervaluetype(
                    name = 'INTEGER', 
                    ordinal = 0, ),
value=1,
importance=-0.15,
display_name='Number of entitlements',
description='The total number of entitlements belonging to an identity',
translation_messages=sailpoint.iai_outliers.models.outlier_feature_translation.Outlier Feature Translation(
                    display_name = sailpoint.iai_outliers.models.translation_message.Translation Message(
                        key = 'recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_HIGH', 
                        values = ["75","department"], ), 
                    description = sailpoint.iai_outliers.models.translation_message.Translation Message(
                        key = 'recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_HIGH', 
                        values = ["75","department"], ), )
)

```
[[Back to top]](#) 

