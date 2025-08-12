---
id: v2025-outlier-contributing-feature
title: OutlierContributingFeature
pagination_label: OutlierContributingFeature
sidebar_label: OutlierContributingFeature
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'OutlierContributingFeature', 'V2025OutlierContributingFeature'] 
slug: /tools/sdk/python/v2025/models/outlier-contributing-feature
tags: ['SDK', 'Software Development Kit', 'OutlierContributingFeature', 'V2025OutlierContributingFeature']
---

# OutlierContributingFeature


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Contributing feature id | [optional] 
**name** | **str** | The name of the feature | [optional] 
**value_type** | [**OutlierValueType**](outlier-value-type) |  | [optional] 
**value** | **float** | The feature value | [optional] 
**importance** | **float** | The importance of the feature. This can also be a negative value | [optional] 
**display_name** | **str** | The (translated if header is passed) displayName for the feature | [optional] 
**description** | **str** | The (translated if header is passed) description for the feature | [optional] 
**translation_messages** | [**OutlierFeatureTranslation**](outlier-feature-translation) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.outlier_contributing_feature import OutlierContributingFeature

outlier_contributing_feature = OutlierContributingFeature(
id='66e38828-5017-47af-92ff-9844871352c5',
name='entitlement_count',
value_type=sailpoint.v2025.models.outlier_value_type.OutlierValueType(
                    name = 'INTEGER', 
                    ordinal = 0, ),
value=1.0,
importance=-0.15,
display_name='Number of entitlements',
description='The total number of entitlements belonging to an identity',
translation_messages=sailpoint.v2025.models.outlier_feature_translation.Outlier Feature Translation(
                    display_name = sailpoint.v2025.models.translation_message.Translation Message(
                        key = 'recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_HIGH', 
                        values = [75, department], ), 
                    description = sailpoint.v2025.models.translation_message.Translation Message(
                        key = 'recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_HIGH', 
                        values = [75, department], ), )
)

```
[[Back to top]](#) 

