---
id: v2025-outlier-feature-translation
title: OutlierFeatureTranslation
pagination_label: OutlierFeatureTranslation
sidebar_label: OutlierFeatureTranslation
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'OutlierFeatureTranslation', 'V2025OutlierFeatureTranslation'] 
slug: /tools/sdk/python/v2025/models/outlier-feature-translation
tags: ['SDK', 'Software Development Kit', 'OutlierFeatureTranslation', 'V2025OutlierFeatureTranslation']
---

# OutlierFeatureTranslation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | [**TranslationMessage**](translation-message) |  | [optional] 
**description** | [**TranslationMessage**](translation-message) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.outlier_feature_translation import OutlierFeatureTranslation

outlier_feature_translation = OutlierFeatureTranslation(
display_name=sailpoint.v2025.models.translation_message.TranslationMessage(
                    key = 'recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_HIGH', 
                    values = [75, department], ),
description=sailpoint.v2025.models.translation_message.TranslationMessage(
                    key = 'recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_HIGH', 
                    values = [75, department], )
)

```
[[Back to top]](#) 

