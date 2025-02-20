---
id: v2024-outlier-contributing-feature
title: OutlierContributingFeature
pagination_label: OutlierContributingFeature
sidebar_label: OutlierContributingFeature
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'OutlierContributingFeature', 'V2024OutlierContributingFeature'] 
slug: /tools/sdk/python/v2024/models/outlier-contributing-feature
tags: ['SDK', 'Software Development Kit', 'OutlierContributingFeature', 'V2024OutlierContributingFeature']
---

# OutlierContributingFeature


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Contributing feature id | [optional] 
**name** | **str** | The name of the feature | [optional] 
**value_type** |  **Enum** [  'INTEGER',    'FLOAT' ] | The data type of the value field | [optional] 
**value** | [**OutlierContributingFeatureValue**](outlier-contributing-feature-value) |  | [optional] 
**importance** | **float** | The importance of the feature. This can also be a negative value | [optional] 
**display_name** | **str** | The (translated if header is passed) displayName for the feature | [optional] 
**description** | **str** | The (translated if header is passed) description for the feature | [optional] 
**translation_messages** | [**OutlierFeatureTranslation**](outlier-feature-translation) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.outlier_contributing_feature import OutlierContributingFeature

outlier_contributing_feature = OutlierContributingFeature(
id='66e38828-5017-47af-92ff-9844871352c5',
name='entitlement_count',
value_type='INTEGER',
value=0.92,
importance=-0.15,
display_name='Number of entitlements',
description='The total number of entitlements belonging to an identity',
translation_messages=sailpoint.v2024.models.outlier_feature_translation.OutlierFeatureTranslation(
                    display_name = sailpoint.v2024.models.translation_message.TranslationMessage(
                        key = 'recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_HIGH', 
                        values = [75, department], ), 
                    description = sailpoint.v2024.models.translation_message.TranslationMessage(
                        key = 'recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_HIGH', 
                        values = [75, department], ), )
)

```
[[Back to top]](#) 

